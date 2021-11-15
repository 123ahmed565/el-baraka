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


 // testimonials
 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    autoplay:true,
    freeMode: true,
    grabCursor:true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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
