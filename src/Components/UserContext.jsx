import React, { createContext, useEffect, useState } from 'react'
 export const DataContext = createContext()
const UserContext = ({children}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/shoeData.json");
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData(); 
    }, []);
    
  return (
    <DataContext.Provider value={{data,loading,error}}>
      {children}
    </DataContext.Provider>
  )
}

export default UserContext
