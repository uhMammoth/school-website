import React, {useState} from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import iimage from '../assets/iimage.jpg'


const Footer = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed bottom-0 w-[340px] h-12 flex' >




            <div onClick={handleClick}className='md:hidden z-10 pl-[180px] pt-2 text-2xl text-orange-500'>
                {!nav ? <BsInfoCircle /> : <FaTimes />}
            </div>
        
            <ul className={!nav? 'hidden': 'opacity-90 border-4 border-orange-600 rounded-t-2xl absolute bottom-0 w-[330px] h-auto ml-8 bg-yellow-50 flex flex-col justify-center items-center'}>
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