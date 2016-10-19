1 Create a new spreadsheet
2 Tools > Script Editor
3 Repalce all text in Code.gs with the code provided
4 Save the script and reload the spreadsheet
5 Use this search query in gmail to find your emails
```
from:(noreply@steampowered.com) subject:(You have sold an item on the Community Market)
```
6 Mark all these emails with the label "ssl"
7 Go back to the spreadsheet
8 Script Runner > Pull data from Gmail
9 Let it run, if it times out, run it again
10 Pretty up the spreadsheet with a header row
11 You can use this formula to sum the income and watch the script run in realtime
```
=ArrayFormula(sum(G2:G*1))
```
