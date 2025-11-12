import React, { createContext, useEffect, useState } from 'react'
 export const DataContext = createContext()
const UserContext = ({children}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectCat,setSelectCat] = useState("All")
    const [showMore,setShowMore] = useState(false)
    const [search , setSearch] = useState("")
    const [addToCart, setAddToCart] = useState([])
    const [wishlist ,setWitshlist] = useState([])
    
  
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


       const cart = (p) =>{
      setAddToCart ((prev)=>{
        const existItem = prev.find((item) => item.id === p.id)
        if(existItem){
          return prev.map((item) => 
          item.id === p.id ? {...item, quantity: (item.quantity || 1) +1}: item )
        }
        else {
          return [...prev, {...p,quantity: 1}]
        }
      })
    }

  
    
    const removeCart = (id) =>{
      setAddToCart((prev) => prev.filter((item) => item.id !==id))
    }
   
    const decrementQty = (id) => {
  setAddToCart((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) - 1 } 
          : item
      )
      .filter((item) => item.quantity > 0) 
  );

};
 const wish = (p) => {
  setWitshlist((prev) => {
    const existItem = prev.find((item) => item.id === p.id);
    if (existItem) {
    
      return prev.filter((item) => item.id !== p.id);
    } else {
  
      return [...prev, { ...p, quantity: 1 }];
    }
  });
};
    const removeWish = (id) => {
  setWitshlist((prev) => prev.filter((item) => item.id !== id));
};

const decrementQtyOfWish = (id) => {
  setWitshlist((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (name,email, password) => {
   
   setUser(name)
  };

  const logout = () => {
    setUser(null);
    
  };
    
  return (
    <DataContext.Provider value={{data,loading,error,selectCat,setSelectCat , showMore,setShowMore,search,setSearch,addToCart, setAddToCart,wishlist ,setWitshlist,cart,removeCart,decrementQty,wish,removeWish,decrementQtyOfWish, user,setUser,login,logout }}>
      {children}
    </DataContext.Provider>
  )
}

export default UserContext
