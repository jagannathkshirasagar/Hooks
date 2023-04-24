import React from 'react'
import { useState} from 'react'
import { createContext } from 'react';
// import {UserContext} from './Contextsss.js'
 import Useocontextconcept from '../HooksConcept/Useocontextconcept';


 const userRef=createContext();
 
  
  export default function Usecontextconcept() {
    const[user ,setUser]=useState("jagannath kshirasagar");

  return (
    <div>
    <userRef.Provider value={user}>
    <Useocontextconcept />
    </userRef.Provider>
    </div>
  )
}
// function Component1() {
//     return (
//       <div>

//       </div>
//     )
//   }
//   function Component2() {
//     return (
//       <div></div>
//     )
//   }
//   function Component3() {
//     return (
//       <div></div>
//     )
//   }
//   function Component4() {
//     const user = useContext(UserContext);
//     return (
//       <>
//       {/* <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2> */}

//       <UserContext.Consumer>
//      { console.log(user)}
//       </UserContext.Consumer>
//     </>
//     )
//   }
  
  
export {userRef}
// export default {Usecontextconcept}