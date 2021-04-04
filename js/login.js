'use strict';
// let modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// };

// let signUser=[];
// function Sign(email,psw)
// {
//   this.email=email;
//   this.psw=psw;
//   Sign.all.push(this);
// }
// Sign.all=[];
// let newUser=document.getElementsByClassName('modal-content');
// let button=document.getElementsByClassName('signupbtn');

// button.addEventListener('submit',sign);
// function sign(event)
// {
//   event.preventDefault();
//   let email=event.target.email.value;
//   let psw=event.target.psw.value;
//   let newsign=new Sign(email,psw);
//   signUser.push(newsign);
//   console.log(signUser);


// }

let admin = 'ayah';
let pass = '123';
//let user=[];
let satrt=null;
function Log(name,pass)
{
  this.name = name,
  this.pass = pass,
  gettingItems();
  if (satrt === null)
  {
    Log.all.push(this);
  }
}




Log.all=[];
let name1= new Log('ali','1234');
let storedName = JSON.stringify(name1);

if (storedName===null)
{
  Log.all= storedName;
}


let loginform = document.getElementById('container');
loginform.addEventListener('submit', add);

function add(event)
{
  event.preventDefault();
  let name=event.target.name.value;
  // console.log(name);
  let psw= event.target.psw.value;
  let newLog=new Log(name,psw);
  Log.all.push(newLog);
  // console.log(newLog);
  settingItem();

  document.getElementById('container').reset();
  for (let i=0;i<Log.all.length;i++)
  {

    // let entry = localStorage.getItem('user-information');
    // console.log('username: ' + entry.name + 'password: ' + entry.pass);
    // if(name === entry.name && psw === entry.pass) {
    //   alert('You have successfully logged in.');
  }
  if(name===name1.name && psw===name1.pass)
  {
    //alert('You have successfully logged in.');
    //location.reload();
    window.open('index.html');
  }
  else{
    alert('If you do not have an account, please create one.');
  }


}

settingItem();



//let user2=[];
//let ans;
function settingItem()
{let data= JSON.stringify(Log.all); // stringify method from obj to string
  localStorage.setItem('user-information', data);
  //user.push(data);
  // console.log('user1',user);

  // while(user2.includes(user))
  // {

  //   //user.shift();
  //   user.removeItem(data);



  // }
  // user.push(data);




  // console.log('sds',user2);

  //console.log(data);
}
//settingItem();
function gettingItems()
{
  let userInformation=localStorage.getItem('user-information');

  let newObj= JSON.parse(userInformation);

  if (newObj!==null)
  {
    Log.all= newObj;
  }
  console.log(newObj);
}
