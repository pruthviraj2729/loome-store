import React from 'react'
import { useNavigate } from 'react-router-dom'

const useHomeSectionHook = () => {
    const navigate = useNavigate()
  return {
    navigate,
  }
}

export default useHomeSectionHook