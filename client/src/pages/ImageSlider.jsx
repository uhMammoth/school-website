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
    
        /*  slider  */
        <section className="slider h-screen w-screen">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/> 
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {SliderData.map((slide, index) => {  
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                        <><div className='  px-10 pt-72 md:px-32 md:pt-16 rblue'>
                            <h2 className='text-3xl pb-4 md:pb-4 text-center font-thin'>{slide.name}</h2>
                            <img src={slide.image} alt='' className='mx-auto rounded-full h-44 w-44 md:h-80 md:w-80' />
                            <h2 className='pt-4 md:pt-4 text-2xl text-center font-thin'>Specialty: {slide.area}</h2>
                            <h2 className='py-6 md:py-4 w-44 mx-auto text-center font-thin'>{slide.title}</h2>
                            <h2 className='py-3 leading-relaxed indent-10 text-sm text-left font-thin'>{slide.lorem}</h2>
                            <h2 className='pb-3 leading-relaxed indent-10 text-sm text-left font-thin'>{slide.lorem}</h2>

                        </div>
                        <img src={slide.img} alt='counselor helping student' className='w-full h-36 md:h-96 pt-2 md:pt-6' />
                        <div className="  w-full sm:mb-2 pb-12 bottom-0">  
                            <button type="button" class=" nav bgblue yellow w-full font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Schedule now</button>                        
                        </div></>
                        )}
                    </div>
            )})}    
        </section>
    )
}

export default ImageSlider