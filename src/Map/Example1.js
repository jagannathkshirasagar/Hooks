import React from 'react'

const Example1 =()=> {
    const json =
  '{"user1":"John","user2":"Kate","user3":"Peter"}';
  const map = new Map(Object.entries(JSON.parse(json)));
  const Josn_ex='{"emp1": "jagan","emp2":"jagan2","emp3": "jagan3","emp4":"jagan4"}';
  const Mapex=new Map(Object.entries( JSON.parse(Josn_ex))) ; 
  console.log(Mapex);
   const convertingMapToJson=JSON.stringify(Object.fromEntries(Mapex));

 console.log(convertingMapToJson);
  return (
    <div>example1</div>
  )
}

export default Example1