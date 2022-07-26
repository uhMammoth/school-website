import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';


const NavBar = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        
        /*  mobile hamburger/hidden  */
        <div className='z-20 fixed top-0  w-full h-9 md:h-11  flex bgblue nav' >        
            
            <ul className={ 'hidden border-2 nav rblue bgblue yellow w-full top-0 absolute md:flex justify-between'}>
                <Link className='nav w-full h-full font-light text-xl p-2'  to='/'>Home</Link>
                {Auth.loggedIn() ? (
                    <>
                        <Link className=' nav w-full h-full font-light text-xl p-2'  to='/dashboard'>Dashboard</Link>
                        <a className=' nav w-full h-full font-light text-xl p-2' href="/" onClick={logout}>Logout</a>
                    </>                    
                ) : (
                    <>
                        <Link className=' nav w-full h-full font-light text-xl p-2'  to='/login'>Login</Link>
                    </>
                ) }
                <Link className='nav w-full h-full font-light text-xl p-2'  to='/counselor'>Counselor</Link>
                <Link className='nav w-full h-full font-light text-xl p-2'  to='/calendar'>Calendar</Link>
                <Link className='nav w-full h-full font-light text-xl p-2'  to='/contact'>Contact</Link>
            </ul>    
            
            <div onClick={handleClick}className='sm:hidden z-10 mx-auto pt-1 md:pt-3 text-2xl orange' >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <ul className={!nav? 'hidden':' border-2 mt-9 md:mt-12 nav rblue bg-white w-full top-0 absolute flex justify-between'}>
                <Link className=' w-full h-full font-light text-xl p-2'  to='/'>Home</Link>
                {Auth.loggedIn() ? (
                    <>
                        <Link className=' w-full h-full font-light text-xl p-2'  to='/dashboard'>Dashboard</Link>
                        <a className=' w-full h-full font-light text-xl p-2' href="/" onClick={logout}>Logout</a>
                    </>                    
                ) : (<>
                    <Link className=' w-full h-full font-light text-xl p-2'  to='/login'>Login</Link>
                </>) }
                <Link className=' w-full h-full font-light text-xl p-2'  to='/counselor'>Counselor</Link>
                <Link className=' w-full h-full font-light text-xl p-2'  to='/calendar'>Calendar</Link>
                <Link className=' w-full h-full font-light text-xl p-2'  to='/contact'>Contact</Link>
            </ul>








            <Link className=' w-full h-full font-semibold text-xl p-2 hover:text-blue-700'  to='/'>Home</Link>
                 
                {Auth.loggedIn() ? (
                    <>
                        <Link className=' w-full h-full font-semibold text-xl p-2 hover:text-blue-700'  to='/dashboard'>Dashboard</Link>
                        <a className=' w-full h-full font-semibold text-xl p-2 hover:text-blue-700' href="/" onClick={logout}>Logout</a>
                    </>                    
                ) : (
                    <>
                        <Link className=' w-full h-full font-semibold text-xl p-2 hover:text-blue-700'  to='/login'>Login</Link>
                    </>
                ) }            
        </div>
    );
};

export default NavBar