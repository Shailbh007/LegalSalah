import React from 'react'
import './landing.css'

import { useNavigate } from "react-router-dom";



export default function Landing() {
    let navigate=useNavigate();

const routeChange = () =>{
    let path='/login';

    setTimeout(() => {
        navigate(path);
    },500);

}
  return (
    <>
     <div classNameName="container">
        <div>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LegalSalah</span>
                    </a>
                <div className="flex md:order-2">
                    <button type="button" onClick={routeChange} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                    </div>
                    </div>
            </nav>
        </div> 
        <div>
            <section className="bg-white  dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                <div className="py-8 px-4 mx-auto max-w-screen-xl   text-center lg:py-16 z-10 relative">
                    <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
                    <p className=" landing-text mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
     
                </div>
            </section>
            </div>       
</div>

    </>
  )
}
