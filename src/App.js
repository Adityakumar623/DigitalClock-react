import React, { useState } from 'react';


import './App.css';

const time=new Date().toLocaleTimeString();

function App() {

const[count,setCount]=useState(time);


const Inc = () =>{
  const ctime=new Date().toLocaleTimeString();
  return setCount(ctime);
}

setInterval(Inc,1000);
  return (
    <>
        <h1 className='h1'>Time is : {count}</h1>
    {/* <button onClick={Inc}>Get time</button> */}
    </>
  );
}

export default App;
