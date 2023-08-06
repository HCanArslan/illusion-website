import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black bg-opacity-95  text-white px-4 sm:px-6 lg:px-10 py-6 sm:py-10 lg:py-20">
            <div className="flex flex-col sm:flex-row flex-wrap items-start justify-center sm:justify-around">
                <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 mb-6 lg:pr-10">
                    <img src="/static/logo/illusion-logo.png" alt="Logo" className="w-48 h-24 mb-4 mx-auto sm:mx-0"/>
                    <p className="text-xs font-light">Location:<br/> Kızlarpınarı, Atatürk Blv. No:27, 07400 Alanya/Antalya, Turkey</p>
                </div>
                <div className="w-1/2 sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/5 mb-6">
                    <h3 className="text-sm mb-4 font-light mt-4">ILLUSION EVENT HALL</h3>
                    <ul>
                        <li className="text-xs mb-2 font-integral"><a href="/about">ABOUT US</a></li>
                        <li className="text-xs mb-2 font-integral"><a href="/business">BUSINESS</a></li>
                        <li className="text-xs mb-2 font-integral"><a href="/contact">CONTACT US</a></li>
                    </ul>
                </div>
                <div className="w-1/2 sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/5 mb-6">
                    <h3 className="text-sm font-light mb-4 mt-4">OTHERS</h3>
                    <ul>
                        <li className="text-xs mb-2 font-integral"><a href="/gallery">GALLERY</a></li>
                        <li className="text-xs mb-2 font-integral"><a href="/faqs">FAQ'S</a></li>
                        <li className="text-xs mb-2 font-integral"><a href="/policy">POLICY</a></li>
                    </ul>
                </div>
                <div className="w-1/2 sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/5 mb-6">
                    <h3 className="text-sm font-light mb-4 mt-4">PRODUCTS</h3>
                    <ul>
                        <li className="text-xs mb-2 font-integral"><a href="/palmbeach">ıLLUSION PALM BEACH</a></li>
                        <li className="text-xs mb-2 font-integral"><a href="/elalem">ELALEM</a></li>
                        <li className="text-xs mb-2 font-integral"><a href="/assa">ASSA EVENT</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-10 md:mt-20">
                <p className="text-xs font-light mb-4 sm:mb-0">© ILLUSION EVENT HALL 2023</p>
                <div className="flex items-center">
                    <p className="text-xs mr-2 font-light">SOCIALS:</p>
                    <div className="flex space-x-2">
                        <a href="https://www.instagram.com/your_username"><img src="/static/icons/insta.svg" alt="Instagram icon" className="w-7 h-7"/></a>
                        <a href="https://www.youtube.com/channel/your_channel_id"><img src="/static/icons/youtube.svg" alt="YouTube icon" className="w-7 h-7"/></a>
                        <a href="https://www.tiktok.com/@your_username"><img src="/static/icons/tiktok.svg" alt="TikTok icon" className="w-7 h-7"/></a>
                        <a href="https://open.spotify.com/user/your_username"><img src="/static/icons/spotify.svg" alt="Spotify icon" className="w-7 h-7"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
