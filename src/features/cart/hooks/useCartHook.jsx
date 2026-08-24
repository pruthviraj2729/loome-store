import React from 'react'
import { useNavigate } from 'react-router-dom'

const useCartHook = () => {

    const navigate = ( useNavigate())
  return {
    navigate
  }
}

export default useCartHook