import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyStore } from '../../context/contextApi'

const useHooks = () => {
    const navigate = useNavigate()
    const {cart} = useContext(MyStore)
    
    const itemNum = () => {
      return cart.length
    }

  return {
    navigate,
    itemNum,
  }
}

export default useHooks