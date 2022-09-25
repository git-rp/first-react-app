import React from 'react'

export default function name() {
    const fname = "Sachin";
    const lname = "Tendulkar";
    const city = "Mumbai";
    const age = 50;
    const job = "Cricket";
    const inputPlaceholder = "Enter your details";
    const myArr = [1, 2, 3, 4, 5];
    const myObj = {
        name: "bhuvi",
        age :10
    }
    const getFullName = (fname, lname)=>{
        return `${fname} ${lname}`; 
    }
    const detailInputBox = <input placeholder={inputPlaceholder} autoComplete></input>;
  return (
      <div><h1> Name : {fname} {lname} </h1>
          <h1>Full name : {getFullName(fname,lname)}</h1>
          <p>City : { `${city}`}</p>
          <p>Age : {age}</p>
          <p>Job : {job}</p>
          {detailInputBox}
          {myArr[0]}
          {myObj.name}
      </div>
  )
}
