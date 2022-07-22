import React, { useState} from 'react';
import { SliderData } from '../components/SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
    <section className="slider bg-gradient-to-b from-sky-100 via-sky-100 to-sky-50">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/> 
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
        {SliderData.map((slide, index) => {  
            return (
                <div 
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                >
                    {index === current && (
                       <>
                       <div className='max-w-screen-lg mx-auto px-12 pt-24 '>
                            <h2 className='text-4xl pb-4 text-gray-800 text-center font-thin underline'>{slide.name}</h2>
                            <img src={slide.image} alt='' className='mx-auto rounded-full h-44 w-44' />
                            <h2 className='pt-4 text-xl text-gray-900 text-center '>Specialty: {slide.area}</h2>
                            <h2 className='py-4 text-xl w-44 mx-auto text-gray-800 text-center font-thin'>{slide.title}</h2>
                            <h2 className='leading-relaxed indent-6 text-sm text-gray-800'>{slide.lorem}</h2>

                        </div>
                        <img src={slide.img} alt='' className='w-full pt-6' />
                        <div className="  w-full  bottom-0">  
                            <button type="button" class="w-full border-2 border-blue-200 text-white bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm py-3 text-center">Schedule a Meeting</button>
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