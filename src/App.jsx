import { useState } from 'react'
import './App.css'
import FetchMethod from './components/FetchMethod'
import AsyncAwait from './components/AsyncAwait'
import AxiosLibrary from './components/AxiosLibrary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FetchMethod/> */}
      {/* <AsyncAwait/> */}
      <AxiosLibrary/>
    </>
  )
}

export default App
