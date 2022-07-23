import React, {useState} from 'react';
import { FaTimes } from 'react-icons/fa';
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
        
        /*  mobile i-button/hidden  */
        <div className='fixed bottom-0 w-full nav h-9 flex' >
            <div onClick={handleClick}className='md:hidden z-10 mx-auto pt-2 text-2xl orange'>
                {!nav ? <BsInfoCircle /> : <FaTimes />} 
            </div>
            <ul className={!nav? 'hidden': 'nav rounded-t-xl absolute bottom-0 w-[320px] rblue h-auto ml-8 bg-white flex flex-col justify-center items-center'}>
                <img src={iimage} alt='students happy hanging out' className='mt-4 w-full iimage '/>
                <div className='font-thin text-3xl mt-6 '>Lorem Ipsum School</div>
                <div className='font-thin text-lg mt-2 '>Counseling Deparment</div>
                <div className='font-thin text-lg mt-6 ' >Hours: 7:00 AM - 7:00 PM</div>
                <div className='font-thin text-lg mt-6 ' >Phone: 909 555 2042</div>
                <div className='font-thin text-lg mt-2 '>Fax: 909 555 2048</div>
                <div className='font-thin text-lg mt-6 '>5150 Ole Town Road, suite 404</div>
                <div className='font-thin text-lg mt-2 mb-10'>Lorem Ipsum, CA 95555 </div>
                <div className='flex m-2 mb-16'>
                    <AiFillFacebook className='text-5xl mx-2 rblue'/>
                    <AiFillInstagram className='text-5xl mx-2 rblue'/>
                    <AiFillTwitterCircle className='text-5xl mx-2 rblue'/>
                    <FaYoutube className='text-5xl mx-2 rblue'/>
                </div>
            </ul>    
        </div>
    );
};

export default Footer