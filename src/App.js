import React, { useState, lazy, Suspense } from 'react'
import { hot } from 'react-hot-loader'

const Warning = lazy(() => import('./Warning'))


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Hello world</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      {count > 5 ? <Suspense fallback={null}><Warning /></Suspense> : null}
    </>
  )
}

export default hot(module)(App)
