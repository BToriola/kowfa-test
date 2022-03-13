import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';


export default function NavBar() {
    let [open, setOpen] = useState(false);
    return (
        <div className='w-full bg-green-200 px-16  '>
            <div className='md:flex items-center  justify-between bg-green-200 py-2.5 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <Link href='/'>
                        <Image src={require('../../assets/xchangelogo.png')} alt="logo" width={154} height={57} />
                    </Link>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" name={open ? 'close' : 'menu'} stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    <li className='md:ml-8 p-[-25px] text-xl md:my-0 my-7'>
                        <a href={'/'} className='text-gray-800 hover:text-gray-400 duration-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 60 60" >
                                <path class="b" d="M20,37.875a3.51,3.51,0,0,0,3.5-3.5h-7A3.51,3.51,0,0,0,20,37.875Zm10.5-10.5v-8.75c0-5.372-2.853-9.87-7.875-11.06V6.375a2.625,2.625,0,0,0-5.25,0v1.19C12.37,8.755,9.5,13.235,9.5,18.625v8.75L6,30.875v1.75H34v-1.75ZM27,29.125H13v-10.5c0-4.34,2.642-7.875,7-7.875s7,3.535,7,7.875Z" transform="translate(10 9.25)" />
                            </svg>
                        </a>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href={'/'} className='text-gray-800 hover:text-gray-400 duration-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35">
                                <path class="a" d="M13.508,4.116H4.758v8.75h8.75ZM15.7,1.928V15.053H2.571V1.928ZM6.946,6.3h4.375v4.375H6.946ZM35.383,4.116h-8.75v8.75h8.75V4.116Zm2.187-2.187V15.053H24.446V1.928H37.571ZM28.821,6.3H33.2v4.375H28.821ZM13.508,25.991H4.758v8.75h8.75ZM15.7,23.8V36.928H2.571V23.8Zm-8.75,4.375h4.375v4.375H6.946ZM17.883,1.928h2.188V4.116H17.883Zm2.188,2.187h2.187V6.3H20.071ZM17.883,6.3h2.188V8.491H17.883Zm2.188,2.187h2.187v2.188H20.071Zm-2.187,2.188h2.188v2.188H17.883Zm2.188,2.188h2.187v2.187H20.071Zm-2.187,2.187h2.188v2.188H17.883Zm0,4.375h2.188v2.188H17.883Zm2.188,2.188h2.187V23.8H20.071ZM17.883,23.8h2.188v2.188H17.883Zm2.188,2.188h2.187v2.188H20.071Zm-2.187,2.188h2.188v2.188H17.883Zm2.188,2.188h2.187v2.187H20.071Zm-2.187,2.187h2.188v2.188H17.883Zm2.188,2.188h2.187v2.188H20.071ZM35.383,19.428h2.187v2.188H35.383Zm-30.625,0H6.946v2.188H4.758Zm2.188-2.187H9.133v2.187H6.946Zm-4.375,0H4.758v2.187H2.571Zm8.75,0h2.188v2.187H11.321Zm2.188,2.187H15.7v2.188H13.508ZM15.7,17.241h2.188v2.187H15.7Zm6.562,2.187h2.188v2.188H22.258Zm2.188-2.187h2.188v2.187H24.446Zm2.188,2.187h2.187v2.188H26.633Zm2.187-2.187h2.188v2.187H28.821Zm2.188,2.187H33.2v2.188H31.008ZM33.2,17.241h2.188v2.187H33.2ZM35.383,23.8h2.188v2.188H35.383Zm-13.125,0h2.188v2.188H22.258Zm2.188-2.187h2.187V23.8H24.446ZM26.633,23.8h2.187v2.188H26.633Zm4.375,0H33.2v2.188H31.008ZM33.2,21.616h2.188V23.8H33.2Zm2.188,6.563h2.188v2.188H35.383Zm-13.125,0h2.187v2.188H22.258Zm2.187-2.187h2.188v2.188H24.446Zm4.375,0h2.188v2.188H28.821Zm2.188,2.188H33.2v2.188H31.008ZM33.2,25.991h2.188v2.188H33.2Zm2.188,6.563h2.187v2.188H35.383ZM24.446,30.366h2.188v2.188H24.446Zm2.188,2.188h2.188v2.188H26.633Zm2.188-2.187h2.188v2.188H28.821Zm2.188,2.188H33.2v2.188H31.008Zm-6.562,2.188h2.188v2.188H24.446Zm4.375,0h2.188v2.188H28.821Zm4.375,0h2.188v2.188H33.2Z" transform="translate(-2.571 -1.928)" />
                            </svg>
                        </a>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href={'/'} className='text-gray-800 hover:text-gray-400 duration-500'>
                        {/* <p className='text-secondary text-xl font-bold pt-4 pl-2'>{userName || ''}</p> */}
                        </a>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href={'/profile'} className='text-gray-800 hover:text-gray-400 duration-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="#044566">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
