import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa6";


const Contact = () => {
  return (
    <section id="contact">
        <div className='py-16 mx-4'>
            <div >
                <h2 className='text-3xl font-bold'>Hubungi Kami untuk Lebih Jelas</h2>
                <h4>Mulai Transformasi Digital Anda Sekarang</h4>
            </div>
            <div className='flex flex-col sm:flex-row text-center font-bold text-blue-500 mt-8 gap-8 px-2 items-center'>
               
               
                <div className=' bg-gradient-to-r from-cyan-500 to-blue-500  flex flex-col  rounded-xl sm:w-7/12 w-full'  data-aos='fade-up-right' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                    <div className='text-white p-4 text-xl text-start ps-4 pt-4 '>
                        Hubungi Kami
                    </div>
                    <div className='bg-white flex flex-col mx-4 py-4 px-4 rounded-xl gap-4 mb-4'>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <input className="w-full text-black py-1 px-3  text-sm border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1" id="firstname" type="text" placeholder="First Name" />
                            </div>
                            <div>
                                <input className="w-full text-black py-1 px-3  text-sm border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1" id="lastname" type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <input className="w-full text-black py-1 px-3  text-sm border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1" id="firstname" type="email" placeholder="Email" />
                            </div>
                            <div>
                                <input className="w-full text-black py-1 px-3  text-sm border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1" id="lastname" type="phone" placeholder="Phone" />
                            </div>
                        </div>
                        <div>
                            <textarea id="message" rows="4" class="block p-2.5 w-full  text-black text-sm border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1" placeholder="Pesan..."></textarea>
                        </div>
                        <div className='text-start'>
                            <button className='cursor-pointer lg:text-xl md:text-lg sm:text-[14px] border border-sky-400 text-sky-400 px-8 py-2 rounded-lg hover:border-white hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500' >Kirim </button>    
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-8 sm:w-5/12'  data-aos='fade-up-left' data-aos-offset='200' data-aos-delay='50' data-aos-duration='500' data-aos-easing='ease-in-out'>
                    <div className='text-2xl flex lg:flex-row flex-col '>
                        <div>Hubungi Kami : </div> 
                        <div> +62 812 9655 6868</div>
                    </div>
                   <div className='text-3xl flex flex-row gap-8'>
                        <div><FaPhone /></div>
                        <div><FaWhatsapp /></div>
                   </div>
                    <div className='flex flex-row gap-4 mx-4'>
                        <div className='flex flex-row items-center gap-2'>
                            <div><FaClipboardCheck className='text-blue-500'/></div>
                            <div>PEOPLE</div>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <div><FaClipboardCheck className='text-blue-500'/></div>
                            <div>TECHNOLOGY</div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 mx-4'>
                        <div className='flex flex-row items-center gap-2'>
                            <div><FaClipboardCheck className='text-blue-500'/></div>
                            <div>PROCESS</div>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <div><FaClipboardCheck className='text-blue-500'/></div>
                            <div>RESULT</div>
                        </div>
                    </div>

                  
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact