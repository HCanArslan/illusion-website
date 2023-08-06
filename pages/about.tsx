import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutUsHero from '@/components/AboutUsHero';
import AboutUsSecond from '@/components/AboutUsSecond';


const AboutPage: React.FC = () => {
    return (
        <div className="bg-[url('../public/static/images/about-image-2.png')] bg-cover bg-center">
        <Header />
        <AboutUsHero />
        <AboutUsSecond />
        <Footer />
        </div>
    );
};

export default AboutPage;
