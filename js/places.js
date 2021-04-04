'use strict';

let placesSection = document.getElementById('places');

let normalPlaces=JSON.parse(localStorage.getItem('places')) || [];

for (let i=0; i<normalPlaces.length; i++){
  let placesObj=new Places (normalPlaces[i].name);
}

function placesRender(){
  for (let i=0; i<Places.all.length-1; i++){
    // let divEl=document.getElementById('');
    let item1=document.createElement('img');
    placesSection.appendChild(item1);
    item1.src=Places.all[i].path;
    item1.alt=Places.all[i].name;
    item1.id=`${Places.all[i].name}`;
    let par=document.createElement('h3');
    placesSection.appendChild(par);
    par.textContent=`${Places.all[i].name}`;
    
    const btn = document.querySelector('button');
    const post = document.querySelector('.post');
    const widget = document.querySelector('.star-widget');
    const editBtn = document.querySelector('.edit');
    btn.onclick = ()=>{
      widget.style.display = 'none';
      post.style.display = 'block';
      editBtn.onclick = ()=>{
        widget.style.display = 'block';
        post.style.display = 'none';
      };
      return false;
    };

  }
}
placesRender();


const btn = document.querySelector('button');
const post = document.querySelector('.post');
const widget = document.querySelector('.star-widget');
const editBtn = document.querySelector('.edit');
btn.onclick = ()=>{
  widget.style.display = 'none';
  post.style.display = 'block';
  editBtn.onclick = ()=>{
    widget.style.display = 'block';
    post.style.display = 'none';
  };
  return false;
};






