import React from 'react'
import { useState,useEffect } from 'react';

const Useeffectconcept=()=> {
    const [count,setCount]=useState(0);
    useEffect(()=>console.log("clicked"+count+"times"),[count])
  return (
    <div>
            <p>YoU clicked {count} times</p>
        <button onClick={()=>setCount(count+1)}>clickme</button>
    </div>
  )
}

export default Useeffectconcept