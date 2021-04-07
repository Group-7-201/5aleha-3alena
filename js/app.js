'use strict';

// Places Name Arry:
const placesName = ['alarays pool', 'jordan river', 'kingtalal dom', 'wadi hidan', 'wadi mujib', 'wadi rum', 'dead sea', 'maen hot',
  'Temple Artemis', 'Temple Hercules', 'Treasury Petra', 'Umm Qais'];

// Global Vaiables:
let reStoreValue = null;



// Constructor Function:
function Places(name, info) {
  this.name = name;
  this.path = `./images/${name}.jpg`;
  this.placeInf = info;
  this.placeRate = 0;
  reStore();
  if (reStoreValue === null) {
    Places.all.push(this);
  }
}


Places.all = [];
//  Build Places Object
let place1 = new Places(placesName[0], 'This is theblessing of themost beautiful ponds inJordanas it exists between themountain range islocated in thevillage kingcomposed scene aesthetically pleasing in thespring, his pool hostsraretypes ofanimalsandbirds, such as: otter,fish owl,river and waterturtlesIt is one of the rare and endangered species');
let place2 = new Places(placesName[1], 'Stand beside the Jordan River where it’s thought Jesus was baptized on this private 4-hour trip from Amman. Travel to the ‘Bethany Beyond the Jordan’ baptism site, also known as El-Maghtas, and tour the riverbanks and ruins of ancient churches, wells, and baptismal pools.');
let place3 = new Places(placesName[2], 'The dam is 92 meters high, which make the flood control system look like a pretty nice ski jump, the lake can contain 90 millions of water cubic meters');
let place4 = new Places(placesName[3], ' It’s 4 km canyon that can be extended to 9 km depending on the physical ability of hikers. A beautiful black basaltic canyon filled with narrow gorges,fresh natural pools, mesmerizing green vegetation and wild life. Two declimbs reaching 3 meters. At the end of the 9 km, hikers will rest near the magnificent 60 meter waterfall.');
let place5 = new Places(placesName[4], 'This 1,300m variation in elevation, combined with the valleys year- round water flow from seven tributaries, means that Wadi Mujib enjoys a magnificent bio-diversity that is still being explored and documented today. Over 300 species of plants, 10 species of carnivores and numerous species of permanent and migratory birds have been recorded. Some of the remote mountain and valley areas are difficult to reach, and thus offer safe havens for rare species of cats, goatsand other mountain animals. Mujibs sandstone cliffs arean ideal habitat for one of the most beautiful mountain goats in the world, the horned Ibex');
let place6 = new Places(placesName[5], 'The Valley of the Moon”, depicted as Mars in several Hollywood feature films Wadi Rum is an Arabian fairy-tale waiting to be discovered. Home to nomadic Bedouin tribes, Wadi Rum is a a quiet getaway of stars, sand, and sun; a perfect complement from Amman’s epicenter. Once inhabited by the Nabataeans of prehistoric times, Wadi Rum allows you to get lost in large landscapes and horizon lines. The calmness of the desert is sure calm your spirit and de-clutter your thoughts');
let place7 = new Places(placesName[6], 'the geological wonder of theDead Seais one of the must-dotourist attractionsin the Middle East. At more than 400 meters belowsealevel, this Great Rift Valley inland lake has an incredibly high salt content due to evaporation being the only water outlet. This is what causes the bizarre buoyancy of the water');
let place8 = new Places(placesName[7], 'When feeling weary, the Ma’in Hot Springs are your perfect remedy. The sight is centered between Madaba and the Dead Sea. Indulge in the hot, mineral waters and enjoy the breeze of nature. For a night’s stay, check in the Ma’in Hot Springs Spa & Resort for further pampering.');
let place9 = new Places(placesName[8], 'Ruins of the legendary and iconic Temple of Artemis are still standing tall at the highest point in the city of Jerash.');
let place10 = new Places(placesName[9], 'Dating back to the time of the erection of the Roman Theater, the Temple of Hercules is located at the top hill of the glorious Citadel of Amman, and is also visible from downtown.');
let place11 = new Places(placesName[10], 'Surprisingly, the rose-city has much more to offer, and tribute must be paid to Petra‘s most iconic monument, Al-Khazheh or the Treasury. This signature jaw-dropping sight will meet you the moment you finish walking through the 1200-meter Al-Siq.');
let place12 = new Places(placesName[11], 'Umm Qais is a historical and natural sight located in the north of Jordan, known for its ancient ruins of Gadara. Umm Qais has optimal weather and spreading natural landscapes almost all year long.');
Places.all.push = [place1, place2, place3, place4, place5, place6, place7, place8, place9, place10, place11,place12];

// Store Function in Local Storage:
function store() {
  let data = JSON.stringify(Places.all);
  localStorage.setItem('places', data);
}
store();

// ReStore function from Local Storage:
function reStore() {
  reStoreValue = localStorage.getItem('places');
  let normalObjects = JSON.parse(reStoreValue);
  if (reStoreValue !== null) {
    Places.all = normalObjects;
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
let largestRateArray=findMaxRate(rateArray,5);
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
let idArray2 =['alaraysPool', 'jordanRiver', 'kingtalalDom', 'wadiHidan', 'wadiMujib', 'wadiRum', 'deadSea','maenHot','TempleArtemis','TempleHercules','TreasuryPetra','UmmQais'];
function render(){
  let largestRateImages= document.getElementById('top-rated-container');
  for (let i=0; i<largestRateArray.length; i++){
    const divEl=document.createElement('div');
    largestRateImages.appendChild(divEl);
    divEl.setAttribute('class','img__wrap');
    const imageEl = document.createElement ('img');
    divEl.appendChild(imageEl);
    imageEl.setAttribute('class','img__img');
    imageEl.setAttribute('width','100%');
    imageEl.setAttribute('height','100%');
    imageEl.src=Places.all[largestRateArray[i]].path;
    imageEl.alt=Places.all[largestRateArray[i]].name;
    const paragraph = document.createElement ('p');
    divEl.appendChild(paragraph);
    paragraph.setAttribute('class','img__description');
    paragraph.textContent=(`${Places.all[largestRateArray[i]].name.toUpperCase()}`);
    let aTag=document.createElement('a');
    divEl.appendChild(aTag);
    aTag.textContent = ('Read More...');
    aTag.setAttribute('href', `./Recomendations.html#${placesName[largestRateArray[i]]}`);
    const spanEl = document.createElement ('span');
    divEl.appendChild(spanEl);
    spanEl.setAttribute('class','Rate');
    // spanEl.textContent=`${Places.all[largestRateArray[i]].placeRate}`;
    let rate = document.createElement('i');
    spanEl.appendChild(rate);
    rate.setAttribute('class', 'fas fa-star');
    rate.textContent = `${Places.all[largestRateArray[i]].placeRate}`;
    const spanE2 = document.createElement ('span');
    divEl.appendChild(spanE2);
    spanE2.setAttribute('class', 'readMore');
  }
}
render();
