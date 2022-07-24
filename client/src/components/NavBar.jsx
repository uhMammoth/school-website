import React from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';


const NavBar = () => {
    // const [nav, setNav] = useState(false);
    // const handleClick = () => setNav(!nav);
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    return (        
        <div className='fixed top-0 w-full h-16 flex z-10 justify-center'> 
        {/* Desktop */}       
        <div className="hidden lg:flex bg-white w-full h-full items-center justify-center shadow-md shadow-slate-200">
            <ul>
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
                <Link className=' w-full h-full font-semibold text-xl p-2 hover:text-blue-700'  to='/counselor'>Counselors</Link>
            </ul>    
        </div>
        </div>
    );
};

export default NavBar