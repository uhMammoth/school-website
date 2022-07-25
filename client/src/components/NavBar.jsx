import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (        
        <div className='fixed top-0 w-full h-16 flex z-10 justify-center'> 
        {/* Desktop */}       
        <div className="hidden lg:flex bg-white w-full h-full items-center justify-center shadow-md shadow-slate-200">
            <ul>
                <Link className=' w-full h-full font-semibold text-xl p-2 hover:text-blue-700'  to='/'>Home</Link>
                <Link className=' w-full h-full font-semibold text-xl p-2 hover:text-blue-700'  to='/login'>Login</Link>
                <Link className=' w-full h-full font-semibold text-xl p-2 hover:text-blue-700'  to='/appointments'>Appointments</Link>
                <Link className=' w-full h-full font-semibold text-xl p-2 hover:text-blue-700'  to='/counselor'>Counselor</Link>
                <Link className=' w-full h-full font-semibold text-xl p-2 hover:text-blue-700'  to='/contact'>Contact</Link>
            </ul>    
        </div>
        {/* Mobile */}
        <div onClick={handleClick}className='lg:hidden pt-5 z-10 text-2xl text-orange-500' >
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
            <ul className={!nav? 'hidden':'opacity-70 border-4 mt-10 border-orange-600 text-blue-800 w-full top-0 bg-yellow-50 absolute flex justify-between'}>
                <Link className=' w-full h-full font-light text-xl p-2 hover:bg-blue-200'  to='/'>Home</Link>
                <Link className=' w-full h-full font-light text-xl p-2 hover:bg-blue-200'  to='/login'>LogIn</Link>
                <Link className=' w-full h-full font-light text-xl p-2 hover:bg-blue-200'  to='/page'>Page</Link>
                <Link className=' w-full h-full font-light text-xl p-2 hover:bg-blue-200'  to='/counselor'>Counselor</Link>
                <Link className=' w-full h-full font-light text-xl p-2 hover:bg-blue-200'  to='/contact'>Contact</Link>
            </ul>    
        </div>
    );
};

export default NavBar