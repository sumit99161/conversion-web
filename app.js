var kilometersElement = document.getElementById("kValue");
      var milesElement = document.getElementById("mValue");
      function convert() {
         var km = milesElement.value * 1.60934;
         kilometersElement.innerHTML = km;
      }
      
    
var submitButton = document.getElementById("convertButton");

      if (submitButton.addEventListener) {
         submitButton.addEventListener("click", convert, false); 
         window.addEventListener("load", function() {
            document.getElementById('mValue').value = ""; // clear last miles value on reload
            document.getElementById('kValue').innerHTML = ""; // clear previous results on reload 
         }, false);
      } else if (submitButton.attachEvent)  {
         submitButton.attachEvent("onclick", convert);
        
         window.attachEvent("onload", function() {
            document.getElementById('mValue').value = ""; // clear last miles value on reload
            document.getElementById('kValue').innerHTML = ""; // clear previous results on reload 
         });
      }
