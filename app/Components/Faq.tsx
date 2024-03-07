import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <button
        className="flex justify-between w-full bg-blue-600 text-white dark:bg-gray-800 dark:text-gray-200 rounded-lg px-6 py-4 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm sm:text-lg font-semibold">{question}</span>
        <span className="flex items-center">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M15.293 6.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L10 10.586l5.293-5.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 13.293a1 1 0 0 0 1.414 1.414L10 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414z" clipRule="evenodd" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <p className="text-sm sm:text-base mt-4 text-gray-800 dark:text-gray-200 leading-6">{answer}</p>
      )}
    </div>
  );
};

const FAQSection = () => {
    return (
      <>
      <div className="py-10 lg:py-20 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl lg:text-4xl text-center text-white font-bold mb-8 lg:mb-12">Frequently Asked Questions</h1>
          <div className="space-y-6 md:space-y-8">
            <FAQItem
              question="How can I adopt a dog from your NGO?"
              answer="To adopt a dog from our NGO, you can start by browsing the available dogs on our website or visiting our shelter. Once you've found a dog you're interested in, fill out an adoption application form. Our team will review your application and conduct a home visit to ensure the dog's welfare. Upon approval, you can finalize the adoption process and welcome your new furry friend into your home."
            />
            <FAQItem
              question="What is the adoption fee, and what does it include?"
              answer="Our adoption fee varies depending on the dog's age, breed, and medical history. However, it typically includes vaccinations, spaying/neutering, microchipping, and a basic health check-up. This fee helps us cover the costs associated with caring for the dogs in our shelter and preparing them for adoption."
            />
            <FAQItem
              question="Do you accept donations, and how can I contribute?"
              answer="Yes, we greatly appreciate donations from compassionate individuals like you! You can contribute in various ways, including monetary donations, in-kind donations (such as food, toys, and bedding), volunteering your time at our shelter, or sponsoring a dog's medical expenses. Your generosity helps us continue our mission of rescuing and caring for dogs in need."
            />
            <FAQItem
              question="Can I surrender my dog to your NGO if I can no longer care for it?"
              answer="Yes, we understand that circumstances may change, and we're here to help. If you're unable to care for your dog anymore, please reach out to us to discuss surrendering options. We'll assess the dog's health and behavior and work to find the best possible solution, which may include finding a new loving home through our adoption program."
            />
            <FAQItem
              question="How can I volunteer with your NGO?"
              answer="We welcome volunteers who are passionate about making a difference in the lives of dogs. You can volunteer by assisting with daily care tasks at our shelter, participating in fundraising events, fostering dogs in your home, or helping with administrative duties. Contact us to learn more about volunteer opportunities and how you can get involved."
            />
            <FAQItem
              question="What should I do if I find a stray dog?"
              answer="If you come across a stray dog, it's essential to approach with caution and ensure your safety. If possible, gently contain the dog and check for any identification tags or microchips. If the dog is injured or in distress, contact local animal control or a nearby veterinary clinic for assistance. You can also reach out to our NGO, and we'll do our best to help the dog and reunite it with its owner or find a suitable home."
            />
          </div>
        </div>
      </div>
      </>
    );
  };
  
export default FAQSection;

