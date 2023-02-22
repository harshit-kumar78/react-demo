import React, { useState } from "react";

const Header = ({name,email,address,a,set}) => {

  // console.log(props);
  return(
    <div style={{backgroundColor:'yellow'}}>
        Name:<h1>{name}</h1>
        email:<h2>{email}</h2>
        city:<h3>{address.city}</h3>
        state:<h3>{address.state}</h3>
        {a(1,2)}
        <button onClick={() => set("pankaj")}>change name</button>
    </div>)
  
 
 
};

export default Header;
