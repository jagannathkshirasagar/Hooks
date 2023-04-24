import React from 'react'
import { useState } from 'react';
const Colors=()=> {

    const[count,Setcount]=useState("white");
    const color1=()=>{Setcount("blue")}
    const color2=()=>{Setcount("green")}
    return (
      <>
      {count}
  <button onClick={color1} >click1</button>
  <button onClick={color2}>cick2</button>
      </>
    );
  }
  
  export default Colors;