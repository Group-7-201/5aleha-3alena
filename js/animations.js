

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


window.addEventListener('scroll', function(){
  let header = document.getElementById('navbar');
  let windowPostion = window.scrollY > 0;
  header.classList.toggle('navbar-scroll',windowPostion );

});


// let header = document.getElementById('links');
// let li = header.getElementsByClassName('link');
// for (let i = 0; i < li.length; i++) {
//   li[i].addEventListener('click', function() {
//     let current = document.getElementsByClassName('active');
//     current[0].className = current[0].className.replace(' active', '');
//     this.className += ' active';
//   });
// }
