Author: Chris Holt
Date: Feb 23, 2015

This script will search all mail in Gmail and add a label to it designating the year it occured. Depending on the amount of mail, this could take a very considerable amount of time. The intended use is that when a user reaches their storage limit in their Gmail account, they can run this script and the easily use Google Takeout to download a mail archive of the oldest year (or two/three/etc) of emails for offline archival, then delete these email files from their account to free up space. 

WARNING: GScripts impose a number of artificial limits on certain functions. before deleting any data: YOU SHOULD SEARCH YOUR MAILBOX YOURSELF TO CONFIRM ALL MAIL IS LABELED. Deleting your data is your own business. This script does NOT delete data. ---> USE AT YOUR OWN RISK.

Notes: 
- This script will label ALL emails with the "archive-yyyy" label format.
- In the free Gmail user account execution limit of 6 minutes, this script can reliably label only 1450 (batch size 10) email threads. If you have more emails, you will need to cycle this script multiple times (See Troubleshooting #A.1).
- Changing the batch size may alter the time it takes to execute this script, but you may encounter hidden gscrit limits above batch sizes of 50. I have benchmarked this script using batches of [1,2,5,10,20,25,30,40,50,100] and found that with a batch size of 10 it executes the fastest, resulting in the most threads being labeled during the allocated exeuction time limit.
- As of 2015, my personal email account has enough storage space (15GB) to store roughly 5 years of email for me. This will likely shrink in the future as emails contain larger image files, or I receive more mail in the future.
- If an email thread receives emails during multiple years, the thread will be labeled with ALL years, however Gmail may only display the latest label attached.


Troubleshooting:
A: If you receive this error "Exceeded maximum execution time", then you have a few options:
  1. Run the script again, and again and again until it tells you it is complete.
  2. Reduce the number of years that you are trying to label in the "labelAll()" function.
  3. Subscribe to Google Workspace so that your execution time is raised from 6minutes to 30minutes.
  4. Confirm that all mail for a certain year has been labeled, download those emails (using Google Takeout), delete all emails from your account with that years' label, then try to run the script again.
  5. Solve the execution time problem yourself with a clever bypass.
