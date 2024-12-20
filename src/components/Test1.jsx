import React, { useEffect } from 'react'

function Test1() {
  useEffect(()=>{
    console.log('hello...');
    return ()=>{
      console.log('Goodbye...');
    }
  },[])
  return (
    <>
      <h2>Hello From Test1</h2>
    </>
  )
}

export default Test1
