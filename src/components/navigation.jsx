import React from "react"

function Navbar() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return(
        <nav className="sticky top-0 z-50 backdrop-blur-sm flex flex-row justify-between lg:backdrop-blur-none lg:relative lg:flex lg:flex-wrap m-8 antialiased"> 
         <div className="brand mx-4 font-bold text-2xl underline underline-offset-4 lg:border-2 lg:border-black lg:hover:bg-indigo-300 hover:text-black md:border-t-4">
            <a href="/">&nbsp;&nbsp;Ardhiffa <span className="text-black">•</span></a>
          </div>
            <ul className="lg:flex gap-8 font-bold text-black uppercase antialiased">
                
                <li className="relative before:content-[''] 
                before:absolute 
                before:block 
                before:w-full 
                before:h-[3px] 
                before:bottom-0 before:left-0 before:bg-indigo-400
                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                before:transition before:ease-in-out before:duration-300">
                    <a href="#About">About</a>
                </li>
                <li className="relative before:content-[''] 
                before:absolute 
                before:block 
                before:w-full 
                before:h-[3px] 
                before:bottom-0 before:left-0 before:bg-indigo-400
                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                before:transition before:ease-in-out before:duration-300">
                    <a href="#Project" >Projects</a>
                </li>
                <li className="
                relative before:content-[''] 
                before:absolute 
                before:block 
                before:w-full 
                before:h-[3px] 
                before:bottom-0 before:left-0 before:bg-indigo-400
                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                before:transition before:ease-in-out before:duration-300">
                    <a href="#Contact">Contact me</a>
                </li>
                <li className="hidden md:block hover:text-black border-2 border-black hover:underline underline-offset-8  ease-in-out duration-300 hover:bg-indigo-300">
                    <a href="https://drive.google.com/file/d/1cB6k9qqqcNrXuga4e990MlgT5aycx70h/view?usp=sharing" target="_blank">Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar