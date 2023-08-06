import React from 'react';
import EventCard from './EventCard';

interface Event {
    title: string;
    description: string;
    image: string;
    type: 'primary' | 'secondary';
}


interface EventSectionProps {
    upcomingEvents: Event[];
    pastEvents: Event[];
}

export const EventSection: React.FC<EventSectionProps> = ({ upcomingEvents, pastEvents }) => {
    return (
      <div className="min-h-screen p-4 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="container mx-auto px-10 sm:px-6 lg:px-8 overflow-y-auto">
                <h2 className="font-bold text-3xl mb-4 text-white font-integral">Upcoming Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 pb-10">
                    {upcomingEvents.map((event, index) => (
                        <EventCard 
                            key={index}
                            title={event.title} 
                            description={event.description} 
                            image={event.image} 
                            date="2023-07-26" 
                            type={event.type} 
                            showButtons={true}
                        />
                    ))}
                </div>

                <h2 className="font-bold text-3xl mb-4 text-white font-integral pt-10">Past Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {pastEvents.slice(0, 4).map((event, index) => (
                        <EventCard 
                            key={index}
                            title={event.title} 
                            description={event.description} 
                            image={event.image} 
                            date="2023-07-26" 
                            type={event.type} 
                            showButtons={false} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

