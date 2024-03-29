import React from "react"
import port1 from '../assets/img/portfolio/port_1.jpeg'
import port2 from '../assets/img/portfolio/port_2.jpeg'
import port3 from '../assets/img/portfolio/port_3.png'
import port4 from '../assets/img/portfolio/port3.jpeg'
import Logo1 from '../assets/img/logo/tailwind.svg'
import Logo2 from '../assets/img/logo/react.svg'
import Logo3 from '../assets/img/logo/github.svg'
import Logo4 from '../assets/img/logo/bootstrap.svg'
import Logo5 from '../assets/img/logo/js.svg'
import image from '../assets/img/bg/pattern.svg'


function Projects(){
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    
    return(
        <div id="Project" 
        data-aos="fade-up"
        data-aos-duration="1000"
        className="p-10 lg:p-32"
          > 
            <h1 className="text-5xl font-bold underline underline-offset-8 decoration-indigo-400">Projects</h1>
            <div className="container grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-5 p-5 lg:pt-10">
                <div className="card mx-2
                bg-neutral-50 border-2 border-r-8 border-blue-200 shadow-xl rounded-3xl h-auto
                ">
                    <h1 className="pt-10 text-3xl lg:text-4xl text-center font-bold">Urfolk Store</h1>
                    <img src={port1}className='pt-10 w-42 relative w-full' classalt="" />
                    <br />
                    <div className="flex justify-center gap-4">
                        <img src={Logo1} className='w-8 h-8' alt="" />
                        <img src={Logo2} className='w-8 h-8' alt="" />
                    </div>
                    <p className="pt-5 pb-5 ml-5 text-sm">
                        This project is my latest project and currently reworking , 
                        create a ecommerce website with React JS and Tailwind as a library and framework.
                    </p>
                    <div className="pb-5 flex flex-row justify-center gap-4">
                    <button onClick={() => openInNewTab('https://vocal-quokka-f926dc.netlify.app/')} className= "outline outline-2 p-1 hover:bg-indigo-300">Preview</button>
                    <button onClick={() => openInNewTab('https://google.com')} className="outline outline-2 outline-yellow-800 hover:bg-indigo-300 p-2">Source</button>
                    </div>
                </div>
                <div className="card mx-2
                bg-neutral-50 border-2 border-r-8 border-blue-200 shadow-xl rounded-3xl h-auto
                ">
                    <h1 className="pt-10 text-3xl lg:text-4xl text-center font-bold">Kickzout</h1>
                    <img src={port4}className='pt-10 w-42 relative w-screen' classalt="" />
                    <br />
                    <div className="flex justify-center gap-4">
                        <img src={Logo1} className='w-8 h-8' alt="" />
                        <img src={Logo2} className='w-8 h-8' alt="" />
                    </div>
                    <p className="pt-5 pb-5 ml-5 text-sm">
                        This project is my project and currently developing , 
                        create a ecommerce website with Next JS and Tailwind also Local Api to fetch data.
                    </p>
                    <div className="pb-5 flex flex-row justify-center gap-4">
                    <button onClick={() => openInNewTab('https://vocal-quokka-f926dc.netlify.app/')} className= "outline outline-2 p-1 hover:bg-indigo-300">Preview</button>
                    <button onClick={() => openInNewTab('https://google.com')} className="outline outline-2 outline-yellow-800 hover:bg-indigo-300 p-2">Source</button>
                    </div>
                </div>
                <div className="card
                bg-neutral-50 border-2 border-r-8 border-blue-200 shadow-xl rounded-3xl xl:h-auto">
                    <h1 className="pt-10 text-2xl lg:text-4xl text-center font-bold">Bookshelf Apps Dicoding</h1>
                    <img src={port2} className='pt-10 w-42 relative w-full
                    ' alt="" />
                    <br />
                    <div className="flex justify-center gap-4">
                        <img src={Logo5} className='w-8 h-8' alt="" />
                        <img src={Logo3} className='w-8 h-8' alt="" />
                    </div>
                    <p className="pt-5 pb-5 ml-5 text-sm">This was my first project when i got a scholarship at Dicoding.
                    This project is required for final submission to achieve a certificate
                    and this project we must implement CRUD with local storage 
                    </p>
                    <div className="pb-5 flex flex-row justify-center gap-4">
                    <button onClick={() => openInNewTab('https://bookshelfdicoding.netlify.app')} className= "outline outline-2 p-1 hover:bg-indigo-300">Preview</button>
                    <button onClick={() => openInNewTab('https://github.com/ardhiffap/Bookshelf-Apps-Dicoding')} className="outline outline-2 outline-yellow-800 hover:bg-indigo-300 p-2">Source</button>
                    </div>
                </div>  
                <div className="card
                bg-neutral-50 border-2 border-r-8 border-blue-200 shadow-xl rounded-3xl h-auto">
                    <h1 className="pt-10 text-2xl lg:text-4xl text-center font-bold">SMARTASPOO Market</h1>
                    <img src={port3} className='pt-10 a relative w-screen
                    ' alt="" />
                    <br />
                    <div className="flex justify-center gap-4">
                        <img src={Logo5} className='w-8 h-8' alt="" />
                        <img src={Logo3} className='w-8 h-8' alt="" />
                    </div>
                    <p className="pt-5 pb-5 ml-5 text-sm">This is final project for required internship in Center Of Excellence
                    this project called Smartaspoo Market 
                    </p>
                    <div className="pb-5 flex flex-row justify-center gap-4">
                    <button onClick={() => openInNewTab('#')} className= "outline outline-2 p-1 hover:bg-indigo-300">Preview</button>
                    <button onClick={() => openInNewTab('https://github.com/smartaspoo/smartaspoo-frontend')} className="outline outline-2 outline-yellow-800 hover:bg-indigo-300 p-2">Source</button>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Projects