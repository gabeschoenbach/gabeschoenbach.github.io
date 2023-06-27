#!/bin/bash
for i in $( ls *.text ); do
    # update tagline
    if [[ $(head -n 3 $i | grep 'go back ↰' | wc -l) == 0 ]]
    then
        gsed -i '3s;^;[go back ↰](./index.html);' $i
    fi
    html_file="$(echo $i | cut -d'.' -f1).html"
    # header
    echo '<!DOCTYPE html>' > $html_file
    echo '<html lang="en">' >> $html_file
    echo '<head>' >> $html_file
    echo '<meta charset="utf-8">' >> $html_file
    echo '<meta name=viewport content="width=device-width, initial-scale=1">' >> $html_file
    echo '<title>Gabe Schoenbach</title>' >> $html_file
    echo '<link rel="stylesheet" type="text/css" href="main.css">' >> $html_file
    echo '</head>' >> $html_file
    echo '<body>' >> $html_file
    # .text file
    pandoc $i >> $html_file
    # footer
    echo '</body>' >> $html_file
    echo '</html>' >> $html_file

done

# add anchors
grep -HInri "h2 id" *.html | while read -r result; do
    filename="$(echo $result | cut -d':' -f1)"
    linenumber="$(echo $result | cut -d':' -f2)"
    line="$(echo $result | cut -d':' -f3-)"
    id="$(echo $line | cut -d'"' -f2)"
    replacement_line="$(echo $line | sed "s|>|><a href=\"#$id\">#</a> |")"
    gsed -i $filename -e "$linenumber c\\" -e "$replacement_line"
done

# add back to top TODO: adds backtotop on all but last header
ls *.html | while read -r filename; do
    grep -HInri "<h[2r]" $filename | cut -d':' -f2 | tail -r | sed '$d' | while read -r linenumber; do
        gsed -i "${linenumber}i<p class='backtotoplink'><a title='Back to top' href='#'>↸ Back to top</a></p>" $filename
    done
done

# add TOCs (a different one for index.html)
ls *.html | while read -r result; do
    if [[ $result = "index.html" ]]
    then
      tocClass="toc"
    else
      tocClass="pagetoc"
    fi
    gsed -i "12i<div class=${tocClass}>" $result
    gsed -i '13i</div>' $result
done
grep -HInri "h2 id" *.html | tail -r | while read -r result; do
    filename="$(echo $result | cut -d':' -f1)"
    line="$(echo $result | cut -d':' -f3-)"
    toc_line="$(echo $line | sed "s|</a>||" | sed "s|^[^>]*>||" | sed "s|</h2>|</a>|")"
    gsed -i "13i<div>$toc_line</div>" $filename
done

# add list of web pages
lineno=13
ls *.html | tail -r | sed "s|.html$||" | while read -r line; do
    if [ $line != "index" ]
    then
        gsed -i "${lineno}i<div><a href='./$line.html'>$line</a></div>" index.html
    fi
done
