import React from "react"
import Character from '../assets/img/3D_C.png'
import {MdLibraryBooks} from "react-icons/md";

const Aboutme = () => {
    return(
        <>
        <main id="About" className="pt-10">
        <div 
        data-aos='flip-left'
        className="m-10 lg:p-28">
            <h1 className="text-5xl flex-auto font-bold underline underline-offset-8 decoration-indigo-400">About me</h1>
            </div>
        <div className="flex flex-col lg:flex lg:flex-row mx-12 lg:ml-40">
            <div 
                data-aos='zoom-out'
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="children tracking-wide">
               <h3 className="text-xl">Hi there's my name is <span className="font-bold underline underline-offset-4 decoration-3 decoration-indigo-400">Ardhiffa Mada Perdana </span></h3>
               <p className="text-xl">And i am a final year Computer Science student at Dian Nuswantoro University, 
               I describe myself as a passionate developer who loves coding and develop the web platform.</p>
               <button className="pt-4">
                        <a href="" className="px-2 py-1 flex items-center gap-2 border-2
                         border-slate-800 rounded-xl 
                         text-md hover:bg-teal-200">Resume <MdLibraryBooks /></a>
                </button>
            </div>
            <div 
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="relative lg:block ">
                <img src={Character} className='float-right' alt="Character By IO" />
            </div>
        </div>
        </main>
        </>
    )
}

export default Aboutme