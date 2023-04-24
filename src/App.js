
import './App.css';
import Colors from './HooksConcept/colors'
import Useeffectconcept from './HooksConcept/Useeffectconcept'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from './HooksConcept/Timer';
import Demo1 from './Map/demo1';
import Useocontextconcept from './HooksConcept/Useocontextconcept';
import Example1 from './Map/Example1';
import Example_2 from './Map/Example_2';
import mapToJson from './Map/mapToJson';
import Component1 from './API context/Component1';
import { createContext } from 'react';
import Component3 from './API context/Component3';
import Usecontextconcept from './HooksConcept/Usecontextconcept';


const User=createContext()

const App =()=> {
 

  return (
<>
<Usecontextconcept/>
 {/* <Demo1/>  */}
{/* <Example1/> */}
 {/* <Timer/>  */}
 {/* <Colors/> */}
 {/* <Useeffectconcept/> */}
{/* <Example_2/> */}
{/* < mapToJson/> */}
{/* 
<User.Provider value={"Sachin"}>
<Component1/>
<Component3/>
<Useocontextconcept/>
</User.Provider> */}


</>
  );
}

 export {User};

export default App;
