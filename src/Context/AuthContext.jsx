import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext=createContext()
export default function AuthContextProvider({children}) {
  const navigate=useNavigate()
    const localtoken=localStorage.getItem('token')
    const [token,setToken]=useState(localtoken)
    const handleToken=(tk)=>{
        !tk
        ?localStorage.removeItem('token')
        :localStorage.setItem('token',tk)
        setToken(tk)
        navigate('/auth')
    }
  return (
    <AuthContext.Provider value={{token,handleToken}}>
      {children}
    </AuthContext.Provider>
  )
}
