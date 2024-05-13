
 document.addEventListener("DOMContentLoaded", function() {
    var dropdownOptions = document.querySelectorAll('.dropdown-content a');
    
    dropdownOptions.forEach(function(option) {
      option.addEventListener('click', function() {
        var selectedOption = this.textContent;
        alert("You selected: " + selectedOption);
    
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var dropdownOptions = document.querySelectorAll('.dropdown-content a');
    
    dropdownOptions.forEach(function(option) {
      option.addEventListener('click', function() {
        var selectedOption = this.textContent;
        alert("You selected: " + selectedOption);
        
      });
    });
  });