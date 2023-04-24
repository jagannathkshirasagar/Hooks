import React from 'react'

const Example_2=()=> {
    const map=new Map([['user1', 'John'],
['user2', 'Kate'],
['user3', 'Peter'],]);
const obj=Object.fromEntries(map);
console.log(map);
  return (
    <div>Example_2</div>
  )
}

export default Example_2