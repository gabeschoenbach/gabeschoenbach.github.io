while true
do
  sh pandocify.sh
  osascript -e 'tell application "Google Chrome" to tell the first tab of its first window to reload'
  sleep 1
done
