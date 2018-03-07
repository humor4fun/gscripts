function buildUniqueNamedRanges() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("sheetName");
  
  // Use this cell formula to create 'safe' NamedRange names based on your own cell data.
  // =REGEXREPLACE(REGEXREPLACE(REGEXREPLACE(REGEXREPLACE(REGEXREPLACE(REGEXREPLACE(REGEXREPLACE(REGEXREPLACE(REGEXREPLACE(REGEXREPLACE(REGEXREPLACE(REGEXREPLACE(REGEXREPLACE(REGEXREPLACE(CONCAT(if(REGEXMATCH(LEFT(A2,1), "[0-9]"),CONCAT("A_",LEFT(A2,1)),LEFT(A2,1)), RIGHT(A2,LEN(A2)-1)),":","_"),"'","_"),"°","_"),"\.","_"),"\(","_"),"\)","_"),"/","_"),",","_")," ","_"),"-","_"),"!","_"),"⅓","_"),"&","_"),"~","_")
  
  //modify these values to create your own ranges
  var startCol = 2;
  var endCol = 8;
  var nameCol = 11;

  for(var row=2; row<.getMaxRows(); row++) {
    var range = sheet.getRange(row,startCol,1,endCol);
    var name = sheet.getRange(row,nameCol).getValue();

    //test for name collision, and append z just in case
    var namedRanges = ss.getActiveSheet().getNamedRanges();
    for(i=0;i<namedRanges.length;i++){
      if(name == i){
          name = name+"z";
      }
    }     
    ss.setNamedRange(name, range);
  };
} 

function removeNamedRanges(){
    var namedRanges = ss.getActiveSheet().getNamedRanges();
    for(i=0;i<namedRanges.length;i++){
        namedRanges[i].remove();
    } 
}
