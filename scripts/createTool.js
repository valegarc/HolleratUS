
  document.getElementById("button5").addEventListener("click",   
  function showAlert() {

        var value1 = document.getElementById('ToolID').value;
        var value2 = document.getElementById('ToolStatus').value;
        var value3 = document.getElementById('ToolType').value;
        var value4 = document.getElementById('ToolLocation').value;
     
        alert("ToolID: " + value1 + "\nToolStatus: " + value2 + "\nToolType: " + value3 + "\nToolLocation: " + value4);
    }
);
  