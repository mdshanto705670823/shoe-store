import React, { useContext } from 'react'
import { DataContext } from './UserContext'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user} = useContext(DataContext)
    const location = useLocation()
    if(!user) {
        return <Navigate to="/login" state={{from: location}} replace/>
    }
  return (
    children
  )
}

export default PrivateRoute
