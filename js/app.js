'use strict';

// Places Name Arry:
const placesName=[];

// Global Vaiables:
let reStoreValue=null;
let largestRateImages= document.getElementsById('items');


// Constructor Function:
function Places (name){
  this.name=name;
  this.path=`./images/${name}.jpg`;
  this.placeInfo='';
  this.placeRate=0;
  reStore();
  if (reStoreValue === null)
  {
    Places.all.push(this);
  }
}
Places.all=[];

//  Build Places Object
for (let i=0; i<placesName.length; i++){
  new Places (placesName[i]);
}

// Store Function in Local Storage:
function store (){
  let data=JSON.stringify(Places.all);
  localStorage.setItem('places',data);
}
store();

// ReStore function from Local Storage:
function reStore (){
  reStoreValue=localStorage.getItem('places');
  let normalObjects=JSON.parse(reStoreValue);
  if(reStoreValue !== null){
    Places.all=normalObjects;
  }
}

// Render Function:

//  first: create an array for Object Rates:
const rateArray =[];
for (let i=0; i<Places.all.length; i++)
{
  rateArray.push(Places.all[i].placeRate);
}

// largest rate (6) places Function:
let largestRateArray=findMaxRate(rateArray,6);
function findMaxRate(input, count) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(i); // add index to output array
    if (output.length > count) {
      output.sort(function(a, b) { return input[b] - input[a]; }); // descending sort the output array
      output.pop(); // remove the last index (index of smallest element in output array)
    }
  }
  return output;
}

function render(){
  for (let i=0; i<largestRateArray; i++){
    const image = document.createElement ('img');
    largestRateImages.appendChild(image);
    image.src=Places.all[largestRateArray[i]].path;
    image.alt=Places.all[largestRateArray[i]].name;
    const paragraph = document.createElement ('p');
    largestRateImages.appendChild(paragraph);
    paragraph.textContent=`${Places.all[largestRateArray[i]].name}`;

  }
}
render();

