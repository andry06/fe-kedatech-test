import React from 'react';
import { FaArrowRightFromBracket } from "react-icons/fa6";

const PrevArrow = ({onClick}) => {
  return (
    <div className='absolute right-[84px] -top-[65px]'> 
    <div className='cursor-pointer w-12 h-12 p-[15px] bg-cyan-500 text-white rounded-full hover:bg-blue-500' onClick={onClick}>
        <FaArrowRightFromBracket className="rotate-180 " />
    </div>
    </div>
  )
}

export default PrevArrow