import React, { useEffect, useState } from 'react'
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Category from './components/Category'


function App() {
  const [count, setCount] = useState(0)
  const [isActive, setActive] = useState(true)
  const [category] = useState('Electronic')
  const [subcategory] = useState('Mobile')
  const [brand] = useState('Redmi')

  useEffect(() => {
    console.log('Render....' + count)

    return () => {
      console.log('Unmount...' + count)
    }
  }, [count])

  const handleIncrement = () => {
    setCount(count + 1)
  }

  console.log('Render App')

  return (
    <body className='bg-black text-white'>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column vh-100">
          <div className='d-flex justify-content-center align-items-center flex-column border rounded-5 p-5'>
          <h1 className='text-danger mb-3'>Component LifeCycle</h1>
          <h2 className='mb-2'>Count {count}</h2>
          <button className='btn btn-outline-info mb-4 fs-4' onClick={() => handleIncrement()}>Increment</button>
          {isActive ? <Test1 /> : <Test2 />}
          <button className='btn btn-outline-info mb-4 fs-4' onClick={() => setActive(!isActive)}>Change</button>
          </div>

          
          <div className='d-flex justify-content-center align-items-center flex-column border rounded-5 p-5 mt-4'>
          <h1 className='text-danger mb-3'>Props Drealing</h1>
          <Category category={category} subcategory={subcategory} brand={brand} />
          </div>
        </div>
      </div>

    </body>
  )
}

export default App
