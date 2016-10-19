#Usage
* Create a new spreadsheet
* Tools > Script Editor
* Repalce all text in Code.gs with the code provided
* Save the script and reload the spreadsheet
* Use this search query in gmail to find your emails
```
from:(noreply@steampowered.com) subject:(You have sold an item on the Community Market)
```
* Mark all these emails with the label "ssl"
* Go back to the spreadsheet
* Script Runner > Pull data from Gmail
* Let it run, if it times out, run it again
* Pretty up the spreadsheet with a header row
* You can use this formula to sum the income and watch the script run in realtime
```
=ArrayFormula(sum(G2:G*1))
```
