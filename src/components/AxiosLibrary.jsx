import axios from 'axios';
import React, {useEffect, useState} from 'react'


const AxiosLibrary = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        
        axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        .then(response => {
              setData(response.data);
              setError(null);
          }).catch(error => {
              setError(error);
              setData(null);
          }).finally(() => setLoading(false));
      }, [])
    
    if(error) return <p>Error....!</p>
    if(loading) return <p>Loading....!</p>


  return (
    <>
        <ul>
          {data && data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
  
        </ul>
    </>
  )
}

export default AxiosLibrary