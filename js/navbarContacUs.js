// alert('heeeey');

const header = document.getElementById('navbar');
window.onscroll = function () {

  let top = window.scrollY;
  console.log(top);
  if (top > 1) {
    header.classList.add('active');
  }
  else {
    (header.classList.remove('active'));
  }
};
