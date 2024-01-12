import logo from '../assets/images/OIP.jpg';
import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';
import userContext from '../utils/context/userContext';
import { useSelector } from 'react-redux';

const Header = () => {
   const [btnStatus , setBtnStatus] = useState('Login')
   const onlineStatus = useOnlineStatus()
   //recieving context api
   const loggedInData = useContext(userContext)
   //it returns a object so we have to destructure it
   const {loggedInUser} = loggedInData;

   //subscribing our store using useselector hook which is given bu react-redux
   const cartItems = useSelector((store) => store.cart.items)
    return (
        <>

        <div className=' bg-slate-300  w-full h-28 fixed top-0 z-10'>
        <div className='max-w-[1124px]  mx-auto '>
        <div className='flex items-center justify-between'>
        <div className='bg-slate-300 py-3'>
            <img src={logo} alt="" className='bg-slate-300 h-20 px-3 w-fit' />
        </div>
            <div>
                 <ul className='flex gap-9 items-center justify-center cursor-pointer'>
                 <li>{onlineStatus? 'online 🔴' : 'offline 🟤'}</li>
                   <Link to='/'> <li>Home</li></Link>
                   <Link to='grocery'> <li>Grocery</li></Link>
                    <Link to='help'><li>Help</li></Link>
                    <Link to='contact'><li>Contact</li></Link>
                    <Link to='/cart'><li className='relative'>Cart <span className='absolute top-[-10px] right-[-12px] text-lg ' >{cartItems.length}</span></li></Link>
                    <li ><button className='bg-red-500 px-3 py-2' onClick={()=>{
                       btnStatus === 'Login' ? setBtnStatus('Logout'):setBtnStatus('Login') 
                    }}>{btnStatus}</button></li>
                    <li className='font-bold'>{loggedInUser}</li>
                 </ul>
            </div>
        </div>
        
        </div>
        </div>
        
            
        </>
    )
}


export default Header;