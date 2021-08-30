import React, { useState } from "react";

const Inputfield = () => {
const [data, setData] = useState(" ")
const [inputData , setInputData] = useState(" ")
var maw = `this is maw ${inputData}`
console.log(maw)
  const handleInputChange = (e) =>{
        setData(e.target.value)  
  }

  return (
    <div>
      <input onChange={handleInputChange} type="text" />
      <br />
      <button onClick={()=>setInputData(data)}>sagor</button>
      <p>{inputData}</p>
    </div>
  );
};

export default Inputfield;
