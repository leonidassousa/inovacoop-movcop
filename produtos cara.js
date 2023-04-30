var currentSlide = 0;
var images = document.querySelectorAll('.carousel-images img');

function showSlide(n) {
  images[currentSlide].style.display = 'none';
  currentSlide = (n + images.length) % images.length;
  images[currentSlide].style.display = 'block';
}

var prevButton = document.querySelector('.prev');
prevButton.addEventListener('click', function() {
  showSlide(currentSlide - 1);
});

var nextButton = document.querySelector('.next');
nextButton.addEventListener('click', function() {
  showSlide(currentSlide + 1);
});

showSlide(currentSlide);
