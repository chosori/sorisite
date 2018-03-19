// main.js
(function($){
// -------------------------------------------------
var openBtn = $('.open_btn');
var btnBox = $('.btn_box');
var bodyW = $('body').width();
var timed = 1000;
// 1
// cnbBox.hide();

// 2.
btnBox.css({transform:'translateX(' + bodyW + 'px)', transition:'all'+ ' ' + timed + 'ms ease',display:'block'});
var active =function(){ $('.active').css({transform:'translate(0)'}); };


openBtn.on('click',function(e) {
  e.preventDefault();
 // 1. slide기능으로 사라지거나 나타나게 만들기.
 // btnBox.slideToggle();

 // 2. transform 기능으로 움직여서 처리하기
 // btnBox.toggleClass('active');
 var cnbtr = btnBox.hasClass('active');
  // console.log(cnbtr);
  if(!cnbtr){
    btnBox.addClass('active');
    openBtn.addClass('active');
    btnBox.css({transform:'translate(0)'});
    // active();
  }else{
    btnBox.removeClass('active');
    openBtn.removeClass('active');
    btnBox.css({transform:'translateX(' + bodyW + 'px)'});
  }

});




var btnBox = $('.btn_box');
var myBtn = btnBox.find('.my_btn');
$('.next_box').hide();

myBtn.on('click',function(e) {
  e.preventDefault();
  $(this).next('.next_box').slideToggle();
  $(this).parentsUntil().siblings().children('.next_box').slideUp();
});







})(this.jQuery);