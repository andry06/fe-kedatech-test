import React from 'react'
import { FaArrowRightFromBracket } from "react-icons/fa6";

const NextArrow = ({ onClick, buttonNext }) => {
  return (
        <div className='absolute  right-[24px] -top-[65px] '>
            <button className='cursor-pointer w-12 h-12 p-[15px] bg-cyan-500 text-white rounded-full hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-cyan-500 disabled:opacity-50' disabled={buttonNext ? true : false} onClick={onClick}>
                <FaArrowRightFromBracket />
            </button>
        </div>
  )
}

export default NextArrow