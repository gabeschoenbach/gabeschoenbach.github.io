import subprocess
import os
import re
import sys
# subprocess.check_call([sys.executable, '-m', 'pip', 'install', 
# 'beautifulsoup4'])
from bs4 import BeautifulSoup

def update_tagline(file_path):
    # Add a "go back" link to the markdown file
    with open(file_path, 'r') as file:
        lines = file.readlines()
        if len(lines) >= 2 and 'go back ↰' not in lines[1]:
            lines.insert(1, '[go back ↰](https://gabey.zip)\n')
    with open(file_path, 'w') as file:
        file.writelines(lines)

def create_html_file(text_file):
    # Use pandoc to convert the markdown into an html file
    html_file = text_file.split('.')[0] + '.html'

    pandoc_command = ['pandoc', text_file]
    with open(html_file, 'w') as html_output:
        subprocess.run(pandoc_command, stdout=html_output, text=True)

    # Append additional HTML boilerplate to the generated HTML file
    with open(html_file, 'r+') as file:
        content = file.read()
        file.seek(0)
        file.write('''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name=viewport content="width=device-width, initial-scale=1">
<title>Gabe Schoenbach</title>
<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>\n''')
        file.write(content)
        file.write('\n</body>\n</html>\n')

def add_anchors(file_path):
    # Add the little hashtag links
    with open(file_path, 'r') as file:
        content = file.read()
        pattern = r'<h2 id="(.*?)">(.*?)</h2>'
        content = re.sub(pattern, r'<h2 id="\1"><a href="#\1">#</a> \2</h2>', content)
    with open(file_path, 'w') as file:
        file.write(content)

def add_back_to_top(file_path):
    # Add back to top link after every chapter
    with open(file_path, 'r') as file:
        content = file.read()
        pattern = r'(<h[2r][^>]*>.*?</h[2r]>)'
        headers = re.findall(pattern, content)

        # Iterate through the headers and add "Back to top" link just above the next header
        for i in range(len(headers) - 1):
            back_to_top = '<p class="backtotoplink"><a title="Back to top" href="#">↸ Back to top</a></p>'
            header = headers[i]
            next_header = headers[i + 1]

            # Find the position of the next header and insert the "Back to top" link above it
            position = content.find(next_header)
            content = content[:position] + back_to_top + '\n' + content[position:]

        # Add the final "Back to top" link just above the closing </body> tag
        back_to_top_final = '<p class="backtotoplink"><a title="Back to top" href="#">↸ Back to top</a></p>'
        content = content.replace('</body>', back_to_top_final + '\n</body>', 1)

    with open(file_path, 'w') as file:
        file.write(content)
   
def add_toc_and_entries(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
        pattern = r'<h2 id="(.*?)">(.*?)</h2>'
        toc_entries = [f'<div><a href="#{match[0]}">{re.sub(r"<.*?>", "", match[1])}</a></div>\n' for match in re.findall(pattern, content)]
        toc = f'<div class="page_toc">\n' + ''.join(toc_entries) + '</div>'
        first_h2 = re.search(r'<h2', content)
        if first_h2:
            content = content[:first_h2.start()] + toc + '\n' + content[first_h2.start():]
        else:
            content = toc + '\n' + content
    with open(file_path, 'w') as file:
        file.write(content)

def add_webpage_list_to_index():
    index_file = "index.html"
    lineno = 13
    html_files = [filename for filename in os.listdir(".") if filename.endswith(".html")]
    html_files.sort(reverse=True)
    
    with open(index_file, "r") as file:
        content = file.readlines()

    content.insert(lineno - 1, "</div>\n")
    for line in html_files:
        if line != "index.html":
            line = line.split(".")[0]
            link_entry = f'<div><a href="./{line}.html">{line}</a></div>\n'
            content.insert(lineno - 1, link_entry)
    content.insert(lineno - 1, "<div class=toc>\n")

    with open(index_file, "w") as file:
        file.writelines(content)

def prettify_html(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    soup = BeautifulSoup(content, 'html.parser')
    prettified_content = soup.prettify(formatter=None)

    with open(file_path, 'w') as file:
        file.write(prettified_content)

def main():
    text_files = [file for file in os.listdir() if file.endswith('.text')]
    for text_file in text_files:
        html_file = text_file.split('.')[0] + '.html'
        if "index" not in text_file:
            update_tagline(text_file)
            create_html_file(text_file)
            add_anchors(html_file)
            add_back_to_top(html_file)
            add_toc_and_entries(html_file)
        else:
            create_html_file(text_file)
            add_webpage_list_to_index()

if __name__ == "__main__":
    main()
