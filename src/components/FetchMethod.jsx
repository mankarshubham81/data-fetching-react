import React, {useEffect, useState} from 'react'

const FetchMethod = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
            setData(data);
            setError(null);
        }).catch(error => {
            setError(error);
            setData(null);
        }).finally(() => setLoading(false));
    }, [])
    
    if(error) return <p>Error....!</p>
    if(loading) return <p>Loading....!</p>
    // console.log(data)
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

export default FetchMethod