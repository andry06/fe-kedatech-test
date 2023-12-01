import React from 'react';
import { FaArrowRightFromBracket } from "react-icons/fa6";

const PrevArrow = ({onClick, buttonPrev}) => {
  return (
    <div className='absolute right-[84px] -top-[65px]'> 
    <button className='cursor-pointer w-12 h-12 p-[15px] bg-cyan-500 text-white rounded-full hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-cyan-500 disabled:opacity-50' disabled={buttonPrev ? true : false}  onClick={onClick}>
        <FaArrowRightFromBracket className="rotate-180 " />
    </button>
    </div>
  )
}

export default PrevArrow