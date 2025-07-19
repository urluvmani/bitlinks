import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-purple-400 flex h-14 text-white  items-center px-5 justify-between'>
        <div className="logo font-bold text-xl md:text-2xl">BitLink</div>
        <div className="flex items-center gap-2">
            <ul className='flex items-center gap-3'>
                <Link href={"/"} className='font-semibold hover:scale-105 hover:cursor-pointer'>Home</Link>
                <Link href={"/about"} className='font-semibold hover:scale-105 hover:cursor-pointer'>About</Link>
                <Link href={"/shorten"} className='font-semibold hover:scale-105 hover:cursor-pointer'>Shorten</Link>
            </ul>
            <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-purple-500 group-hover:from-purple-500 group-hover:to-purple-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<Link href={"/shorten"} className="relative btn font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-purple-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Lets Try
</Link>
</button>
            
        </div>
    </nav>
  )
}

export default Navbar
