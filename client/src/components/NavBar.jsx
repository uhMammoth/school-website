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
<<<<<<< HEAD
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
                <Link className=' w-full h-full font-light text-xl p-2 hover:bg-blue-200'  to='/counselor'>Counselor</Link>
                <Link className=' w-full h-full font-light text-xl p-2 hover:bg-blue-200'  to='/contact'>Contact</Link>
=======
        
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
>>>>>>> 2e750af5871f80066f8e2ee5797d319c4d5a5ce9
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