import React from "react"
import {CiMail} from "react-icons/ci";
import {SlHome} from "react-icons/sl";
import Linkedin from "../assets/img/logo/socmed/Linkedin.svg";
import Instagram from "../assets/img/logo/socmed/Instagram.svg";
import Github from "../assets/img/logo/socmed/github.png";
import bg from '../assets/img/3D_A.png'


function Contact (){
    return(
        <section id="Contact" className="p-10 lg:p-32 bg-teal-500">
            <div className="container flex flex-col py-10">
                <div className="card bg-white border-r-8 border-teal-200 
                hover:shadow-xl rounded-3xl lg:rounded-3xl lg:h-screen">
                    <img src={bg} className="hidden lg:mr-12 pt-16 lg:block lg:float-right" alt="" />
                    <h1 className="text-2xl pt-10 ml-10 lg:ml-32 underline decoration-indigo-300">Get in touch</h1>
                    <h1 className="pt-10 ml-10 lg:ml-24 text-3xl lg:text-7xl text-left font-bold">
                    Let’s Work <br />
                    Together.
                    </h1>
                    <p className="hidden pt-5 ml-8 lg:ml-24 lg:block text-md text-slate-500">
                    I’d love to meet up with you to discuss <br /> 
                    your venture, and potential <br />
                    collaborations.
                    </p>
                    <div className="pt-10 ml-10 lg:ml-24">
                    <span className="flex gap-2 text-sm text-black">
                    <CiMail size={20}/>
                    <p>ardhiffaperdana@gmail.com</p>
                    </span>
                    <span className="flex pt-4 gap-2 text-sm text-black">
                    <SlHome size={20}/> 
                    <p>Indonesia</p>
                    </span>
                    <div className="pt-5 flex flex-row pb-10">
                        <span className="hover:bg-zinc-200 rounded-full w-20 h-20">
                            <a href="https://www.linkedin.com/in/ardhiffa-mada-perdana/" target="_blank">
                                <img src={Linkedin} className='m-2 w-16 h-16' alt="" /></a>
                        </span>
                        <span className="hover:bg-zinc-200 rounded-full w-20 h-20">
                            <a href="https://instagram.com/ardhiffamada/" target="_blank">
                                <img src={Instagram} className='m-2 w-16 h-16' alt="" /></a>
                        </span>
                    </div>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default Contact