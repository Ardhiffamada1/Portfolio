import React from "react"
import {SlSocialLinkedin} from "react-icons/sl";
import {SlSocialInstagram} from "react-icons/sl";
import {SlSocialGithub} from "react-icons/sl";

function Footerend(){
    console.log(new Date().getFullYear());

    return(
        <footer className="h-40">
            <h1 className="pt-10 font-bold text-center text-2xl">Living, Learning, & Leveling</h1>
                <div className="pt-10 flex flex-row justify-center gap-5 pb-10">
                <span className="bg-cyan-200 lg:hover:bg-cyan-300 rounded-full">
                    <a
                    href="https://www.linkedin.com/in/ardhiffa-mada-perdana/" target="_blank">
                    <SlSocialLinkedin size={30} />
                    </a>
                </span>
                <span className="bg-red-200 lg:hover:bg-red-300 rounded-full">
                    <a
                    href="https://www.instagram.com/ardhiffamada/" target="_blank">
                    <SlSocialInstagram size={30} />
                    </a>
                </span>
                <span className="bg-emerald-200 lg:hover:bg-emerald-300  rounded-full">
                    <a href="https://github.com/ardhiffap" target="_blank">
                    <SlSocialGithub size={30} />
                    </a>
                </span>
                </div>
                <h1 className="text-center">Copyright © {new Date().getFullYear()} Ardhiffa Mada Perdana</h1>
        </footer>
    )
}
export default Footerend 