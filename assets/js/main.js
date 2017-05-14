$(document).ready(function(){
  console.log("The document is ready");

   $('.obutton').on('click', function(){
    $('.cakeMenu').css({"display": "none"});
     $('.otherMenu').css({"display": "flex"});
   });

   $('.cbutton').on('click', function(){
    $('.otherMenu').css({"display": "none"});
     $('.cakeMenu').css({"display": "block"});
   });

//SubmitForm
//Store name of customer in var. Apply var to alert message.
//Thank you for your order, name! We will get back to your shortly.
var name = function(){
  alert("Thank you for your order, We will get back to you shortly.");
};

  $('.thankYou').on('click', function(){
  alert("Thank you for your order, We will get back to you shortly.");
};

//Form submission
$('.submitButton').on('click', function(){
$('.customCakeForm').css({'display':'none'});
$('.otherMenu').css({'display':'flex'});
});



});
