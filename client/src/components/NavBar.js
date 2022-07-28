import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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
        <div>
        <div className='z-20 fixed w-full h-9 md:h-11 flex' >      
        
            <div className='w-full text-4xl font-semibold'>
             
            <div className='fixed top-0 right-0'>
            <ul className={ 'hidden fixed border-2 text-white right-0 bg-blue-500 absolute md:flex'}>
                
                {Auth.loggedIn() ? (
                    <>
                        <a className=' nav w-full h-full font-light text-xl p-2' href="/" onClick={logout}>Logout</a>
                    </>                    
                ) : (
                    <>
                    </>
                ) }
            </ul>    
            </div>
            </div>
            
            <div onClick={handleClick}className='sm:hidden z-10 mx-auto pt-1 md:pt-3 text-2xl orange' >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <ul className={!nav? 'hidden':' border-2 mt-9 md:mt-12 nav rblue bg-white w-full top-0 absolute flex justify-between'}>
                {Auth.loggedIn() ? (
                    <>
                        <a className=' w-full h-full font-light text-xl p-2' href="/" onClick={logout}>Logout</a>
                    </>                    
                ) : (<>
                </>) }
            </ul>               
        </div>
        </div>
    );
};

export default NavBar