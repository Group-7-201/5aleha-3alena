'use strict';

const testimonials = document.getElementsByClassName('testimonials');

const images = ['jordan-landscape1', 'jordan-landscape2', 'jordan-landscape3', 'jordan-landscape4', 'jordan-landscape5'];

let firstImage = [0];
let secondImage = [1];
let thirdImage = [2];
let fourthImage = [3];
let fifthImage = [4];

function Comment(name) {
  this.name = name;
  this.path = `./images/dummy/${name}.jpg`;
  Comment.all.push(this);
}
Comment.all = [];

for (let i = 0; i < images.length; i++) {
  new Comment(images[i]);
}

function displayComments() {

  const label1 = document.getElementById('label1');
  const image1 = document.createElement('img');
  label1.appendChild(image1);
  image1.src = Comment.all[firstImage].path;
  const prgh1 = document.createElement('p');
  label1.appendChild(prgh1);
  prgh1.textContent = 'I used this website based on a friend’s suggestion, and I could not be happier about my trip, I thought that I was going to visit only Petra, but I ended up visiting too many great places, with low budgets, and trusted people, I tried new things and blended with the locals so well, I would definitely come again and suggest this website to my friends’ back home.';
  const header1 = document.createElement('h2');
  label1.appendChild(header1);
  header1.textContent = 'Elisabeth Carmen – Germany';

  const label2 = document.getElementById('label2');
  const image2 = document.createElement('img');
  label2.appendChild(image2);
  image2.src = Comment.all[secondImage].path;
  const prgh2 = document.createElement('p');
  label2.appendChild(prgh2);
  prgh2.textContent = 'I visited Jordan before, I went to the most famous places, but this time I decided to have a different experience, so I used this website, and it was one of the best trips in my life, I stayed with a Jordanian family in Karak, for couple of days, experiences their generosity and kindness, and I camped in the desert and done so many new things, could not be more thankful.';
  const header2 = document.createElement('h2');
  label2.appendChild(header2);
  header2.textContent = 'Jack Smith – united states of America';

  const label3 = document.getElementById('label3');
  const image3 = document.createElement('img');
  label3.appendChild(image3);
  image3.src = Comment.all[thirdImage].path;
  const prgh3 = document.createElement('p');
  label3.appendChild(prgh3);
  prgh3.textContent = 'This website was the highlight of my trip, helped me in doing everything I wanted to experience, from religious tourism, to historical places that was so beautiful and rich experience, but the most amazing part the was the nature of Jordan that I did not expect to be that unique and beautiful, thank you!';
  const header3 = document.createElement('h2');
  label3.appendChild(header3);
  header3.textContent = 'Loren James – Canada';

  const label4 = document.getElementById('label4');
  const image4 = document.createElement('img');
  label4.appendChild(image4);
  image4.src = Comment.all[fourthImage].path;
  const prgh4 = document.createElement('p');
  label4.appendChild(prgh4);
  prgh4.textContent = 'so I used this website, and it was one of the best trips in my life, I stayed with a Jordanian family in Karak, for couple of days, experiences their generosity and kindness, and I camped in the desert and done so many new things, could not be more thankful.'
  const header4 = document.createElement('h2');
  label4.appendChild(header4);
  header4.textContent = 'Charlie - Australia';

  const label5 = document.getElementById('label5');
  const image5 = document.createElement('img');
  label5.appendChild(image5);
  image5.src = Comment.all[fifthImage].path;
  const prgh5 = document.createElement('p');
  label5.appendChild(prgh5);
  prgh5.textContent = 'I thought that I was going to visit only Petra, but I ended up visiting too many great places, with low budgets, and trusted people, I tried new things and blended with the locals so well, I would definitely come again and suggest this website to my friends’ back home.';
  const header5 = document.createElement('h2');
  label5.appendChild(header5);
  header5.textContent = 'Aiguo - Kazakhstan';

}
displayComments();
