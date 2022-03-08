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

function Ads_view() {
  window.open('Ads_view.html','_self');
}


function Ads_Content() {
  window.open('Ads_Content.html','_self');
}
let nCount=function(selector){
  $(selector).each(function(){
    $(this).animate({
      Counter:$(this).text()
    },{
      duration:4000,
      easing:"swing",
      step:function(value){
        $(this).text(Math.ceil(value));
      }
    })
  })
}

let a=0;
$(window).scroll(function(){
  let oTop=$(".numbers").offset().top-window.innerHeight;
  if(a==0 && $(window).scrollTop()>=oTop){
    a++;
    nCount(".rect>h1");
  }
})
