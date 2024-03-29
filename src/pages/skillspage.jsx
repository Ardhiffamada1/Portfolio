import React from 'react'
import Logo1 from '../assets/img/logo/tailwind.svg'
import Logo2 from '../assets/img/logo/react.svg'
import Logo3 from '../assets/img/logo/github.svg'
import Logo4 from '../assets/img/logo/bootstrap.svg'
import Logo5 from '../assets/img/logo/Netlify.svg'
import Logo6 from '../assets/img/logo/NodeJs.svg'

function Skill (){
    return(
        <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
            <div 
            className="container p-10 lg:p-28">
            <h1 className="text-5xl font-bold underline underline-offset-8 decoration-indigo-400">Skills</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center mx-5 w-full">
            <div className="mx-auto">
                <div className="relative p-6">
                <img src={Logo1} className='mx-auto transition duration-300 ease-in-out hover:scale-125 w-20 h-20'  alt="" />
                </div>
            </div>
            <div className="mx-auto">
                <div className="relative p-6">
                <img src={Logo2} className='mx-auto transition duration-300 ease-in-out hover:scale-125 w-20 h-20' alt="" />
                </div>
            </div>
            <div className="mx-auto">
                <div className="relative p-6">
                <img src={Logo3} className='mx-auto transition duration-300 ease-in-out hover:scale-125 w-20 h-20' alt="" />
                </div>
            </div>
            <div className="mx-auto">
                <div className="relative p-6">
                <img src={Logo4} className='mx-auto transition duration-300 ease-in-out hover:scale-125 w-20 h-20' alt="" />
                </div>
            </div>
            <div className="mx-auto">
                <div className="relative p-6">
                <img src={Logo5} className='mx-auto transition duration-300 ease-in-out hover:scale-125 w-28 h-28' alt="" />
                </div>
            </div>
            <div className="mx-auto">
                <div className="relative p-6">
                <img src={Logo6} className='mx-auto transition duration-300 ease-in-out hover:scale-125 w-28 h-28' alt="" />
                </div>
            </div>
            </div>
        </section>
    )
}

export default Skill