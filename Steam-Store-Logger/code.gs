function runme() {

  var lbl = "ssl";
  var sender = "Steam Store <noreply@steampowered.com>";
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getActiveSheet();
  var label = GmailApp.getUserLabelByName(lbl);
  var threads = label.getThreads();
  
  for (var i=0; i<threads.length; i++)
  {
    var messages = threads[i].getMessages();

    for (var j=0; j<messages.length; j++)
    {
      var msg = messages[j].getPlainBody();
      var sub = messages[j].getSubject();
      var dat = messages[j].getDate();
      var sen = messages[j].getFrom();
      var confirm = "=REGEXEXTRACT(indirect(\"D\" & row()),\"[0-9]+-[0-9]+\")";
      var cdate = "=REGEXEXTRACT(indirect(\"D\" & row()),\"..\\w\\s\\d\\d\\s\\d\\d:\\d\\d:\\d\\d\\s\\d\\d\\d\\d\")";
      var total = "=REGEXEXTRACT((REGEXEXTRACT(indirect(\"D\" & row()), \"\\w\\s+[0-9]+[.][0-9]+\")), \"[0-9]+[.][0-9]+\")";
      
      if (sen == sender)
      {      
        s.appendRow([dat, sen, sub, msg,confirm,cdate,total]);
      //return(1);
      }
    }
      threads[i].removeLabel(label);
  }
}

function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menu = [ 
    {name: "Pull data from Gmail",functionName: "runme"},
    null,
  ];  
  ss.addMenu("Script Runner", menu);
}
