"use client"
import { useEffect } from 'react';
// import React from 'react';
// import Image from 'next/image';
import styles from './home.module.css'; // Import CSS styles

// const ParallaxLandingPage: React.FC = () => {
//   return (
//     <div>
//     {/* Hero Section */}
//     <div className={`${styles.heroSection}`}>
//       <div className={`${styles.heroContent}`}>
//         <h1>Welcome to Paws of Love</h1>
//         <p>Our mission is to provide love, care, and support to every stray and abandoned dog in need.</p>
//         <button className={`${styles.ctaButton}`}>Adopt Now</button>
//       </div>
//     </div>

//     {/* Dog Care Section */}
//     <div className={`${styles.section} ${styles.dogCareBackground}`}>
//       <div className={`${styles.sectionContent}`}>
//         <h2>Compassionate Care</h2>
//         <p>At Paws of Love, we provide compassionate care to every dog we rescue. From veterinary treatment to fostering, we ensure that every dog receives the love and attention they deserve.</p>
//       </div>
//     </div>

//     {/* Volunteer Section */}
//     <div className={`${styles.section} ${styles.volunteerBackground}`}>
//       <div className={`${styles.sectionContent}`}>
//         <h2>Dedicated Volunteers</h2>
//         <p>Our dedicated volunteers are the heart of our organization. They tirelessly work to feed, shelter, and provide medical care to stray dogs. Join our volunteer team today and make a difference in the lives of dogs.</p>
//       </div>
//     </div>

//     {/* Shelter Section */}
//     <div className={`${styles.section} ${styles.shelterBackground}`}>
//       <div className={`${styles.sectionContent}`}>
//         <h2>Safe Shelter</h2>
//         <p>We believe every dog deserves a safe and loving shelter. Our shelters provide a temporary home for stray and abandoned dogs until they find their forever families. Help us provide shelter to more dogs by donating today.</p>
//       </div>
//     </div>

//     {/* Food Section */}
//     <div className={`${styles.section} ${styles.foodBackground}`}>
//       <div className={`${styles.sectionContent}`}>
//         <h2>Nutritious Food</h2>
//         <p>Proper nutrition is essential for the health and well-being of dogs. We ensure that every dog in our care receives nutritious food to keep them healthy and strong. Your donations help us provide food to dogs in need.</p>
//       </div>
//     </div>

//     {/* Water Section */}
//     <div className={`${styles.section} ${styles.waterBackground}`}>
//       <div className={`${styles.sectionContent}`}>
//         <h2>Clean Water</h2>
//         <p>Access to clean drinking water is vital for the survival of stray dogs. We install water stations in communities to ensure that stray dogs have access to clean water. Your support enables us to continue this life-saving initiative.</p>
//       </div>
//     </div>

//     {/* FAQ Section */}
//     <div className={`${styles.section}`}>
//       <div className={`${styles.sectionContent}`}>
//         <h2>Frequently Asked Questions</h2>
//         <p>Have questions about our organization and our work? Check out our FAQ section to find answers to commonly asked questions. If you don't find what you're looking for, feel free to contact us.</p>
//       </div>
//     </div>

//     {/* Contact Section */}
//     <div className={`${styles.section}`}>
//       <div className={`${styles.sectionContent}`}>
//         <h2>Get in Touch</h2>
//         <p>Have questions or want to get involved? We'd love to hear from you! Contact us via phone, email, or through our social media channels. Together, we can make a difference in the lives of dogs.</p>
//       </div>
//     </div>
//   </div>
//   );
// }

// export default ParallaxLandingPage;
// import styles from './ParallaxLandingPage.module.css';
import Image from 'next/image';

