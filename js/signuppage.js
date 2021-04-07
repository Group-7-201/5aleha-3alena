'use strict'

function signup()
{
  let name=document.getElementById('in1').value;

  let age=document.getElementById('in2').value;

  let mail=document.getElementById('in3').value;

  let pass=document.getElementById('in4').value;

  let password=document.getElementById('in5').value;

  let char=['@','#','$','%','^','&','*','(',')'];
  let count=0;
  let ans=0;
  let s=0;
  let q=0;
  let f=0;
  let list=mail.split('.');
  let check='com';
  for(let c=0;c<list.length;c++)
  {

    if(list[c]===check)
    {
      f+=1;
    }



  }


  for(let m=0;m<mail.length;m++)
  {
    if(mail[m]===char[0])
    {
      count+=1;
    }
  }


  if(count===0||f===0)
  {
    document.getElementById('div4').style.backgroundColor='red';
  }
  else
  {
    f+=1;

  }
  if(f===2)
  {
    ans+=1;
  }
  if(name.length<7)
  {
    document.getElementById('div2').style.backgroundColor='red';
  }
  else
  {
    s+=1;
  }
  for(let i=0;i<name.length;i++)
  {

    let m=name[i];

    for(let n=0;n<char.length;n++)
    {

      if(m===char[n])
      {
        document.getElementById('div2').style.backgroundColor='red';
        q+=1;
        break;
      }
    }


  }

  if(q===0)
  {
    s+=1;
  }
  if(s===2)
  {
    ans+=1;
  }
  let num=['1','2','3','4','5','6','7','8','9','0'];
  let x=0;
  for(let d=0;d<pass.length;d++)
  {
    for(let g=0;g<num.length;g++)
    {
      if(pass[d]===num[g])
      {
        x+=1;
      }
    }
  }

  if(pass.length<7||x===0)
  {
    document.getElementById('div5').style.backgroundColor='red';
  }
  else
  {
    ans+=1;
  }

  if(pass!==password)
  {
    document.getElementById('div6').style.backgroundColor='red';
  }
  else
  {
    ans+=1;
  }


  if(ans===4)
  {
    document.getElementById('div7').style.backgroundColor='green';
  }
}

function myfun()
{
  document.getElementById('div2').style.backgroundColor='#9ce8f6';
  document.getElementById('div7').style.backgroundColor='#9ce8f6';

}
function myfun1()
{
  document.getElementById('div3').style.backgroundColor='#9ce8f6';

  document.getElementById('div7').style.backgroundColor='#9ce8f6';
}
function myfun2()
{
  document.getElementById('div4').style.backgroundColor='#9ce8f6';
  document.getElementById('div7').style.backgroundColor='#9ce8f6';

}
function myfun3()
{
  document.getElementById('div5').style.backgroundColor='#9ce8f6';
  document.getElementById('div7').style.backgroundColor='#9ce8f6';
  document.getElementById('div6').style.backgroundColor='#9ce8f6';

}
function myfun4()
{
  document.getElementById('div6').style.backgroundColor='#9ce8f6;';

  document.getElementById('div7').style.backgroundColor='#9ce8f6;';
}

