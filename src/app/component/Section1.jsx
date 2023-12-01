import React from 'react';
import vector from '../images/vector-bar.svg';
import vectorBottom from '../images/bottom-right-vector.png';

const Section1 = () => {
  return (
    <section id='home' className='mt-8'>
        <div className='mx-4' data-aos='fade-up' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
            <h3 className='font-inter font-bold lg:text-2xl text-xl '>Your Complete IT Solution</h3>
            <h4 className='mt-4 font-inter font-bold lg:text-lg text-base '>Digital Transformation Through System Integration</h4>
        </div>
        <div className='flex sm:flex-row flex-col mt-20 justify-between items-end ' >
            <div className='lg:w-6/12 sm:w-8/12 md:w-7/12 sm:p-4 px-8 lg:px-16 '>
                <div className='font-inter text-sm md:text-base lg:text-lg' data-aos='fade-up' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                    <i>"Mulai transformasi digital Anda untuk meningkatkan efektivitas dan efisiensi dalam bisnis yang Anda jalankan."</i>
                </div>
                <div className='lg:p-20 sm:p-8 mt-4 mb-2 sm:mt-0 ' data-aos='fade-up' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                    <img src={vector} alt="vector"  />
                </div>
            </div>
            <div className='lg:w-6/12 sm:w-4/12 md:w-5/12 w-4/12 sm:flex right-0'>
                <img src={vectorBottom} alt="vector" />
            </div>
        </div>
    </section>
  )
}

export default Section1