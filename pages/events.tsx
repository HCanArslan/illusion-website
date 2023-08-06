import React from 'react';
import Header from '@/components/Header';
import { EventSection } from '@/components/EventSection';
import Footer from '@/components/Footer';


const EventsPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="md:pt-24 lg:pt-20 bg-[url('../public/static/images/events-bg-img.png')] bg-cover bg-center" >
                <EventSection upcomingEvents={[{ title: 'Event 1', description: 'Event 1 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
                { title: 'Event 2', description: 'Event 2 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
                { title: 'Event 3', description: 'Event 3 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
                { title: 'Event 4', description: 'Event 4 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
                { title: 'Event 5', description: 'Event 5 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
                { title: 'Event 6', description: 'Event 6 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
                { title: 'Event 7', description: 'Event 7 Description', image: '/static/images/hero-section-1.png', type: 'primary' },]} pastEvents={[{ title: 'Past Event 1', description: 'Past Event 1 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
                { title: 'Past Event 2', description: 'Past Event 2 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
                { title: 'Past Event 3', description: 'Past Event 3 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
                { title: 'Past Event 4', description: 'Past Event 4 Description', image: '/static/images/hero-section-1.png', type: 'primary' },]} />

            </div>
            <Footer />
        </>
    );
};

export default EventsPage;
