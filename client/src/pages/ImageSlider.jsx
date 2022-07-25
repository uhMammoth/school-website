import React, { useState} from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import {useQuery, useMutation} from '@apollo/client';
import {COUNSELORS} from '../utils/queries';


const ImageSlider = () => {
    const {data} = useQuery(COUNSELORS);
    const counselors = data?.counselors || {};
    console.log(counselors);
    const [current, setCurrent] = useState(0)
    const length = counselors.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(counselors) || length <= 0) {
        return null;
    }

    return (
    <section className="h-screen slider bg-gradient-to-b from-sky-100 via-sky-100 to-sky-50">
        <div className='hidden lg:flex arrow-container'>
        <FaArrowAltCircleLeft className='left-arrow ' onClick={prevSlide}/> 
        <FaArrowAltCircleRight className='right-arrow relative' onClick={nextSlide}/>
        </div>
        <div className='lg:hidden'>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/> 
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
        </div>
        {counselors.map((counselor, index) => {  
            return (
                <div 
                    
                >
                    {index === current && (
                       <>
                       <div className='max-w-screen-lg mx-auto px-12 '{...index === current ? 'slide active' : 'slide'}
                    key={counselor._id}>
                            <h2 className='text-4xl pb-4 text-gray-800 text-center font-thin underline'>{counselor.name}</h2>
                            <img src={require(`../assets/${counselor.imageUrl}`)} className='mx-auto rounded-full h-44 w-44' alt='' />
                        </div>
                        <div className='hidden lg:flex'>
                        
                        <div className="  w-full h-full">  
                        <button type="button" class="w-full border-blue-200 text-white bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm py-3 text-center">Schedule a Meeting</button>
                            <img src={require(`../assets/${counselor.imageUrl}`)} alt='' className='w-full h-80' />

                        </div>
                        </div>
                        <div className='lg:hidden'>
                        <img src={require(`../assets/${counselor.imageUrl}`)} alt='' className='w-full pt-6' />
                        <div className="  w-full  bottom-0">  
                            <button type="button" className=" w-full border-2 border-blue-200 text-white bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm py-3 text-center">Schedule a Meeting</button>
                        </div>
                        </div>
                    </>
                    )}
                </div>
            );
        })}    
    </section>
    )
}

export default ImageSlider