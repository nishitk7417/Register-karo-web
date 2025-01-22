import React from 'react';

function Contact() {
  return (
    <div>
        <div className="bg-gradient-to-r from-[#ffa229] to-[#1c4670] text-white py-16">
            <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 md:px-8">
                <p className="uppercase text-sm font-semibold">1% of the Industry</p>
                <h1 className="text-3xl sm:text-4xl font-bold mt-2">Welcome to your new digital reality. Now.</h1>
                <div className="mt-6">
                    <form className="flex flex-col sm:flex-row justify-center">
                        <input 
                            type="email" 
                            placeholder="Enter Your Email" 
                            className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-800 mb-4 sm:mb-0"
                        />
                        <button 
                            type="submit" 
                            className="bg-[#ffa229] px-6 py-2 h-[2.5rem] rounded-r-lg text-white hover:bg-orange-600 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <div className="flex items-center gap-2">
                        <span className="bg-white py-1 px-[5px] rounded-full">
                        <svg className="w-[.6rem] fill-[#1c4670]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                        </svg>
                        </span>
                        <span>Instant results</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="bg-white py-1 px-[5px] rounded-full">
                        <svg className="w-[.6rem] fill-[#1c4670]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                        </svg>
                        </span>
                        <span>User-friendly interface</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="bg-white py-1 px-[5px] rounded-full">
                        <svg className="w-[.6rem] fill-[#1c4670]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                        </svg>
                        </span>
                        <span>Personalized customization</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white py-12">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-10 lg:gap-12">
                <img className="w-20 sm:w-24 md:w-28 lg:w-32" src='/Assets/Coinbase.png' alt="Coinbase"/>
                <img className="w-20 sm:w-24 md:w-28 lg:w-32" src='/Assets/Spotify.png' alt="Spotify"/>
                <img className="w-20 sm:w-24 md:w-28 lg:w-32" src='/Assets/Dropbox.png' alt="Dropbox"/>
                <img className="w-20 sm:w-24 md:w-28 lg:w-32" src='/Assets/Spotify.png' alt="Spotify"/>
                <img className="w-20 sm:w-24 md:w-28 lg:w-32" src='/Assets/Slack.png' alt="Slack"/>
                <img className="w-20 sm:w-24 md:w-28 lg:w-32" src='/Assets/Zoom.png' alt="Zoom"/>
            </div>
        </div>
    </div>
  );
}

export default Contact;
