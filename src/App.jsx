import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

import './App.css'
import FetchMethod from './components/FetchMethod'
import AsyncAwait from './components/AsyncAwait'
import AxiosLibrary from './components/AxiosLibrary'
import ReactQuery from './components/ReactQuery'
import CustomHook from './components/CustomHook';

const queryClient = new QueryClient();
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* 1 */}
      {/* <FetchMethod/> */}

      {/* 2 */}
      {/* <AsyncAwait/> */}
      
      {/* 3 */}
      {/* <AxiosLibrary/> */}

      {/* 4 */}
      {/* <QueryClientProvider client={queryClient}>  
      comment this line {/* Your component tree goes here *
      <ReactQuery/>
    </QueryClientProvider> */}
    
    {/* 5 */}
    <CustomHook/>
    </>
  )
}

export default App
