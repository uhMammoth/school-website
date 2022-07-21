import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'


const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='z-20 fixed top-0 w-full h-16 pt-2 flex-4 ' >        
                


                <div onClick={handleClick}className='md:hidden z-10 pl-[190px] text-2xl text-amber-500' >
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>


                <ul className={!nav? 'hidden':' opacity-90 border-4 mt-10 border-orange-600 text-blue-800 w-full top-0 bg-yellow-50 absolute flex justify-between'}>
                <Link className=' w-full h-full font-light text-xl p-2 hover:bg-blue-200'  to='/'>Home</Link>
                <Link className=' w-full h-full font-light text-xl p-2 hover:bg-blue-200'  to='/login'>LogIn</Link>
                <Link className=' w-full h-full font-light text-xl p-2 hover:bg-blue-200'  to='/counselor'>Counselor</Link>
                <Link className=' w-full h-full font-light text-xl p-2 hover:bg-blue-200'  to='/contact'>Contact</Link>
                </ul>    
        </div>
    );
};

export default NavBar