import React from 'react'
import { useNavigate } from 'react-router-dom'

const useHeadCareHook = () => {
    const navigate = useNavigate()
  return {
    navigate,
  }
}

export default useHeadCareHook