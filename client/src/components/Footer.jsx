import React, {useState} from 'react';
import { FaTimes, FaYoutube } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs'
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import iimage from '../assets/iimage.jpg'

const Footer = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed bottom-0 w-full h-16 flex justify-center items-center' >
            {/* Desktop */}
            <div className='hidden lg:flex bg-white w-full h-full shadow-[0_-15px_15px_-15px] shadow-slate-400 items-center justify-center'>
                <AiFillFacebook className='text-6xl mx-3 text-blue-800 hover:text-orange-500'/>
                <AiFillInstagram className='text-6xl mx-3 text-blue-800 hover:text-orange-500'/>
                <AiFillTwitterCircle className='text-6xl mx-3 text-blue-800 hover:text-orange-500'/>
                <FaYoutube className='text-6xl mx-3 text-blue-800 hover:text-orange-500'/>
            </div>
            {/* Mobile */}
            <div onClick={handleClick}className='lg:hidden z-10 pb-2 text-2xl text-orange-500'>
                {!nav ? <BsInfoCircle /> : <FaTimes />}
            </div>
            <ul className={!nav? 'hidden': 'opacity-90 border-4 border-orange-600 rounded-t-2xl absolute bottom-0 w-[330px] h-auto bg-yellow-50 flex flex-col justify-center items-center'}>
                <img src={iimage} alt='' className='mt-4 w-full iimage'/>
                <div className='text-3xl mt-6 text-blue-700 font-bold'>Lorem Ipsum School</div>
                <div className='text-xl mt-2 text-blue-700 font-bold'>Counseling</div>
                <div className='text-xl mt-6 text-black' >Hours: 7:00 AM - 7:00 PM</div>
                <div className='text-xl mt-6 text-black' >Phone: 555 555 2042</div>
                <div className='text-xl mt-2 text-black'>Fax: 555 555 2048</div>
                <div className='text-xl mt-6 text-black'>5150 Ole Town Td, suite 404</div>
                <div className='text-xl mt-2 mb-10 text-black underline underline-offset-8'>Lorem Ipsum, CA 95550 </div>
                <div className='flex m-2 mb-16'>
                    <AiFillFacebook className='text-6xl mx-3 text-blue-800'/>
                    <AiFillInstagram className='text-6xl mx-3 text-blue-800'/>
                    <AiFillTwitterCircle className='text-6xl mx-3 text-blue-800'/>
                    <FaYoutube className='text-6xl mx-3 text-blue-800'/>
                </div>
            </ul>    
        </div>
    );
};

export default Footer