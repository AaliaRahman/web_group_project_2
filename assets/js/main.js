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
$('#submitButton').on('click', function(){
var nameElement = document.getElementById('name');
var name = nameElement.value;
$('.submission').css({"display": "flex"});
$('.customCakeForm').css({"display": "none"});
alert("Thank you for your order, "+ name +"! We will get back to your shortly.")
});

//shrink and fix nav bar on scroll
$( window ).scroll(function() {
  $( "header" ).css({'position':'fixed', 'opacity':'0.9', 'z-index': '4', 'width':'100%', 'transform' : 'scaleY(0.9) translateY(-20px)'});
});

});
