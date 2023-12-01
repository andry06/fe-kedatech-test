import React, { useState } from 'react';
import logo from '../images/logo/logo.png';
import { ImMenu3 } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";


const TopBar = () => {
const [showMenu, setShowMenu] = useState(false);
const [showLogin, setShowLogin] = useState(false);
const [isPasswordVisible, setIsPasswordVisible] = useState(false);

function togglePasswordVisibility() {
  setIsPasswordVisible((prevState) => !prevState);
}

  return (
    <section >
        {/* table and laptop */}
        <div className='hidden sm:flex flex-row items-center justify-between ms-4 me-6 pt-4'>
            <div className="col-span-3 flex flex-row items-center gap-6 md:gap-4 sm:gap-2 pe-8 ">
                <div><img src={logo} alt="" className='lg:w-16 md:w-10 w-6'/></div>
                <div>
                    <button className='text-white font-bold lg:text-2xl md:text-lg sm:text-base'><a href="#home">Home</a></button>
                </div>
            </div>
            <div className='col-span-9 bg-blue flex flex-row gap-16 md:gap-12 sm:gap-8 float-right items-center'>
                <div className='font-bold lg:text-2xl md:text-lg sm:text-base'><a href="#about">About</a></div>
                <div className='font-bold lg:text-2xl md:text-lg sm:text-base'><a href="#price">Pricing</a></div>
                <div className='font-bold lg:text-2xl md:text-lg sm:text-base'><a href="#contact">Contact</a></div>
                <div >
                    <button className='cursor-pointer lg:text-xl md:text-lg sm:text-[14px] border border-sky-400 text-sky-400 px-8 py-2 rounded-lg hover:border-white hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 ' onClick={() => {setShowLogin(!showLogin); setShowMenu(false)}}>
                    { showLogin ? <IoCloseSharp /> : 'Login' }
                    </button>    
                </div>
            </div>
        </div>

        {/* mobile */}
        <div className='sm:hidden flex flex-row justify-between items-center'>
            <div className='p-2 ' ><img src={logo} alt="" className='w-12'/></div>
            <div >
                <button className='cursor-pointer lg:text-xl md:text-lg sm:text-[14px] border border-sky-400 text-sky-400 px-8 py-2 rounded-lg hover:border-white hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500' onClick={() => {setShowLogin(!showLogin); setShowMenu(false)}}>{ showLogin ? <IoCloseSharp /> : 'Login' } </button>    
            </div>
            <div className=' cursor-pointer text-sky-400 text-4xl p-4 rounded' onClick={() => {setShowMenu(!showMenu); setShowLogin(false);} }>{showMenu ? <IoCloseSharp /> : <ImMenu3 />} </div>
        </div>

                {/* Sidebar */}
        <div className={`${ !showMenu ? "hidden" : "flex flex-col sm:hidden"} z-50 text-start bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl text-white sidebar`}>
          {/* <div className="flex justify-end items-start flex-1 flex-col text-white "> */}
              <div className="font-inter font-medium cursor-pointer px-6 py-3 pt-4 text-[16px]  hover:bg-blue-500 hover:rounded-t-xl">
                <a href="#home">Home</a>
              </div>
              <div className="font-inter font-medium cursor-pointer px-6 py-3  text-[16px] hover:bg-blue-500">
                <a href="#about" className='cursor-pointer'>About</a>
              </div>
              <div className="font-inter font-medium cursor-pointer px-6 py-3 text-[16px] hover:bg-blue-500">
                <a href="#price">Pricing</a>
              </div>
              <div className="font-inter font-medium cursor-pointer px-6 py-3 pb-4 text-[16px] hover:bg-blue-500 hover:rounded-b-xl">
                <a href="#contact">Contact</a>
              </div>
          {/* </div> */}
        </div>

        <div className={`${ !showLogin ? "hidden" : "flex flex-col gap-8 "} z-50 py-8 bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-16 md:top-20 sm:right-1 right-[11%]  mx-4 my-2 min-w-[140px] rounded-xl text-white sidebar w-8/12 sm:w-6/12 md:w-5/12 lg:w-4/12 `}>
            <div >
                <h1 className=' text-white text-3xl'>Login</h1>
            </div>
            <div className='flex flex-row justify-center gap-4 text-xl'>
                <div className='cursor-pointer border border-white p-4 hover:bg-blue-500 '><BsGoogle /></div>
                <div className='cursor-pointer border border-white p-4 hover:bg-blue-500'><FaFacebookF /></div>
            </div>
           
            <div className='flex flex-row items-center'>
                <div className='w-5/12 ms-8'><hr style={{ border: '1px solid white'}}/></div>
                <div className='w-2/12'>atau</div>
                <div className='w-5/12 me-8'><hr style={{ border: '1px solid white'}}/></div>
            </div>
            <div className='flex flex-col gap-8 px-8'>
                <div>
                    <input className="w-full text-black py-2 px-3  text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1" id="username" type="text" placeholder="Username" />
                </div>
                <div className='relative '>
                    <input type={isPasswordVisible ? "text" : "password"} placeholder="Password" className="w-full text-black py-2 px-3  text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1" />
                    <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600" onClick={togglePasswordVisibility}>
                        {isPasswordVisible ? <IoMdEyeOff className='text-xl'/>  : <IoMdEye className='text-xl'/>}
                    </button>
                </div>
            </div>
            <div className='flex px-8'>
                <button className='bg-purple-600 w-full rounded-xl py-3 font-bold'>LOGIN</button>
            </div>
            <div >
                Lupa password ?
            </div>
        </div>
    </section>
  )
}

export default TopBar