$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 500) { 
              $('.navbar').addClass('solid');
             
          } else {
              $('.navbar').removeClass('solid');
             
          }
        });
});


 function Ads_view(){
	window.open('Ads_view.html','_self');

}