import AboutUsSection from '@/components/AboutUsSection';
import { EventSection } from '@/components/EventSection';
import Footer from '@/components/Footer';
import GallerySection from '@/components/GallerySection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TablesSection from '@/components/TablesSection';

export default function Home() {
  type EventType = {
    title: string;
    description: string;
    image: string;
    type: "primary" | "secondary";
  };

  const upcomingEvents: EventType[] = [
    { title: 'Event 1', description: 'Event 1 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
    { title: 'Event 2', description: 'Event 2 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
    { title: 'Event 3', description: 'Event 3 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
    { title: 'Event 4', description: 'Event 4 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
    // Other events...
  ];
  
  const pastEvents: EventType[] = [
    { title: 'Past Event 1', description: 'Past Event 1 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
    { title: 'Past Event 2', description: 'Past Event 2 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
    { title: 'Past Event 3', description: 'Past Event 3 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
    { title: 'Past Event 4', description: 'Past Event 4 Description', image: '/static/images/hero-section-1.png', type: 'primary' },
    // Other events...
  ];
  
  return (
    <>
      <Header />
      <div className=" md:pt-24 lg:pt-12"> {/* This padding top should be equal or more than the height of the Header */}
        <HeroSection />
      </div>
      <EventSection 
        upcomingEvents={upcomingEvents}
        pastEvents={pastEvents}
      />
      <TablesSection />
      <AboutUsSection />
      <GallerySection />
      <Footer />
    </>
  )
}
