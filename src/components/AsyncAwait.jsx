import axios from 'axios';
import React, {useEffect, useState} from 'react'


const AsyncAwait = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      (async () => {
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/users');
            // console.log(result.data)
            setData(result.data)
            setError(null);
        } catch (error) {
            setError(error);
            setData(null);          
        } finally {
            setLoading(false)
        }
      })()
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

export default AsyncAwait