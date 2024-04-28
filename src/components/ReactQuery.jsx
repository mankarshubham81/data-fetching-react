import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useQuery } from 'react-query';


const ReactQuery = () => {
    const { isLoading, error, data } = 
    useQuery('get', () => axios('https://jsonplaceholder.typicode.com/users'));
    // console.log("ddd", data)
    
    if(error) return <p>Error....!</p>
    if(isLoading) return <p>Loading....!</p>
    // console.log(data)
    return (
      <>
        <ul>
          {data?.data?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
  
        </ul>
      </>
    )
}

export default ReactQuery