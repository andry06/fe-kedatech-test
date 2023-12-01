import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Price = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1023, min: 768 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1
        }
      };

    return (
        <section id="price" className=''>
            <div className='lg:mx-16 mx-4'>
            <Carousel 
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className="mt-20"
            containerClass="top"
            dotListClass=""
            draggable
            focusOnSelect
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable

         >
                 <div className='bg-gradient-to-r from-cyan-500 to-blue-500  flex flex-col py-8 rounded-xl mx-2 mb-6'>
                    <div>
                        <h2 className='text-3xl text-white'>Basic</h2>
                    </div>
                    <div className='text-white text-base'>
                        Untuk bisnis menengah kebawah
                    </div>
                </div>
                <div className='bg-gradient-to-r from-cyan-500 to-blue-500  flex flex-col py-8 rounded-xl mx-2 mb-6'>
                    <div>
                        <h2 className='text-3xl text-white'>Business</h2>
                    </div>
                    <div className='text-white text-base'>
                        Untuk bisnis menengah kebawah
                    </div>
                </div>
                <div className='bg-gradient-to-r from-cyan-500 to-blue-500  flex flex-col py-8 rounded-xl mx-2 mb-6 '>
                    <div>
                        <h2 className='text-3xl text-white'>Entrepreneur</h2>
                    </div>
                    <div className='text-white text-base'>
                        Untuk bisnis menengah kebawah
                    </div>
                </div>
                
                </Carousel>;
            </div>
          
        </section>
      );
}

export default Price