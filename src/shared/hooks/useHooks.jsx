import React from 'react'
import { useNavigate } from 'react-router-dom'

const useHooks = () => {
    const navigate = useNavigate()
    // const navlink = NavLink()
  return {
    navigate,
  }
}

export default useHooks