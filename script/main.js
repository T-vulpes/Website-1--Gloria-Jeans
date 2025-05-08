$(document).ready(function(){
   var x = document.getElementById("mouseScrool");
  $(x).on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){ // 1000 =  1saniye 
   
        window.location.hash = hash;
      });
    } 
  });
});


