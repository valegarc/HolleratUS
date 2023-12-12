function askNewTool(action) {
    if (action === 'Y/N') {
      var sharpen = confirm('Would you like to sharpen the tool?');
      if (sharpen) {
        // Code to handle sharpening the tool (You can add your logic here)
        console.log('Tool sharpened!');
      } else {
        // Code if user chooses not to sharpen the tool
        console.log('Tool not sharpened.');
      }
    }
  }
  
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
        console.log('Tool marked as scrap!');
      } else {
        // Code if user chooses not to mark the tool as scrap
        console.log('Tool not marked as scrap.');
      }
    }
  }
  