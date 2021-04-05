'use strict';
// import Places from './app'

let placesSection = document.getElementById('places');

let normalPlaces=JSON.parse(localStorage.getItem('places')) || [];

for (let i=0; i<normalPlaces.length; i++){
  let placesObj=new Places (normalPlaces[i].name,normalPlaces[i].placeInfo);
}
let paragraphArray= [
  'This is theblessing of themost beautiful ponds inJordanas it exists between themountain range islocated in thevillage kingcomposed scene aesthetically pleasing in thespring, his pool hostsraretypes ofanimalsandbirds, such as: otter,fish owl,river and waterturtlesIt is one of the rare and endangered species',
  'Stand beside the Jordan River where it’s thought Jesus was baptized on this private 4-hour trip from Amman. Travel to the ‘Bethany Beyond the Jordan’ baptism site, also known as El-Maghtas, and tour the riverbanks and ruins of ancient churches, wells, and baptismal pools.',
  'The dam is 92 meters high, which make the flood control system look like a pretty nice ski jump, the lake can contain 90 millions of water cubic meters',
  ' It’s 4 km canyon that can be extended to 9 km depending on the physical ability of hikers. A beautiful black basaltic canyon filled with narrow gorges,fresh natural pools, mesmerizing green vegetation and wild life. Two declimbs reaching 3 meters. At the end of the 9 km, hikers will rest near the magnificent 60 meter waterfall.',
  'This 1,300m variation in elevation, combined with the valleys year- round water flow from seven tributaries, means that Wadi Mujib enjoys a magnificent bio-diversity that is still being explored and documented today. Over 300 species of plants, 10 species of carnivores and numerous species of permanent and migratory birds have been recorded. Some of the remote mountain and valley areas are difficult to reach, and thus offer safe havens for rare species of cats, goatsand other mountain animals. Mujibs sandstone cliffs arean ideal habitat for one of the most beautiful mountain goats in the world, the horned Ibex',
  'The Valley of the Moon”, depicted as Mars in several Hollywood feature films Wadi Rum is an Arabian fairy-tale waiting to be discovered. Home to nomadic Bedouin tribes, Wadi Rum is a a quiet getaway of stars, sand, and sun; a perfect complement from Amman’s epicenter. Once inhabited by the Nabataeans of prehistoric times, Wadi Rum allows you to get lost in large landscapes and horizon lines. The calmness of the desert is sure calm your spirit and de-clutter your thoughts',
  'he geological wonder of theDead Seais one of the must-dotourist attractionsin the Middle East. At more than 400 meters belowsealevel, this Great Rift Valley inland lake has an incredibly high salt content due to evaporation being the only water outlet. This is what causes the bizarre buoyancy of the water',
  'When feeling weary, the Ma’in Hot Springs are your perfect remedy. The sight is centered between Madaba and the Dead Sea. Indulge in the hot, mineral waters and enjoy the breeze of nature. For a night’s stay, check in the Ma’in Hot Springs Spa & Resort for further pampering.',
  'Ruins of the legendary and iconic Temple of Artemis are still standing tall at the highest point in the city of Jerash.',
  'Dating back to the time of the erection of the Roman Theater, the Temple of Hercules is located at the top hill of the glorious Citadel of Amman, and is also visible from downtown.',
  'Surprisingly, the rose-city has much more to offer, and tribute must be paid to Petra‘s most iconic monument, Al-Khazheh or the Treasury. This signature jaw-dropping sight will meet you the moment you finish walking through the 1200-meter Al-Siq.',
  'Umm Qais is a historical and natural sight located in the north of Jordan, known for its ancient ruins of Gadara. Umm Qais has optimal weather and spreading natural landscapes almost all year long.'
];


function placesRender(){
  for (let i=0; i<Places.all.length; i++){
    // let divEl=document.getElementById('');
    let divEl=document.createElement('div');
    placesSection.appendChild(divEl);
    let item1=document.createElement('img');
    divEl.appendChild(item1);
    item1.src=Places.all[i].path;
    item1.alt=Places.all[i].name;
    item1.id=`${Places.all[i].name}`;
    let titleEl=document.createElement('h3');
    divEl.appendChild(titleEl);
    titleEl.textContent=`${Places.all[i].name}`;
    titleEl.id=`${Places.all[i].name}`;
    let parEl=document.createElement('p');
    titleEl.appendChild(parEl);
    parEl.textContent=`${paragraphArray[i]}`;
    rating();
  }
}
placesRender();

Places.prototype.rating = function(){
  
//   <div class="center">
//   <div class="stars">
//     <input type="radio" id="five" name="rate" value="5">
//     <label for="five"></label>
//     <input type="radio" id="four" name="rate" value="4">
//     <label for="four"></label>
//     <input type="radio" id="three" name="rate" value="3">
//     <label for="three"></label>
//     <input type="radio" id="two" name="rate" value="2">
//     <label for="two"></label>
//     <input type="radio" id="one" name="rate" value="1">
//     <label for="one"></label>
//     <span class="result"></span>
//   </div>
// </div>

  let div1El=document.createElement('div');
  placesSection.appendChild(div1El);
  div1El.className='center';

  let div2El=document.createElement('div');
  div1El.appendChild(div2El);
  div2El.className='stars';

  let unput1=document.createElement('input');
  div1El.appendChild(unput1);
  unput1.id='five';

  let unput2=document.createElement('input');
  div1El.appendChild(unput2);
  unput2.id='four';

  let unput3=document.createElement('input');
  div1El.appendChild(unput3);
  unput3.id='three';

  let unput4=document.createElement('input');
  div1El.appendChild(unput4);
  unput4.id='two';

  let unput5=document.createElement('input');
  div1El.appendChild(unput5);
  unput5.id='one';


  unput1.textContent='Thanks for rating us!';
  let div4El=document.createElement('div');
  div1El.appendChild(div4El);
  div4El.className='edit';
  div4El.textContent='EDIT';
  let div5El=document.createElement('div');
  div1El.appendChild(div5El);
  div5El.className='star-widget';
  for (let i=5; i>0; i--){
    let inputEl=document.createElement('input');
    div5El.appendChild(inputEl);
    inputEl.type='radio';
    inputEl.name='rate';
    inputEl.id=`rate-${i}`;
    let labelEl= document.createElement('label');
    div5El.appendChild(labelEl);
    labelEl.for=`rate-${i}`;
    labelEl.className='fas fa-star';
  }
  let formEl=document.createElement('form');
  div5El.appendChild(formEl);
  formEl.action='#';
  let headerEl=document.createElement('header');
  div5El.appendChild(headerEl);
  let div6El=document.createElement('div');
  div5El.appendChild(div6El);
  div6El.className='textarea';
  let brAtt= document.createElement('br');
  div5El.appendChild(brAtt);
  let div7El=document.createElement('div');
  div5El.appendChild(div7El);
  div7El.className='btn';
  let buttonEl=document.createElement('button');
  div7El.appendChild(buttonEl);
  buttonEl.type='submit';
  buttonEl.textContent='Post';
  let div8El = document.createElement('div');
  div5El.appendChild(div8El);
  div8El.id='star';
}






