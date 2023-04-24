import React from 'react'
 import {useContext } from 'react'
 import {userRef} from './Usecontextconcept';
// import { Ref } from 'react'


export default function Useocontextconcept() {
     const answer=useContext(userRef);
  
  
    return (
        <>
        {/* <h1>Component 5</h1>
        */}
  
        <userRef.Consumer>
     {(answer)=>{return(
      <>
      <h1>here is the {answer}</h1>
      </>
     )}}
             </userRef.Consumer>
      </>
      )
}
