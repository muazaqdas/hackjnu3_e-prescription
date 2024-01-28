import {createContext, useEffect, createRef, useRef, useState} from 'react'

const AuthContext = createContext()

export const AuthProvider = ({children})=>{

  const [myUser, setUser] = useState({});

  return (
    <AuthContext.Provider value={{
     myUser,
     setUser,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext