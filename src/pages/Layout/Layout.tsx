import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

export const Layout: React.FC = () => {
  return (
    <div className="max-w-screen min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex w-full h-full">
        <Sidebar />

        <div className="flex flex-col flex-grow">
          <Outlet />
          <footer className='h-12 text-center bg-[#55D6C2] flex justify-center items-center'>
            Footer Area
          </footer>
        </div>
      </div>
    </div>
  )
}
