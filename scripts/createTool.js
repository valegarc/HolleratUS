  // Function for button 5
  document.getElementById("button5").addEventListener("click",   
  function showAlert() {
        // Retrieve values from input elements
        var value1 = document.getElementById('ToolID').value;
        var value2 = document.getElementById('ToolStatus').value;
        var value3 = document.getElementById('ToolType').value;
        var value4 = document.getElementById('ToolLocation').value;
     
        // Display the information in an alert
        alert("ToolID: " + value1 + "\nToolStatus: " + value2 + "\nToolType: " + value3 + "\nToolLocation: " + value4);
    }
);
  