import React from 'react'
import SubCategory from './SubCategory'


function Category({category,subcategory,brand}) {
  return (
    <>
      <h2>Hello from Category {category}</h2>
      <SubCategory subcategory={subcategory} brand={brand} />

    </>
  )
}

export default Category
