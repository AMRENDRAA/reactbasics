import React, { useState } from 'react'

export default function Greeting() {

  const [count,setcount]=useState(1);// returns array and function 
  console.log(count);
  console.log(setcount);


  const handle =()=>{
    setcount(count+1);
   
   
  }

  const handledec =()=>{
    setcount(count-1);


    
  
  }

  return (
    <div>

      <h1> {count}</h1>
      <button onClick={handle}>+</button>
      <button onClick={handledec}> -</button>
    
    </div>
  )
}
