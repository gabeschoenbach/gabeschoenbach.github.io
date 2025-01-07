import os
import re

def generate_redirects():
    print("Compiling...")

    # Directory containing the .redirect files
    redirects_dir = "redirects/"
    redirect_files = [f for f in os.listdir(redirects_dir) if f.endswith(".redirect")]

    for redirect_file in redirect_files:
        file_path = os.path.join(redirects_dir, redirect_file)
        
        # Read the content of the .redirect file
        with open(file_path, "r") as f:
            lines = f.readlines()
            url = lines[0].strip() if lines else ""
        
        # Check if "go back ↰" exists in the first 10 lines
        if "go back ↰" not in "".join(lines[:10]) and redirect_file != "index.md":
            # Insert "go back ↰" as the second line
            lines.insert(1, "[go back ↰](https://gabey.zip)\n")
            with open(file_path, "w") as f:
                f.writelines(lines)
        
        # Generate HTML file
        redirect_head = redirect_file.split(".")[0]
        html_file = redirect_head + ".html"
        html_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="icon.png"/>
    <title>Gabe Schoenbach</title>
    <link rel="stylesheet" type="text/css" href="main.css">
    <meta http-equiv="refresh" content="0; url={url}" />
</head>
<body>
    <p>Click <a href="{url}">here</a> to be redirected</p>
</body>
</html>
"""
        # Write the HTML content to the file
        with open(html_file, "w") as f:
            f.write(html_content)

    print("Redirects generated!!")

if __name__ == "__main__":
    generate_redirects()
