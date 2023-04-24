import {React, useContext} from 'react'
import Component2 from './Component2'
import { User } from '../App'
// import { First1 } from '../HooksConcept/Usecontextconcept'
export default function Component1() {
const value=useContext(User)
// const second=useContext(First1)
  return (
    <>    
Hi Here is the {value}

  
    <Component2/></>

  )
}
