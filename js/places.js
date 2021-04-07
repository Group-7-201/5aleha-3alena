'use strict';
// import Places from './app'

let placesSection = document.getElementById('places');

let normalPlaces = JSON.parse(localStorage.getItem('places')) || [];

for (let i = 0; i < normalPlaces.length; i++) {
  let placesObj = new Places(normalPlaces[i].name, normalPlaces[i].placeInfo);
}

let paragraphArray= [
  'This is the blessing of the most beautiful ponds in Jordanas it exists between themountain range is located in the village king composed scene aesthetically pleasing in thespring, his pool host sraretypes of animals and birds, such as: otter,fish owl,river and water turtles.',

  'Stand beside the Jordan River where it’s thought Jesus was baptized on this private 4-hour trip from Amman. Travel to the ‘Bethany Beyond the Jordan’ baptism site, also known as El-Maghtas, and tour the riverbanks and ruins of ancient churches, wells, and baptismal pools.',
  'The dam is 92 meters high, which make the flood control system look like a pretty nice ski jump, the lake can contain 90 millions of water cubic meters',
  ' It’s 4 km canyon that can be extended to 9 km depending on the physical ability of hikers. A beautiful black basaltic canyon filled with narrow gorges,fresh natural pools, mesmerizing green vegetation and wild life. Two declimbs reaching 3 meters.',
  'This 1,300m variation in elevation, combined with the valleys year- round water flow from seven tributaries, means that Wadi Mujib enjoys a magnificent bio-diversity that is still being explored and documented today. Over 300 species of plants.',
  'The Valley of the Moon”, depicted as Mars in several Hollywood feature films Wadi Rum is an Arabian fairy-tale waiting to be discovered. Home to nomadic Bedouin tribes, Wadi Rum is a a quiet getaway of stars, sand, and sun; a perfect complement from Amman’s epicenter.',
  'he geological wonder of theDead Seais one of the must-dotourist attractionsin the Middle East. At more than 400 meters belowsealevel, this Great Rift Valley inland lake has an incredibly high salt content due to evaporation being the only water outlet.',
  'When feeling weary, the Ma’in Hot Springs are your perfect remedy. The sight is centered between Madaba and the Dead Sea. Indulge in the hot, mineral waters and enjoy the breeze of nature. For a night’s stay, check in the Ma’in Hot Springs Spa & Resort for further pampering.',
  'Ruins of the legendary and iconic Temple of Artemis are still standing tall at the highest point in the city of Jerash.',
  'Dating back to the time of the erection of the Roman Theater, the Temple of Hercules is located at the top hill of the glorious Citadel of Amman, and is also visible from downtown.',
  'Surprisingly, the rose-city has much more to offer, and tribute must be paid to Petra‘s most iconic monument, Al-Khazheh or the Treasury. This signature jaw-dropping sight will meet you the moment you finish walking through the 1200-meter Al-Siq.',
  'Umm Qais is a historical and natural sight located in the north of Jordan, known for its ancient ruins of Gadara. Umm Qais has optimal weather and spreading natural landscapes almost all year long.'
];

let idArray = ['alaraysPool', 'jordanRiver', 'kingtalalDom', 'wadiHidan', 'wadiMujib', 'wadiRum', 'deadSea', 'maenHot', 'TempleArtemis', 'TempleHercules', 'TreasuryPetra', 'UmmQais'];



let row = document.createElement('div');
placesSection.appendChild(row);
row.className = 'row';

let column1 = document.createElement('div');
row.appendChild(column1);
column1.className = 'column1';

let column2 = document.createElement('div');
row.appendChild(column2);
column2.className = 'column2';


function placesRender() {
  for (let i = 0; i < Places.all.length; i = i + 2) {

    let imageDiv = document.createElement('div');
    column1.appendChild(imageDiv);
    imageDiv.className = 'imageDiv';

    let item1=document.createElement('img');
    imageDiv.appendChild(item1);
    item1.className = 'placeImageRecom';
    item1.src = Places.all[i].path;
    item1.alt = Places.all[i].name;
    item1.id = `${Places.all[i].name}`;
    let titleEl = document.createElement('h3');
    imageDiv.appendChild(titleEl);
    titleEl.className = 'place-title';
    titleEl.textContent = `${Places.all[i].name.toUpperCase()}`;
    // titleEl.id = `${Places.all[i].name}`;
    let parEl = document.createElement('p');
    imageDiv.appendChild(parEl);

    parEl.textContent=`${paragraphArray[i]}`;
    parEl.className='desc';
    parEl.id= 'prgh';
    let par2El=document.createElement('p');
    imageDiv.appendChild(par2El);
    par2El.className='rate';
    par2El.textContent=`${Places.all[i].placeRate}`;
    par2El.id = 'prgh2';

    let div1El = document.createElement('div');
    imageDiv.appendChild(div1El);
    div1El.id = `${idArray[i]}`;
    let img = document.createElement('img');
    div1El.appendChild(img);
    // button1.textContent = 'Like';
    img.className = 'button1';
    img.src = 'images/Star23.jpg';
    img.setAttribute('width', '100px');
    img.setAttribute('height', '100px');
    img.id = `${idArray[i]}`;
  }
}

placesRender();

for (let i = 0; i < Places.all.length; i = i +2) {
  let placeId = document.getElementById(`${idArray[i]}`);
  placeId.addEventListener('click', handelClick);
  function handelClick(event) {
    if (event.target.id !== placeId) {
      if (event.target.id === idArray[i]) {
        Places.all[i].placeRate++;
      }

    store();

     location.reload();
    }

  }
}

function placesRender1() {
  for (let i = 1; i < Places.all.length; i = i + 2) {

    let imageDiv = document.createElement('div');
    column2.appendChild(imageDiv);
    imageDiv.className = 'imageDiv';


    let item1=document.createElement('img');
    imageDiv.appendChild(item1);
    item1.className = 'placeImageRecom';
    item1.src = Places.all[i].path;
    item1.alt = Places.all[i].name;
    item1.id = `${Places.all[i].name}`;
    let titleEl = document.createElement('h3');
    imageDiv.appendChild(titleEl);
    titleEl.className = 'place-title';
    titleEl.textContent = `${Places.all[i].name.toUpperCase()}`;
    // titleEl.id = `${Places.all[i].name}`;
    let parEl = document.createElement('p');
    imageDiv.appendChild(parEl);
    parEl.textContent=`${paragraphArray[i]}`;
    parEl.className='desc';
    parEl.id= 'prgh';
    let par2El=document.createElement('p');
    imageDiv.appendChild(par2El);
    par2El.className='rate';
    par2El.textContent=`${Places.all[i].placeRate}`;
    par2El.id = 'prgh2';
    let div1El = document.createElement('div');
    imageDiv.appendChild(div1El);
    div1El.id = `${idArray[i]}`;
    let img = document.createElement('img');
    div1El.appendChild(img);
    // button1.textContent = 'Like';
    img.className = 'button1';
    img.src = 'images/Star23.jpg';
    img.setAttribute('width', '100px');
    img.setAttribute('height', '100px');
    img.id = `${idArray[i]}`;
  }
}

placesRender1();

for (let i = 1; i < Places.all.length; i = i +2) {
  let placeId = document.getElementById(`${idArray[i]}`);
  placeId.addEventListener('click', handelClick);
  function handelClick(event) {
    if (event.target.id !== placeId) {
      if (event.target.id === idArray[i]) {
        Places.all[i].placeRate++;
      }
    store();
     location.reload();
     
    }
  }
}