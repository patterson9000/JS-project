
function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var genders = document.querySelectorAll('input[name="gender"]:checked');
  var country = document.getElementById('country').value;
  var message = document.getElementById('message').value;
  var agree = document.getElementById('agree').checked;

  var errorMessage = document.getElementById('error-message');

  if (name === '' || email === '' || genders.length === 0 || country === '' || message === '' || !agree) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';

    var genderValues = Array.from(genders).map(function(gender) {
      return gender.value;
    });

    var formData = {
      name: name,
      email: email,
      gender: genderValues,
      country: country,
      message: message,
      agree: agree
    };

    var formDataString = JSON.stringify(formData);
    console.log(formDataString);

    document.getElementById('myForm').submit();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('myForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });
});
