

import React ,{useState} from 'react'
import { unsorted } from "react-icons/fa";

 function Compon() {
     //converting to uppercase
     const Onup=()=>
     {
         
         if(typeof(text)==='string')
         {
           let  newText= text.toUpperCase();
            Txtcount(newText);
            console.log("hello world");
         }
         else
         {
         alert("number cannot be changed to uppercase");
         console.log("this is not working");
         }
        
        
     }

     //converting to lowecase
     const Onlow=()=>
     {
      

        console.log("hello there");
       
            let newText= text.toLowerCase();
            Txtcount(newText);

           
        
     }

     //updating text
     const Myupdate=(event)=>
     {
         Txtcount(event.target.value);
     }

    //clearing function
    const Clears=()=>
    {
        Txtcount("");
    }
     
    const MyFam=()=>
    {
        document.getElementById("myulfam").classList.toggle("myfamli");
    }
    ///function to change the font family of the text
   
    
    const Sans=()=>
    {
       text= document.getElementById('myTxt').style.fontFamily=("Sans-serif");
       Txtcount(text);
    }
    const MonoSp=()=>
    {
        text= document.getElementById('myTxt').style.fontFamily=("monospace");
        Txtcount(text); 
    }
    const Cursib=()=>
    {
        text= document.getElementById('myTxt').style.fontFamily=("cursive");
        Txtcount(text); 
    }
    const Fantas=()=>
    {
        text= document.getElementById('myTxt').style.fontFamily=("fantasy");
        Txtcount(text); 
    }
    ///changing the fontsize of the text

    const Ulsiz=()=>
    {
        document.getElementById("myulsiz").classList.toggle("mysizli");
    }
    const FIRSTPX=()=>
    {
        text=document.getElementById('myTxt').style.fontSize=("10px");
        Txtcount(text);
    }
    const Secondpx=()=>
    {
        text=document.getElementById('myTxt').style.fontSize=("20px");
        Txtcount(text);
    }
    const Thirdpx=()=>
    {
        text=document.getElementById('myTxt').style.fontSize=("30px");
        Txtcount(text);
    }
    const Fourthpx=()=>
    {
        text=document.getElementById('myTxt').style.fontSize=("40px");
        Txtcount(text);
    }
    //using state or initializing the state
    
    const [text , Txtcount]=useState("")

  return <>

   <div className="mydiv">
       <p className="firstext">Enter Your text here</p>
   <input id="myTxt"  className="myInput" value={text} onChange={Myupdate} />
 
   <button className="myBtns" onClick={Onup}> Change to uppercase</button>
   <button className="myBtns" onClick={Onlow}> Change to lowercase</button>
   <button className="myBtnsfam"  onClick={MyFam} >FONT FAMILIES
   <ul id="myulfam"className="myfamilyul">
  <li className="myfamli" onClick={Sans}> Sans Serif</li>
  <li className="myfamli"onClick={MonoSp}>Monospace</li>
  <li className="myfamli"onClick={Cursib}>Cursive</li>
  <li className="myfamli"onClick={Fantas}>Fantasy</li>
  </ul>
  </button>
  <button className="myBtnsfam"  onClick={Ulsiz} >FONT SIZE
   <ul id="myulsiz"className="mysizul">
  <li className="mysizli" onClick={FIRSTPX}> 10PX</li>
  <li className="mysizli"onClick={Secondpx}>20PX</li>
  <li className="mysizli"onClick={Thirdpx}>30PX</li>
  <li className="mysizli"onClick={Fourthpx}>40PX</li>
  </ul>
  </button>
   <button className="myBtns"  onClick={Clears} > Clear</button>
   </div>
       
   
    </>
}

export default Compon;

