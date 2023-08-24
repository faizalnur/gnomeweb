function restrictNonNumeric(event) {
  var input = event.target;
  input.value = input.value.replace(/\D/g, '');
}

function numbClick(action, idForm) {
  var currentVal = $('#' + idForm).val();
  if(!currentVal){
      currentVal=0
  }
  // Validate if currentVal can be parsed as an integer
  if (!isNaN(currentVal) && currentVal !== "") {
    var val = action === 'add' ? parseInt(currentVal) + 1 : parseInt(currentVal) - 1;
    $('#' + idForm).val(val);
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
}