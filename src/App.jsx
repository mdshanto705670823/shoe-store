

import { useContext } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { DataContext } from './Components/UserContext'
import Home from './Components/Layouts/Home'
import Footer from './Components/Footer'
import { DNA } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom'

function App() {
    const {data,loading,error} = useContext(DataContext) 

     if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
    if(error) return <p>Error Loading Data</p>

  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
   
    </>
  )
}

export default App
