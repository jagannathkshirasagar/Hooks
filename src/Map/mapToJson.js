import React from 'react'

function mapToJson() { 
    const obj = {};

map.forEach((value, key) => {
  obj[key] = value;
});

return JSON.stringify(obj);
}

    const map = new Map([
        ['name', 'bobby hadz'],
        ['country', 'Chile'],
      ]);

export default mapToJson