import logo from '../assets/images/OIP.jpg';
import React from 'react';
import { useState } from 'react'

const Header = () => {
   const [btnStatus , setBtnStatus] = useState('Login')
    return (
        <>

        <div className=' bg-slate-300  w-full h-28'>
        <div className='max-w-[1124px]  mx-auto '>
        <div className='flex items-center justify-between'>
        <div className='bg-slate-300 py-3'>
            <img src={logo} alt="" className='bg-slate-300 h-20 px-3 w-fit' />
        </div>
            <div>
                 <ul className='flex gap-9 font-bold text-xl cursor-pointer'>
                    <li>Home</li>
                    <li>Help</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li><button onClick={()=>{
                       btnStatus === 'Login' ? setBtnStatus('Logout'):setBtnStatus('Login')
                    }}>{btnStatus}</button></li>
                 </ul>
            </div>
        </div>
        
        </div>
        </div>
        
            
        </>
    )
}


export default Header;