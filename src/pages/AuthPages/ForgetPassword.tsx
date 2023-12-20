import React from 'react'

export const ForgetPassword:React.FC = () => {
  return (
    <div className=' w-screen min-h-screen bg-[#55D6C2] flex flex-col items-center justify-center'>
    <div className="max-w-[1000px] max-h-[700px] bg-[#EFEDED80] px-[200px] py-[80px] w-full h-full max-md:px-[10%] max-md:py-[10%]">
      <div className="flex flex-col w-full h-full">
        <div className="w-full text-center text-3xl">
        Don’t worry, Enter your email below and we will send you a link to change password.
        </div>
        <div className=" my-[61px] w-full">
          <input type="email" placeholder='Email' className='p-4 w-full text-3xl'/>
        </div>
        <div className="mb-[30px] w-full flex justify-center">
          <button className='p-4 w-[60%] text-3xl text-white bg-[#03CC17] rounded-xl'>
            Submit
          </button>
        </div>
        <div className="mb-[63px] w-full flex justify-center">
            <button className='p-4 w-[60%] text-3xl text-white bg-[#296EF2] rounded-xl'>
              Sign In
            </button>
          </div>
      </div>
    </div>
  </div>
  )
}
