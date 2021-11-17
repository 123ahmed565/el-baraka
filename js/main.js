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


// start category detail page
var swiper = new Swiper(".mySwiper3", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

