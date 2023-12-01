import React from 'react';
import about from '../images/about.png';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const About = () => {
  return (
    <section id="about">
        <div className='py-16 lg:mx-16 md:mx-12 mx-8 flex flex-col md:flex-row md:gap-8 lg:gap-16 md:items-start lg:items-center' >
           
            <div className='py-16 md:w-6/12 mx-auto' data-aos='fade-up-right' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                <img src={about} alt="about" />
            </div>
            <div className='flex flex-col gap-4 md:w-6/12' data-aos='fade-up-left' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out' >
                <div><h1 className='text-4xl text-center font-bold'>Tentang Kami</h1></div>
                <div className='opacity-50'>The People, Our Community</div>
                <div className='text-start flex flex-col gap-3'>
                    <div className='text-justify'>Kami adalah perusahaan penyedia layanan teknologi yang berlokasi di Jakarta, dengan 4 kantor cabang di Indonesia, Singapura, Hong Kong dan Amerika.</div>
                   
                    <div className='text-justify'>Kami memiliki determinasi, komitmen dan pemahaman yang tinggi dalam memberikan layanan teknologi yang dapat membantu bisnis anda mencapai tahap optimum dan memberikan dasar yang kuat dalam pengambilan keputusan.</div>
                    
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row items-center gap-4' >
                            <div><IoMdCheckmarkCircleOutline className='inline text-blue-500 text-xl' /> </div>
                            <div className='text-base'>Memberikan informasi finansial dari beberapa sumber</div>
                        </div>
                        <div className='flex flex-row items-center gap-4' >
                            <div><IoMdCheckmarkCircleOutline className='inline text-blue-500 text-xl' /> </div>
                            <div className='text-base'>Memberikan layanan dan dukungan selama 24/7</div>
                        </div>
                        <div className='flex flex-row items-center gap-4' >
                            <div><IoMdCheckmarkCircleOutline className='inline text-blue-500 text-xl' /> </div>
                            <div className='text-base'>Harga yang masuk akal dan beberapa pilihan pembayaran</div>
                        </div>
                        <div className='flex flex-row items-center gap-4' >
                            <div><IoMdCheckmarkCircleOutline className='inline text-blue-500 text-xl' /> </div>
                            <div className='text-base'>Hasil yang maksimal</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default About