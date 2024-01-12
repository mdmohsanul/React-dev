import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList'
import { useDispatch } from 'react-redux'
import { clearCart } from '../utils/Redux/cartSlice'

const Cart = () => {
    const cartItemsList = useSelector((store) => store.cart.items)
   const dispatch = useDispatch()
    const handleClearCart = () => {
            dispatch(clearCart())
    }
  return (
    <>
    <div className='max-w-screen-lg mx-auto'>
    <div className='text-center  p-5 mt-32'>
    <h1 className='text-2xl font-bold'>Cart</h1>
    <button onClick={handleClearCart} 
    className='px-3 py-2 bg-zinc-900 text-white'>Clear Cart</button>
    </div>
    <div>
    {cartItemsList.length === 0 ? "Sorry you haven't add anything in your cart" :  <ItemList items={cartItemsList}/> }
    
    </div>
    </div>
    </>
  )
}

export default Cart