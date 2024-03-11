"use client"
import { useEffect } from 'react';
import styles from './home.module.css';
import FAQSection from './Components/Faq';
import GetInTouch from './Components/GetInTouch';
import Hero from './Components/Hero';

const ParallaxLandingPage = () => {
  const handleScroll = () => {
    const sections = document.querySelectorAll(`.section`);
    sections.forEach(section => {
      const scrollPosition = window.pageYOffset;
      const sectionOffset = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionTop = sectionOffset - scrollPosition;
      const bgPosition = (sectionTop / sectionHeight) * 90;
      section.style.backgroundPositionY = `${bgPosition}%`;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
    
      <Hero />
      <div className={`section dogCareBackground bg-auto  bg-center p-10 sm:p-20`} style={{ backgroundImage: "url('/dog-care-background.jpg')", height: '700px' }}>
        <div className="sm:w-3/12">
          <h2 className="text-2xl font-extrabold bg-blue-900 bg-opacity-60 px-4 py-2 rounded-md">Compassionate Care</h2>
          <p className="text-sm sm:text-base bg-black bg-opacity-40 px-4 py-2 m-2 rounded-md">At Paws of Love, we provide compassionate care to every dog we rescue. From veterinary treatment to fostering, we ensure that every dog receives the love and attention they deserve.</p>
        </div>
      </div>

      <div className={`section volunteerBackground  bg-auto  bg-center p-10 sm:p-20`} style={{ backgroundImage: "url('/volunteer-background.jpg')", height: '700px'  }}>
        <div className="sm:w-3/12">
          <h2 className="text-2xl font-extrabold bg-blue-900 bg-opacity-60 px-4 py-2 rounded-md">Dedicated Volunteers</h2>
          <p className="text-sm sm:text-base bg-black bg-opacity-40 px-4 m-2 py-2 rounded-md">Our dedicated volunteers are the heart of our organization. They tirelessly work to feed, shelter, and provide medical care to stray dogs. Join our volunteer team today and make a difference in the lives of dogs.</p>
        </div>
      </div>

      <div className={`section shelterBackground  bg-auto  bg-center p-10 sm:p-20`} style={{ backgroundImage: "url('/11.jpg')", height: '700px'  }}>
        <div className="sm:w-3/12">
          <h2 className="text-2xl font-extrabold bg-blue-900 bg-opacity-60 px-4 py-2 rounded-md">Safe Shelter</h2>
          <p className="text-sm sm:text-base bg-black bg-opacity-40 px-4 m-2 py-2 rounded-md">We believe every dog deserves a safe and loving shelter. Our shelters provide a temporary home for stray and abandoned dogs until they find their forever families. Help us provide shelter to more dogs by donating today.</p>
        </div>
      </div>

      <div className={`section foodBackground  bg-auto  bg-center p-10 sm:p-20`} style={{ backgroundImage: "url('/food.jpeg')", height: '700px'  }}>
        <div className="sm:w-3/12">
          <h2 className="text-2xl font-extrabold bg-blue-900 bg-opacity-60 px-4 py-2 rounded-md">Nutritious Food</h2>
          <p className="text-sm sm:text-base bg-black bg-opacity-40 px-4 m-2 py-2 rounded-md">Proper nutrition is essential for the health and well-being of dogs. We ensure that every dog in our care receives nutritious food to keep them healthy and strong. Your donations help us provide food to dogs in need.</p>
        </div>
      </div>

      <div className={`section waterBackground  bg-auto  bg-center p-10 sm:p-20`} style={{ backgroundImage: "url('/water-background.jpg')", height: '700px'  }}>
        <div className="sm:w-3/12">
          <h2 className="text-2xl font-extrabold bg-blue-900 bg-opacity-60 px-4 py-2 rounded-md">Clean Water</h2>
          <p className="text-sm sm:text-base bg-black bg-opacity-40 px-4 m-2 py-2 rounded-md">Access to clean drinking water is vital for the survival of stray dogs. We install water stations in communities to ensure that stray dogs have access to clean water. Your support enables us to continue this life-saving initiative.</p>
        </div>
      </div>

      <div className="section faqBackground bg-center">
        <FAQSection />
      </div>

      <div className="section">
        <GetInTouch />
      </div>
    </div>
  );
}

export default ParallaxLandingPage;
