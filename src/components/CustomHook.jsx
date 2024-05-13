import React from 'react'
import { useFetch } from './useFetch';

const CustomHook = () => {
    const { isLoading, apiData, serverError } = useFetch("https://jsonplaceholder.typicode.com/users");

    if(serverError) return <p>Error....! = {serverError}</p>
  if(isLoading) return <p>Loading....!</p>
  return (
    <ul>
        {apiData && apiData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}

      </ul>
  )
}

export default CustomHook;