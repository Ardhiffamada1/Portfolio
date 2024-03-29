import React from "react"
import {BiChevronsDown} from 'react-icons/bi'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Logo from '../assets/img/logo/Logo.png'


function HeroSection(){

    const Title = styled.h1`
    font-size: 3em;
    flex-wrap: wrap;
    font-weight: bold;
    color: black;
    `;

    return(
        <>
        <header className="hero flex flex-col lg:flex-auto p-12 lg:p-32 ">
        <div className="container "
         >
            <Title>
            <Typewriter
            options={{
            autoStart: true,
            loop:true }}
            onInit={(typewriter) => {
                    typewriter.typeString('Hello !')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Hai !')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Bonjour !')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Olá !')
                    .start();
                }}
                />
                </Title>
            <h1 className="pt-1 text-5xl font-bold">I'm <span className="underline underline-offset-8 decoration-dotted decoration-indigo-400">Ardhiffa Perdana</span></h1>
            <p className="pt-4 text-base text-left">A passionate Front-end React also half Full-stack Developer </p>
            <p className="text-base text-left ">Based in Indonesia.</p>
            <div className="pt-10 pb-10">
            <button className="bg-transparent flex outline outline-offset-2 outline-2 px-2 py-1 rounded-3xl animate-bounce text-black
            lg:hover:bg-indigo-200">See my works<BiChevronsDown/></button>
            </div>
            </div>
       </header>
        </>
    )
}

export default HeroSection