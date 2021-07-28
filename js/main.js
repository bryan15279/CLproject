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



// date of sale
var countDownDate = new Date("Oct 9, 2021 13:21:10").getTime();

// count clock down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the sale date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display the result in an element with id="clock"
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over display
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "YOU MISSED THE SALE";
  }
}, 1000);

const listItems = document.getElementById('services-nav');
const services = ['Wheels and Windows', 'Wax Only', 'Interior Only', 'Full Service']
const serviceList = document.getElementById('services')
for (let i = 0; i < services.length; i ++) {
 const li = document.createElement('li')
 li.innerHTML = services[i]
 serviceList.appendChild(li);

}


listItems.addEventListener('click', (e) => {
  e.preventDefault()
 if (serviceList.style.display == 'none'){
  serviceList.style.display = 'block'
  }

 else {
  serviceList.style.display = 'none'


 }


});



// <li>Wheels and Windows</li>
//                 <li>Wax Only</li>
//                 <li>Interior Only</li>
//                 <li>Full Service</li>