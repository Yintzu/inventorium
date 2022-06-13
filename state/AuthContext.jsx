import React, { createContext, useContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"
import { auth } from "../services/firebase/firebase"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const registerUser = async (email, password) => {
    setIsLoading(true)
    let res
    try {
      res = await createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
      setError(e.message)
    }
    setIsLoading(false)
    return res
  }

  const loginUser = async (email, password) => {
    setIsLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      setError(e.message)
    }
    setIsLoading(false)
  }

  const logoutUser = async () => {
    setError(true)
    setIsLoading(true)
    try {
      await signOut(auth)
    } catch (e) {
      setError(e.message)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    onAuthStateChanged(auth, userResponse => {
      if (userResponse) {
        setUser(userResponse)
      } else {
        setUser(false)
      }
    })
  }, [])

  const values = {
    user,
    isLoading,
    error,
    registerUser,
    loginUser,
    logoutUser,
  }

  if (user === undefined) return null

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
