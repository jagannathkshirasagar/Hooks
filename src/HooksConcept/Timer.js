import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const Timer=()=> {
    const [count,setCount]=useState(0);
     useEffect(()=>{setCount(count+1)},
     []);
   // useEffect( ()=>{setCount((count) => count + 1)}, 20);

  //  if (count==1000){
    // alert(" u have crossed 100")
  //  }
  return (
    <div>
    
<h1>I have rendered {count} times!</h1 >
  {/* <button onClick={()=>setCount(count+1)}>onclick</button>  */}

    </div>
  )
}

export default Timer