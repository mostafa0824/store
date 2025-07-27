import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import { RotateLoader } from 'react-spinners'

export default function Auth() {
  const [page,setPage]=useState('login')
  const handlePage=()=>{
    setPage(page=='login'?'register':'login')
    {<RotateLoader size={10} color="#fff"/>}
  }
  return (
    <>
      {page === 'login' ? (
        <Login handlePage={handlePage}/>
      ):(
        <Register handlePage={handlePage}/>
      )}
    </>
  )
}
