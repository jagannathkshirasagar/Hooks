import { useState } from "react"
import React from 'react'

const Usestate=()=> {
    const[count ,Setcount]=useState(5);
  return (
  
    <div>
  {count}
<button onClick={()=>Setcount(count+1)}>preincr</button>
<button onClick={()=>Setcount(count-1)}>predec</button>
    </div>
  )
}

export default Usestate