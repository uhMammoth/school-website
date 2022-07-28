import React, { useState} from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
import {useQuery} from '@apollo/client';
import {COUNSELORS} from '../utils/queries';
import pen1 from '../assets/left.jpg'
import pen2 from '../assets/2pen.jpg'


const ImageSlider = () => {
    const {data} = useQuery(COUNSELORS);
    console.log(data);
    console.log(COUNSELORS);
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
    if (!Array.isArray(counselors) || counselors.length <= 0) {
        return null;
    }

    return (
    
        <section className="lg:grid lg:grid-cols-12 lg:gap-20">
    
        <div className='hidden lg:flex lg:col-span-2 lg:h-screen'>
        <img src={pen1} alt='students hugging staring at the sun' className=' nav m-auto mb-1 lg:h-screen home shadow-lg md:h-80	sm:h-40'/>
        </div>
    
    
      {/*  mobile  */}  
      <div className='lg:col-span-6 lg' >
        <section className="slider h-screen w-screen lg:w-3/4">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/> 
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {counselors.map((counselor, index) => {  
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                        <><div className='  px-10 pt-72 md:px-32 md:pt-16 rblue lg:pt-12 lg:w-[700px]'>
                            <h2 className='text-3xl pb-4 md:pb-4 text-center font-thin lg:text-5xl'>{counselor.name}</h2>
                            <img src={require(`../assets/${counselor.imageUrl}`)} alt='' className='mx-auto rounded-full h-44 w-44 md:h-80 md:w-80' />
                            {/* <h2 className='pt-4 md:pt-4 text-2xl text-center font-thin lg:text-5xl'>Specialty: {counselor.area}</h2>
                            <h2 className='py-6 md:py-4 w-44 mx-auto text-center font-thin lg:text-2xl'>{counselor.title}</h2>
                            <h2 className='py-3 leading-relaxed indent-10 text-sm text-left font-thin lg:text-xl'>{counselor.lorem}</h2>
                            <h2 className='pb-3 leading-relaxed indent-10 text-sm text-left font-thin lg:text-xl'>{counselor.lorem}</h2> */}

                        </div>
                        <img src={require(`../assets/${counselor.imageUrl}`)} alt='counselor helping student' className='w-full h-36 md:h-80 pt-2 md:pt-6' />
                        <div className="  w-full sm:mb-2 pb-12 bottom-0">  
                            <button type="button" className=" nav bgblue yellow w-full font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Schedule now</button>                        
                        </div></>
                        )}
                    </div>
            )})}    
        </section>
        </div>
        
        <div className='hidden lg:flex lg:col-span-4 lg:h-screen'>
        <img src={pen2} alt='students hugging staring at the sun' className=' nav m-auto mb-1 lg:h-screen home shadow-lg md:h-80	sm:h-40'/>
        </div>
        
        </section>
    )
}

export default ImageSlider