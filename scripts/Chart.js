
// Function to ask about sharpening the tool
function askNewTool(action) {
  if (action === 'Y/N') {
    var sharpen = confirm('Would you like to sharpen the tool?');
    if (sharpen) {
      // Code to handle sharpening the tool (You can add your logic here)
      confirmSharpened(); // Call the confirmation function
    } else {
      // Code if user chooses not to sharpen the tool
      console.log('Tool not sharpened.');
    }
  }
}
    

// Function to confirm sharpening the tool
function confirmSharpened() {
  var confirmSharpen = confirm('Are you sure you want to confirm the tool as sharpened?');
  if (confirmSharpen) {
    // Code to confirm the tool as sharpened (You can add your logic here)
    console.log('Tool confirmed as sharpened!');
  } else {
    // Code if user cancels the confirmation
    console.log('Sharpen confirmation canceled.');
  }
}



      //
// Function to ask about creating a new tool
function createNewTool(action) {
  if (action === 'Create') {
    var create = confirm('Would you like to create a new tool?');
    if (create) {
      // Code to handle creating a new tool (You can add your logic here)
      console.log('New tool created!');
    } else {
      // Code if user chooses not to create a new tool
      console.log('No new tool created.');
    }
  }
}

// Function to ask about marking a tool as scrap
function checkToolScrap(action) {
  if (action === 'Scrap') {
    var scrap = confirm('Do you want to mark the tool as scrap?');
    if (scrap) {
      // Code to handle marking the tool as scrap (You can add your logic here)
      confirmScrapped(); // Call the confirmation function
    } else {
      console.log('Tool marked as scrap!');
      // Code if user chooses not to mark the tool as scrap
      console.log('Tool not marked as scrap.');
    }
  }
}

// Function to confirm marking the tool as scrap
function confirmScrapped() {
  var confirmScrap = confirm('Are you sure you want to confirm the tool as scrapped?');
  if (confirmScrap) {
    // Code to confirm the tool as scrapped (You can add your logic here)
    console.log('Tool confirmed as scrapped!');
  } else {
    // Code if user cancels the confirmation
    console.log('Scrap confirmation canceled.');
  }
}
  
  
 
  
