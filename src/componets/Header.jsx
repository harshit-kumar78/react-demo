import React, { useState } from "react";

const Header = () => {
  const [name,setName] = useState('harshit');
  const obj = {color:'red',backgroundColor:'green'}
  const add = 'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg';
  const add2 = 'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg';
  let bool = true;
 
  return <>
  <img src={bool?add2:add} style={{height:'200px'}}/>
  <h1>{name}</h1>
  <button onClick={()=>setName('dipannita')}>change</button>
  </>;
};

export default Header;
