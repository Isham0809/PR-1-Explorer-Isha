import React from 'react'
import Brand from './Brand'

function SubCategory({subcategory,brand}) {
  return (
    <>
      <h2>Hello from SubCategory {subcategory}</h2>
      <Brand brand={brand}/>
    </>
  )
}

export default SubCategory
