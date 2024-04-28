import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

import './App.css'
import FetchMethod from './components/FetchMethod'
import AsyncAwait from './components/AsyncAwait'
import AxiosLibrary from './components/AxiosLibrary'
import ReactQuery from './components/ReactQuery'

const queryClient = new QueryClient();
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FetchMethod/> */}
      {/* <AsyncAwait/> */}
      {/* <AxiosLibrary/> */}
      <QueryClientProvider client={queryClient}>
      {/* Your component tree goes here */}
      <ReactQuery/>
    </QueryClientProvider>
    </>
  )
}

export default App
