/*
This code is designed to check if the completed Label exists within Gmail,
otherwise it will create it.

Developed by The Gift of Script (https://www.pbainbridge.co.uk)
Source: https://script.google.com/home/projects/1R3rFxuRc2VyNV3qhefuDN4smIRCxPihqVeIDM4RA6D3JdvCM9_ciPsUI/edit
*/

function createGmailLabel(newLabel) {
  
  // get current Gmail Labels 
  var labels = GmailApp.getUserLabels();
  var labelsLength = labels.length;
  
  // empty array for pushing current Labels into
  var labelsArray = [];
  
  // loop through current Labels and get an array of their names
  for (var i=0; i<labelsLength; i++) {
    var labelName = labels[i].getName();
    labelsArray.push(labelName);
  }
  
  // current Labels array
  Logger.log(labelsArray);
  
  // reset before loop
  var labelExists = '';
  
  
  // loop through current Labels looking for match ************************
  var labelsArrayLength = labelsArray.length;
  for (var j=0; j<labelsArrayLength; j++) {
    
    if (labelsArray[j] == newLabel) {
      
      // exit loop if match found
      Logger.log('Found ' + newLabel + ' Label');
      var labelExists = true;
      break;
      
    }
    else {
      Logger.log('Cannot find ' + newLabel + ' Label');
      var labelExists = false;
    }
    
  } // end of loop through current Labels looking for match ****************
  
  // if Label does not exist then create it
  if (labelExists != true) {
    
    var completedLabel = GmailApp.createLabel(newLabel);
    Logger.log('Created Label');
    
    var labelCompleted = GmailApp.getUserLabelByName(newLabel);
    return labelCompleted;
    
  }
  else {
    var labelCompleted = GmailApp.getUserLabelByName(newLabel);
    return labelCompleted;
  }
  
  
}
