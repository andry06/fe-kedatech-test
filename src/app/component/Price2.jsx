import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const Price2 = () => {
    const [progress, setProgress] = useState(0);
    const [slidesToShow, setSlideToShow] = useState(0);

    const setSlides = () => {
        if(window.innerWidth <= 3000 && window.innerWidth > 1023){
            setSlideToShow(3);
        }else if(window.innerWidth <= 1023 && window.innerWidth > 767){
            setSlideToShow(2);
        }else if(window.innerWidth <= 767){
            setSlideToShow(1);
        }
    }



    useEffect(() => {
    
        setSlides();
        setProgress(100 / (3 - slidesToShow +1));
        window.addEventListener('resize', () => { setSlides() });
        
    }, [slidesToShow]);
    



    let settings = {
        arrows: true,
        dots: true,
        nextArrow:  <NextArrow />,
        prevArrow:  <PrevArrow />,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 3000,
            settings: {
              slidesToShow: 3,
           
            }
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
             
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              
            }
          }
        ],
        afterChange: current => {
            setProgress(100 / (3 - slidesToShow + 1) * (current+1) );
            console.log(slidesToShow);
        }
      };
  
    return (
        <section id="price" className='mx-4' >
            <div>
            <div className='mb-16'>
                <h3 className='text-xl font-bold'>Pilih Paket ERP Berdasarkan Tier / Level</h3>
            </div>
           
            <div className='ms-6 relative' >
            <Slider {...settings} >
                 <div className='bg-gradient-to-r from-cyan-500 to-blue-500  flex flex-col  rounded-xl select-text' data-aos='fade-up-right' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                    <div className='bg-white m-3 rounded-lg'>
                        <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
                            <h2 className='text-3xl text-white font-bold'>Basic</h2>
                        </div>
                        <div className='text-white text-base pb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-3xl'>
                            Untuk Bisnis Menengah Kebawah
                        </div>
                        <div className='text-black font-bold mt-5'>
                            <span className='text-sm'>Rp</span> <span className='text-3xl'>500.000</span>  <span className='text-sm'>/ Bln</span>
                        </div>
                        <div className='mt-6'>
                            <button className='bg-cyan-500 hover:bg-blue-500  py-2 px-4 border  text-white rounded-lg hover:text-white font-bold'>Order Now</button>
                        </div>
                        <div className='mt-6 mx-5'>
                            <hr style={{ border: '1px solid blue'}}/>
                        </div>
                        <div className='text-start text-inter mx-5 mt-4 text-sm font-bold'>
                            Fitur Unggulan
                        </div>
                        <div className='flex flex-col text-inter text-sm mx-5 '>
                            <div className='flex flex-row items-center gap-2 mt-2'>
                                <div><FaCheck className='text-cyan-500' /></div>
                                <div>Mencatat Barang Masuk</div>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <div><FaCheck className='text-cyan-500'/></div>
                                <div>Mencatat Barang Masuk</div>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <div><FaCheck className='text-cyan-500'/></div>
                                <div>Mencatat Keuntungan</div>
                            </div>
                            <div className='flex flex-row items-center gap-1 text-start'>
                                <div><IoCloseSharp className='text-red-600 text-base'/></div>
                                <div>Dapat menganalisa hasil penjualan dengan CHART</div>
                            </div>
                            <div className='flex flex-row items-center gap-1 text-start '>
                                <div><IoCloseSharp className='text-red-600 text-base'/></div>
                                <div>Support 7x24 Jam</div>
                            </div>
                            <div className='flex flex-row items-center gap-1 text-start'>
                                <div><IoCloseSharp className='text-red-600 text-base'/></div>
                                <div>Export data ke Excel</div>
                            </div>
                            <div className='flex flex-row items-center gap-1 text-start mb-6'>
                                <div><IoCloseSharp className='text-red-600 text-base'/></div>
                                <div>AI Prediksi penghasilan</div>
                            </div>
                       
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-cyan-500 to-blue-500  flex flex-col  rounded-xl select-text'  data-aos='fade-up' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                    <div className='bg-white m-3 rounded-lg'>
                        <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
                            <h2 className='text-3xl text-white font-bold'>Businness</h2>
                        </div>
                        <div className='text-white text-base pb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-3xl'>
                            Untuk Bisnis Menengah Sedang 
                        </div>
                        <div className='text-black font-bold mt-5'>
                            <span className='text-sm'>Rp</span> <span className='text-3xl'>1.000.000</span>  <span className='text-sm'>/ Bln</span>
                        </div>
                        <div className='mt-6'>
                            <button className='bg-cyan-500 hover:bg-blue-500  py-2 px-4 border  text-white rounded-lg hover:text-white font-bold'>Order Now</button>
                        </div>
                        <div className='mt-6 mx-5'>
                            <hr style={{ border: '1px solid blue'}}/>
                        </div>
                        <div className='text-start text-inter mx-5 mt-4 text-sm font-bold'>
                            Fitur Unggulan
                        </div>
                        <div className='flex flex-col text-inter text-sm mx-5 '>
                            <div className='flex flex-row items-center gap-2 mt-2'>
                                <div><FaCheck className='text-cyan-500' /></div>
                                <div>Mencatat Barang Masuk</div>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <div><FaCheck className='text-cyan-500'/></div>
                                <div>Mencatat Barang Masuk</div>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <div><FaCheck className='text-cyan-500'/></div>
                                <div>Mencatat Keuntungan</div>
                            </div>
                            <div className='flex flex-row items-center gap-2 text-start'>
                                <div><FaCheck className='text-cyan-500'/></div>
                                <div>Dapat menganalisa hasil penjualan dengan CHART</div>
                            </div>
                            <div className='flex flex-row items-center gap-2 text-start '>
                                <div><FaCheck className='text-cyan-500'/></div>
                                <div>Support 7x24 Jam</div>
                            </div>
                            <div className='flex flex-row items-center gap-1 text-start'>
                                <div><IoCloseSharp className='text-red-600 text-base'/></div>
                                <div>Export data ke Excel</div>
                            </div>
                            <div className='flex flex-row items-center gap-1 text-start mb-6'>
                                <div><IoCloseSharp className='text-red-600 text-base'/></div>
                                <div>AI Prediksi penghasilan</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-cyan-500 to-blue-500  flex flex-col  rounded-xl select-text'  data-aos='fade-up-left' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                    <div className='bg-white m-3 rounded-lg'>
                        <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
                            <h2 className='text-3xl text-white font-bold'>Enterpreneur</h2>
                        </div>
                        <div className='text-white text-base pb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-3xl'>
                            Untuk Bisnis Menengah Keatas 
                        </div>
                        <div className='text-black font-bold mt-5'>
                            <span className='text-sm'>Rp</span> <span className='text-3xl'>1.500.000</span>  <span className='text-sm'>/ Bln</span>
                        </div>
                        <div className='mt-6'>
                            <button className='bg-cyan-500 hover:bg-blue-500  py-2 px-4 border  text-white rounded-lg hover:text-white font-bold'>Order Now</button>
                        </div>
                        <div className='mt-6 mx-5'>
                            <hr style={{ border: '1px solid blue'}}/>
                        </div>
                        <div className='text-start text-inter mx-5 mt-4 text-sm font-bold'>
                            Fitur Unggulan
                        </div>
                        <div className='flex flex-col text-inter text-sm mx-5 '>
                            <div className='flex flex-row items-center gap-2 mt-2'>
                                <div><FaCheck className='text-cyan-500' /></div>
                                <div>Mencatat Barang Masuk</div>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <div><FaCheck className='text-cyan-500'/></div>
                                <div>Mencatat Barang Masuk</div>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <div><FaCheck className='text-cyan-500'/></div>
                                <div>Mencatat Keuntungan</div>
                            </div>
                            <div className='flex flex-row items-center gap-2 text-start'>
                                <div><FaCheck className='text-cyan-500'/></div>
                                <div>Dapat menganalisa hasil penjualan dengan CHART</div>
                            </div>
                            <div className='flex flex-row items-center gap-2 text-start '>
                                <div><FaCheck className='text-cyan-500'/></div>
                                <div>Support 7x24 Jam</div>
                            </div>
                            <div className='flex flex-row items-center gap-2 text-start'>
                                <div><FaCheck className='text-cyan-500'/></div>
                                <div>Export data ke Excel</div>
                            </div>
                            <div className='flex flex-row items-center gap-2 text-start mb-6'>
                                <div><FaCheck className='text-cyan-500'/></div>
                                <div>AI Prediksi penghasilan</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </Slider>

                <div className='h-[2px] bg-gray-300 w-[150px] absolute -top-[8px] right-[24px]'>
                    <div className='bg-blue-500 absolute h-[100%] transition-all' style={{ width: `${progress}%` }}></div>
                </div>
            </div>
            </div>
        </section>
      );
}

export default Price2