import logo from '../assets/images/OIP.jpg';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';

const Header = () => {
   const [btnStatus , setBtnStatus] = useState('Login')
   const onlineStatus = useOnlineStatus()
    return (
        <>

        <div className=' bg-slate-300  w-full h-28'>
        <div className='max-w-[1124px]  mx-auto '>
        <div className='flex items-center justify-between'>
        <div className='bg-slate-300 py-3'>
            <img src={logo} alt="" className='bg-slate-300 h-20 px-3 w-fit' />
        </div>
            <div>
                 <ul className='flex gap-9  cursor-pointer'>
                 <li>{onlineStatus? 'online 🔴' : 'offline 🟤'}</li>
                   <Link to='/'> <li>Home</li></Link>
                   <Link to='grocery'> <li>Grocery</li></Link>
                    <Link to='help'><li>Help</li></Link>
                    <Link to='contact'><li>Contact</li></Link>
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