import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { asPath } = useRouter();

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/events', label: 'EVENTS' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/contact', label: 'CONTACT' },
    { href: '/palm-beach', label: 'PALM BEACH' },
    { href: '/elalem', label: 'ELALEM' },
    { href: '/assa', label: 'ASSA' },
  ];

  return (
    <header className="fixed w-full z-50 bg-black text-white flex flex-wrap items-center justify-between p-3 md:p-5 lg:p-1">
      <img className="h-12 w-auto md:h-16 lg:h-20" src="/logo.png" alt="Logo" />

      <button
        className="p-2 md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger icon */}
        <svg className={`${isOpen ? 'hidden' : 'block'} w-6 h-6 md:w-8 md:h-8 fill-current`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>

        {/* Close icon */}
        <svg className={`${isOpen ? 'block' : 'hidden'} w-6 h-6 md:w-8 md:h-8 fill-current`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Close</title>
          <path d="M10 8.586l4.293-4.293 1.414 1.414L11.414 10l4.293 4.293-1.414 1.414L10 11.414l-4.293 4.293-1.414-1.414L8.586 10 4.293 5.707l1.414-1.414L10 8.586z" />
        </svg>
      </button>

      <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute flex flex-col bg-black text-white w-full h-full md:static md:h-auto md:flex-row md:w-auto md:bg-transparent md:p-0 mt-16 md:mt-0 z-40 p-3 md:p-0`}>
        {links.map(({ href, label }) => (
          <Link key={`${href}-${label}`} href={href} passHref>
            <div className={`block py-1 px-2 md:px-3 hover:text-red-500 md:py-2 md:px-4 cursor-pointer ${asPath === href ? 'text-red-500' : ''}`}>{label}</div>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
