import React from 'react';
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center flex-col  ">
    <nav className="flex justify-between items-center w-full mb-10 pt-9">
      <img src={logo} alt="sumz_logo" 
      className= "w-28 object-contain" />

      <button 
      type="button"
      onClick={() => window.open ('https://github.com/1G2R3M/Summarize_Easy_with-AI')}
      className="black_btn">Github</button>
    </nav>

    <h1 className="head_text">
      Summarize your Article with <br />
      <span
      className="orange_gradient">OpenAI GPT-4</span>
    </h1>
    <h2 className="desc">
    A simple web app to summarize any article in clear & concise way just one click
    </h2>



    </header>
  )
}

export default Hero;