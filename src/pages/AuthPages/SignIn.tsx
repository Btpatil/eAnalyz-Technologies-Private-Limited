import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../features/auth/authSlice'

export const SignIn: React.FC = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("admin")
  const [password, setPassword] = useState("password")
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username !== "admin" || password !== "password") {
      setError("Wrong Username or Password")
    }
    else{
      dispatch(login())
      navigate('/', {
        replace: true
      })
    }
  }

  return (
    <div className=' w-screen min-h-screen bg-[#55D6C2] flex flex-col items-center justify-center'>
      <div className="max-w-[1000px] max-h-[700px] bg-[#EFEDED80] px-[200px] py-[80px] w-full h-full max-md:px-[10%] max-md:py-[10%]">
        <div className="flex flex-col w-full h-full">
          <div className="w-full text-center font-bold font-serif italic text-5xl">
            Helpdesk System
          </div>
          <div className=" mt-[61px] mb-[31px] w-full">
            <input type="text" placeholder='Username' className='p-4 w-full text-3xl' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-[31px] w-full">
            <input type="password" placeholder='Password' className='p-4 w-full text-3xl' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          {
              error &&
              <div className=" bg-red-200 text-red-900 p-4 mb-4 text-center">
                {error}
              </div>
            }

          <div className="mb-[63px] w-full flex justify-center">
            <button className='p-4 w-[60%] text-3xl text-white bg-[#03CC17] rounded-xl' onClick={handleLogin}>
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
