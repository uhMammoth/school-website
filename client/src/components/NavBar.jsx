import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'


const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (

        /*  mobile hamburger/hidden  */
        <div className='z-20 fixed top-0  w-full h-16 flex ' >        
            <div onClick={handleClick}className='md:hidden z-10 pl-[359px] pt-2 text-2xl orange' >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <ul className={!nav? 'hidden':' border-2 mt-10 nav rblue bg-white w-full top-0 absolute flex justify-between'}>
                <Link className=' w-full h-full font-light text-xl p-2'  to='/'>Home</Link>
                <Link className=' w-full h-full font-light text-xl p-2'  to='/login'>LogIn</Link>
                <Link className=' w-full h-full font-light text-xl p-2'  to='/counselor'>Counselor</Link>
                <Link className=' w-full h-full font-light text-xl p-2'  to='/calendar'>Calendar</Link>
                <Link className=' w-full h-full font-light text-xl p-2'  to='/contact'>Contact</Link>
            </ul>    
        </div>
    );
};

export default NavBar