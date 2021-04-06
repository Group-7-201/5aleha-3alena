

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
  setTimeout(showSlides, 3500);
}


// (function () {
//   (document).scroll(function () {
//     let nav = document.getElementById('navbar');
//     nav.toggleClass('scrolled', (this).scrollTop() > nav.height());
//   });
// });

let myNav = document.getElementById('navbar');
window.onscroll = function () {

  if (document.body.scrollTop >= 200 ) {
    myNav.classList.add('left-nav');
    myNav.classList.remove('navbar');
  }
  else {
    myNav.classList.add('nav-transparent');
    myNav.classList.remove('nav-colored');
  }
};
