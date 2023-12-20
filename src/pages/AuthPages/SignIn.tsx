import React from 'react'
import { Link } from 'react-router-dom'

export const SignIn:React.FC = () => {
  return (
    <div className=' w-screen min-h-screen bg-[#55D6C2] flex flex-col items-center justify-center'>
      <div className="max-w-[1000px] max-h-[700px] bg-[#EFEDED80] px-[200px] py-[80px] w-full h-full max-md:px-[10%] max-md:py-[10%]">
        <div className="flex flex-col w-full h-full">
          <div className="w-full text-center font-bold font-serif italic text-5xl">
          Helpdesk System
          </div>
          <div className=" mt-[61px] mb-[31px] w-full">
            <input type="text" placeholder='Username' className='p-4 w-full text-3xl'/>
          </div>
          <div className="mb-[31px] w-full">
            <input type="password" placeholder='Password' className='p-4 w-full text-3xl'/>
          </div>
          <div className="mb-[63px] w-full flex justify-center">
            <button className='p-4 w-[60%] text-3xl text-white bg-[#03CC17] rounded-xl'>
              Sign In
            </button>
          </div>
          <div className="flex justify-between items-center px-3">
            <div className=" text-[#EA0000] text-xl">
            <Link to={"/forget-password"}>
            Forgot password
            </Link>
            </div>
            <div className=" text-2xl">
              <Link to={"/signup"}>
              Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
