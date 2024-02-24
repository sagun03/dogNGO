"use client"
import { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [dropdownState, setDropdownState] = useState({
    about: false,
    service: false,
    dogCare: false
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const handleToggleDropdown = (dropdownName: string) => {
    setDropdownState({
      ...dropdownState,
      [dropdownName]: !dropdownState[dropdownName]
    });
  };

  const handleCloseDropdown = () => {
    setDropdownState({
      about: false,
      service: false,
      dogCare: false
    });
  };
  const isActive = (route: string) => {
    console.log("window", window.location.pathname, route)
    if (typeof window !== 'undefined') {
        return window.location.pathname === route ? 'text-green-100' : 'text-red-200';
      }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50">
    <nav className="container mx-auto flex justify-between items-center py-4">
      <div>
        <div className="text-xl font-bold">Dog NGO</div>
      </div>
      <ul className="hidden md:flex space-x-4">
        <li className="relative group">
          <div className={`cursor-pointer flex items-center ${isActive('/about')}`} onClick={() => handleToggleDropdown('about')}>
            About
            <svg className={`ml-1 h-5 w-5 transform transition-transform duration-300 ${dropdownState.about ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clipRule="evenodd" />
            </svg>
          </div>
          {dropdownState.about && (
            <ul className="absolute w-36 top-full left-0 bg-white text-gray-800 py-2 px-4 rounded shadow-lg divide-y divide-gray-300" onMouseLeave={handleCloseDropdown}>
              <li className="py-1">
                <Link href="/about">
                  <p className="hover:text-gray-700">About Us</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/what-we-do">
                  <p className="hover:text-gray-700">What We Do</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/our-impact">
                  <p className="hover:text-gray-700">Our Impact</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/our-team">
                  <p className="hover:text-gray-700">Our Team</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/join-us">
                  <p className="hover:text-gray-700">Join Us</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/contact-us">
                  <p className="hover:text-gray-700">Contact Us</p>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="relative group">
          <div className="cursor-pointer flex items-center" onClick={() => handleToggleDropdown('service')}>
            Our Service
            <svg className={`ml-1 h-5 w-5 transform transition-transform duration-300 ${dropdownState.service ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clipRule="evenodd" />
            </svg>
          </div>
          {dropdownState.service && (
            <ul className="absolute w-36 top-full left-0 bg-white text-gray-800 py-2 px-4 rounded shadow-lg divide-y divide-gray-300" onMouseLeave={handleCloseDropdown}>
              <li className="py-1">
                <Link href="/dog-medicine">
                  <p className="hover:text-gray-700">Dog Medicine</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/dog-vaccine">
                  <p className="hover:text-gray-700">Dog Vaccine</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/dog-adoption">
                  <p className="hover:text-gray-700">Dog Adoption</p>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="relative group">
          <div className="cursor-pointer flex items-center" onClick={() => handleToggleDropdown('dogCare')}>
            Dog Care
            <svg className={`ml-1 h-5 w-5 transform transition-transform duration-300 ${dropdownState.dogCare ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clipRule="evenodd" />
            </svg>
          </div>
          {dropdownState.dogCare && (
            <ul className="absolute top-full w-48 left-0 bg-white text-gray-800 py-2 px-4 rounded shadow-lg divide-y divide-gray-300" onMouseLeave={handleCloseDropdown}>
              <li className="py-1">
                <Link href="/pet-stray-dog">
                  <p className="hover:text-gray-700">Pet/Stray Dog</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/blind-stray-dog">
                  <p className="hover:text-gray-700">Blind Stray Dog</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/retired-service-dog">
                  <p className="hover:text-gray-700">Retired Service Dog</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/terminally-ill-pet-parent">
                  <p className="hover:text-gray-700">Terminally Ill pet parent</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/cruelty-survivor">
                  <p className="hover:text-gray-700">Cruelty Survivor</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/failed-adoptions">
                  <p className="hover:text-gray-700">Failed Adoptions</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/aggressive-dogs">
                  <p className="hover:text-gray-700">Aggressive Dogs</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/breeder-rescues">
                  <p className="hover:text-gray-700">Breeder Rescues</p>
                </Link>
              </li>
              <li className="py-1">
                <Link href="/special-needs-dogs">
                  <p className="hover:text-gray-700">Special Needs Dogs</p>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/sponsor">
            <p>Sponsor</p>
          </Link>
        </li>
        <li>
          <Link href="/donate">
            <p>Donate</p>
          </Link>
        </li>
      </ul>
      <div className="md:hidden">
          <svg className="w-6 h-6 text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
        {isSidebarOpen && (
          <div className="fixed top-0 left-0 h-full w-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg">
              <ul>
                <li>
                  <Link href="/about">
                    <p className={`text-lg py-2 ${isActive('/about')}`} onClick={() => setIsSidebarOpen(false)}>About</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>)}
    </nav>
  </header>
  )
}

export default Header;
