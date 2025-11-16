

import { useContext } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { DataContext } from './Components/UserContext'

import Footer from './Components/Footer'
import { DNA } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

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
     <Toaster/>
     <Outlet/>
     <Footer/>
   
    </>
  )
}

export default App
