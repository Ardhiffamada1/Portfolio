import React from "react"
import image from '../assets/img/3D_A.png'
import animatted from '../assets/img/rocket.gif/'
import 'aos/dist/aos.css';

function Headers(){
    return(
        <>
        <article className="container">
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="p-12 lg:p-24">
            <h1 className="text-3xl lg:text-5xl flex-auto font-bold underline underline-offset-8 decoration-indigo-400">What i do</h1>
            </div>
            <div
            className="flex flex-col lg:flex lg:flex-row ml-10 lg:mx-32">
                <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
                className="children">
                    <p className="text-md">I enjoy creating websites and applications ,</p>
                    <p className="text-md">and interactive website for business or applications.</p>
                    <div className="flex flex-wrap gap-4 pt-4 ">
                        <span className="text-2xl lg:text-5xl font-bold">Creative.</span>
                        <span className="text-2xl lg:text-5xl font-bold">Inovative.</span>
                        <span className="text-2xl lg:text-5xl pb-2 font-bold">Communicative.</span>
                    </div>
                </div>
                    <div 
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-delay="100"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                        className="relative
                         bg-indigo-200 rounded-full 
                         lg:flex-auto lg:block w-full lg:w-auto" >
                        <img src={animatted} alt="Me" />
                    </div>
            </div>
            </article>
        </>
    )
}


export default Headers