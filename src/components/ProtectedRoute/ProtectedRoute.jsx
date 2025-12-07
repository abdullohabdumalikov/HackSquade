import React from 'react'
import { Navigate } from 'react-router-dom'
import '../ProtectedRoute/ProtectedRoute.css'

function ProtectRoute({ children }) {

  const token = localStorage.getItem("cild")

  if (!cild) {
    return <Navigate replace to={"/"}/>
  }

  return children
}

export default ProtectRoute