

import { useContext } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { DataContext } from './Components/UserContext'
import Home from './Components/Layouts/Home'
import Footer from './Components/Footer'

function App() {
    const {data,loading,error} = useContext(DataContext) 

    if(loading) return <p>loading</p>
    if(error) return <p>Error Loading Data</p>

  return (
    <>
     <Navbar/>
     <Home/>
     <Footer/>
   
    </>
  )
}

export default App
