//This is my custom function
function ValidateEmail() 
{ 
  var emailValue = $("#email-input").val()
  if(emailValue != "")
  { 
    if(isEmail(emailValue))
    {
      alert("Thanks for signing up!")
    }
    else
    {
      alert("Invalid Email")
    }
  } 
  else 
  {
    alert("You haven't entered an email address!")
  }
}

// Found email validation function from https://stackoverflow.com/questions/2507030/email-validation-using-jquery
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

//Replace line 6 if needed
// if($("#email-input").val().includes('@'))

//IF ELSE TEMPLATE
// if(true)
// {
//   alert("Run because its true")
// }
// else
// {
//   alert("Run because its false")
// }