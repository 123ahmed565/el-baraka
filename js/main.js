
// preloader
window.onload = function () {
  document.querySelector('.loading-overlay ').style.display = "none";
};


// to top
const scrollBtn= document.querySelector(".scroll-to-top");
const upperbar =document.querySelector('.upperbar');

scrollBtn.style.display="none";

scrollBtn.addEventListener("click",()=>{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
});

document.addEventListener("scroll",(e)=>{
if(document.documentElement.scrollTop <=100){
  scrollBtn.style.display="none";
}else
{
  scrollBtn.style.display="block";
}
});



// start filter range

let min = 10;
let max = 100;

const calcLeftPosition = value => 100 / (100 - 10) *  (value - 10);

$('#rangeMin').on('input', function(e) {
const newValue = parseInt(e.target.value);
if (newValue > max) return;
min = newValue;
$('#thumbMin').css('left', calcLeftPosition(newValue) + '%');
$('#min').html(newValue);
$('#line').css({
    'left': calcLeftPosition(newValue) + '%',
    'right': (100 - calcLeftPosition(max)) + '%'
});
});

$('#rangeMax').on('input', function(e) {
const newValue = parseInt(e.target.value);
if (newValue < min) return;
max = newValue;
$('#thumbMax').css('left', calcLeftPosition(newValue) + '%');
$('#max').html(newValue);
$('#line').css({
    'left': calcLeftPosition(min) + '%',
    'right': (100 - calcLeftPosition(newValue)) + '%'
});
});






  // grid and list for page categories
  
  var galleryWidgetElements = document.querySelectorAll('.gallery-widget');

for (var i = 0, controlViewElement; i < galleryWidgetElements.length; i++)
{
	controlViewElement = galleryWidgetElements[i].querySelector('.control-view');
	controlViewElement.galleryWidgetElement = galleryWidgetElements[i];
	
	controlViewElement.addEventListener('click', function ()
	{
		toggleView(this.galleryWidgetElement);
	});
}

function toggleView(galleryWidgetElement)
{
  // if($('.control-view').hasClass('fa-th-large')){
  //   $(".control-view i").removeClass('fa-th-large');
  //   $(".control-view i").addClass('fa-th-list');
  // }
  // else{
  //   $(".control-view i").addClass('fa-th-list');
  //   $(".control-view i").removeClass('fa-th-large');
  // }
	galleryWidgetElement.classList.toggle('list-view');
}





// start side bar drop down select page categoreis

// $(".content").css("display", "block");
// $(".item-header:first,.icon:first").toggleClass("active");
// ('.item-header .icone:first').addClass('active')
$(".item-header").click(function () {
  $(this).next().slideToggle(500);

  $(this).find(".icon").toggleClass("active");
  $(this).toggleClass("active");
});


// swiper for testimonials
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  autoPlay:false,
  loop:true,
  direction:'horizontal',
  loop:true,
  preloadImages: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// swiper for compare
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  autoPlay:false,
  direction:'horizontal',
  loop:true,
  preloadImages: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    0: {
      slidesPerView: 2.5,
      spaceBetween: 15
  
    },
    600: {
      slidesPerView: 3.5,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    },
      
  }
});



// Start Taostr js to alert
toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "100",
  timeOut: "2000",
  extendedTimeOut: "60000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

$(".add-to-compare").click(function () {
  toastr.success("add to compare");
});

$(".add-to-heart").click(function () {
  toastr.success("add to favourit");
});

$(".fa-trash-alt").click(function () {
  toastr.error("category Removed");
});


// for gallery
var swiper = new Swiper(".mySwiper4", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});



// fuunction delete one card of compare
$(document).on('click','.deleted',function(){
  var id=$(".delete-compare").attr('alt');
  $('.delete-compare'+"."+id).remove();
});


// start swiper for succes partner
var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 5,
  spaceBetween: 30,
  grabCursor:true,
  freeMode: true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    0: {
      slidesPerView: 2.5,
      spaceBetween: 15
  
    },
    600: {
      slidesPerView: 3.5,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 20
    },
      
  }
});







