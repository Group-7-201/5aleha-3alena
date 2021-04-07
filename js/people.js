'use strict';

// Places Name Arry:
const adressArray = ['Amman', 'Jerash', 'Alkarak', 'Altafilah', 'Ajloun', 'Alsalt', 'Alaqaba', 'Madaba', 'Zarqaa', 'Irbid', 'Maan'];
const namesArray = ['Ahmad', 'Ali', 'Amal', 'Ayman', 'Eman', 'Laith', 'Lara', 'Layla', 'Mohammad', 'Zaid', 'Sami'];
const phoneNumberArray = ['962-2030-8745', '962-1047-8746', '962-6985-3251', '962-5481-6021', '962-7410-3579', '962-8550-6710', '962-2014-1994', '962-3204-7459', '962-5760-7412', '962-8520-9478', '962-4321-9541'];

// Global Vaiables:
let reStoreValue = null;



// Constructor Function:
function People(name, adress, phoneNumber) {
  this.peopleName = name;
  this.path = `./images/peopleImage/${name}.jpg`;
  this.peopleAdress = adress;
  this.peoplePhoneNumber = phoneNumber;
  reStore();
  if (reStoreValue === null) {
    People.all.push(this);
  }
}
People.all = [];
for (let i = 0; i < adressArray.length; i += 2) {
  new People(namesArray[i], adressArray[i], phoneNumberArray[i]);
}

// Store Function in Local Storage:
function store() {
  let data = JSON.stringify(People.all);
  localStorage.setItem('people', data);
}
store();

// ReStore function from Local Storage:
function reStore() {
  reStoreValue = localStorage.getItem('people');
  let normalObjects = JSON.parse(reStoreValue);
  if (reStoreValue !== null) {
    People.all = normalObjects;
  }
}
let peopleSection = document.getElementById('people');
// let peopleSectionTwo=document.getElementById('people2');
function peopleRender() {
  for (let i = 0; i < People.all.length; i++) {
    let div = document.createElement('div');
    peopleSection.appendChild(div);
    div.id = 'peopleInfo';
    // div.
    let span = document.createElement('span');
    let img = document.createElement('img');
    div.appendChild(img);
    img.src = People.all[i].path;
    img.alt = People.all[i].name;

    let h3 = document.createElement('h3');

    h3.textContent = `${People.all[i].peopleName}`;
    span.appendChild(h3);
    div.appendChild(span);
    let h2 = document.createElement('h2');
    let p = document.createElement('p');

    span.style.boxShadow = '2px solid black';
    // h3.style.boxShadow='20px solid black';
    h3.appendChild(h2);
    h3.appendChild(p);

    let addressIcon = document.createElement('i');
    let addressText = document.createElement('span');
    let phoneIcon = document.createElement('i');
    let phoneNumberSpan = document.createElement('span');


    addressIcon.classList.add('fa');
    addressIcon.classList.add('fa-map-marker');
    phoneIcon.classList.add('fa');
    phoneIcon.classList.add('fa-phone');

    addressText.textContent = People.all[i].peopleAdress;
    phoneNumberSpan.textContent = People.all[i].peoplePhoneNumber;


    h2.appendChild(addressIcon);
    h2.appendChild(addressText);

    p.appendChild(phoneIcon);
    p.appendChild(phoneNumberSpan);
  }
  // for (let i=1; i<People.all.length; i+=2){
  //   let div=document.createElement('div');
  //   peopleSectionTwo.appendChild(div);

  //   let img=document.createElement('img');
  //   div.appendChild(img);
  //   img.src=People.all[i].path;
  //   img.alt=People.all[i].name;

  //   let h3=document.createElement('h3');
  //   div.appendChild(h3);
  //   h3.textContent=`${People.all[i].peopleName}`;

  //   let h2=document.createElement('h2');
  //   let p=document.createElement('p');

  //   h3.appendChild(h2);
  //   h3.appendChild(p);

  //   let addressIcon=document.createElement('i');
  //   let addressText=document.createElement('span');
  //   let phoneIcon=document.createElement('i');
  //   let phoneNumberSpan=document.createElement('span');


  //   addressIcon.classList.add('fa');
  //   addressIcon.classList.add('fa-map-marker');
  //   phoneIcon.classList.add('fa');
  //   phoneIcon.classList.add('fa-phone');

  //   addressText.textContent=People.all[i].peopleAdress;
  //   phoneNumberSpan.textContent=People.all[i].peoplePhoneNumber;


  //   h2.appendChild(addressIcon);
  //   h2.appendChild(addressText);

  //   p.appendChild(phoneIcon);
  //   p.appendChild(phoneNumberSpan);
  // }

}
console.log(People.all.length);
peopleRender();