const ParallaxLandingPage = () => {
  // Function to handle scroll event and update background positions
  const handleScroll = () => {
    const sections = document.querySelectorAll(`.${styles.section}`);
    sections.forEach(section => {
      const scrollPosition = window.pageYOffset;
      const sectionOffset = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionTop = sectionOffset - scrollPosition;
      const bgPosition = (sectionTop / sectionHeight) * 50; // Adjust parallax speed here
      section.style.backgroundPositionY = `${bgPosition}%`;
    });
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className={`${styles.heroSection}`}>
        <div className={`${styles.heroContent}`}>
          <h1 className="text-4xl font-bold inline-block text-white bg-black bg-opacity-20 px-4 py-2 rounded-md">Welcome to Paws of Love</h1>
          <p className='text-base text-white bg-black bg-opacity-20 px-4 py-2 rounded-md'>Our mission is to provide love, care, and support to every stray and abandoned dog in need.</p>
          <button className={`${styles.ctaButton}`}>Adopt Now</button>
        </div>
      </div>

      {/* Dog Care Section */}
      <div className={`${styles.section} ${styles.dogCareBackground} `}>
        <div className={`${styles.sectionContent}`}>
          <h2 className="text-xl font-bold inline-block text-white bg-black bg-opacity-10 px-4 py-2 rounded-md">Compassionate Care</h2>
          <p className='text-base text-white bg-black bg-opacity-10 px-4 py-2 rounded-md'>At Paws of Love, we provide compassionate care to every dog we rescue. From veterinary treatment to fostering, we ensure that every dog receives the love and attention they deserve.</p>
        </div>
      </div>

      {/* Volunteer Section */}
      <div className={`${styles.section} ${styles.volunteerBackground}`}>
        <div className={`${styles.sectionContent}`}>
          <h2 className="text-xl font-bold inline-block text-white bg-black bg-opacity-10 px-4 py-2 rounded-md">Dedicated Volunteers</h2>
          <p className='text-base text-white bg-black bg-opacity-10 px-4 py-2 rounded-md'>Our dedicated volunteers are the heart of our organization. They tirelessly work to feed, shelter, and provide medical care to stray dogs. Join our volunteer team today and make a difference in the lives of dogs.</p>
        </div>
      </div>

      {/* Shelter Section */}
      <div className={`${styles.section} ${styles.shelterBackground}`}>
        <div className={`${styles.sectionContent}`}>
          <h2 className="text-xl font-bold inline-block text-white bg-black bg-opacity-30 px-4 py-2 rounded-md">Safe Shelter</h2>
          <p className='text-base text-white bg-black bg-opacity-30 px-4 py-2 rounded-md'>We believe every dog deserves a safe and loving shelter. Our shelters provide a temporary home for stray and abandoned dogs until they find their forever families. Help us provide shelter to more dogs by donating today.</p>
        </div>
      </div>

      {/* Food Section */}
      <div className={`${styles.section} ${styles.foodBackground}`}>
        <div className={`${styles.sectionContent}`}>
          <h2 className="text-xl font-bold inline-block text-white bg-black bg-opacity-30 px-4 py-2 rounded-md">Nutritious Food</h2>
          <p className='text-base text-white bg-black bg-opacity-30 px-4 py-2 rounded-md'>Proper nutrition is essential for the health and well-being of dogs. We ensure that every dog in our care receives nutritious food to keep them healthy and strong. Your donations help us provide food to dogs in need.</p>
        </div>
      </div>

      {/* Water Section */}
      <div className={`${styles.section} ${styles.waterBackground}`}>
        <div className={`${styles.sectionContent}`}>
          <h2 className="text-xl font-bold inline-block text-white bg-black bg-opacity-10 px-4 py-2 rounded-md">Clean Water</h2>
          <p className='text-base text-white bg-black bg-opacity-10 px-4 py-2 rounded-md'>Access to clean drinking water is vital for the survival of stray dogs. We install water stations in communities to ensure that stray dogs have access to clean water. Your support enables us to continue this life-saving initiative.</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={`${styles.section}`}>
        <div className={`${styles.sectionContent}`}>
          <h2>Frequently Asked Questions</h2>
          <p>Have questions about our organization and our work? Check out our FAQ section to find answers to commonly asked questions. If you don&apos;t find what you&apos;re looking for, feel free to contact us.</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className={`${styles.section}`}>
        <div className={`${styles.sectionContent}`}>
          <h2>Get in Touch</h2>
          <p>Have questions or want to get involved? We&apos;d love to hear from you! Contact us via phone, email, or through our social media channels. Together, we can make a difference in the lives of dogs.</p>
        </div>
      </div>
    </div>
  );
}

export default ParallaxLandingPage;
