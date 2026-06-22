import React from 'react'
import Child from './Child'
const Parent = () => {
    const name = "MUkesh";
    const property = "5 bigha  gaon wala zameen hai jo chori ki hai";
  return (
    <>
    <div>Parent</div>
    <h1>{name}</h1>
    <Child property={property}/>
    </>
  )}
  export default Parent