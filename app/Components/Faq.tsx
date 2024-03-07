import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <button
        className="flex justify-between w-full bg-blue-600 text-white dark:bg-gray-800 dark:text-gray-200 rounded-lg px-6 py-4 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
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
        <p className="mt-4 text-gray-800 dark:text-gray-200 leading-6">{answer}</p>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-purple-400 to-purple-600 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl text-center text-white font-bold mb-12">Frequently Asked Questions</h1>
        <div className="space-y-8">
          <FAQItem
            question="What does Lifetime Access exactly mean?"
            answer="Tailwind Master Kits' lifetime access gives you access to the components and the code with no additional recurring charges. Pay once, use the components forever. Also, if in the future more components are added, you get access to them if you're subscribed for the lifetime access membership."
          />
          <FAQItem
            question="How is One-Year access pass different from Lifetime Access?"
            answer="With One-Year pass, you get access to all the premium components for One Year and all the updates are for One Year only. With Lifetime Access, you get access to the entire set for features for Lifetime - Which means you can get future updates for the components as long as the website is live."
          />
          <FAQItem
            question="Can I resell the components on my own website?"
            answer="No. You cannot resell the components on your own website claiming that you built them. You cannot create templates out of Tailwind Master Kit's components and sell them. You can use the components for client projects and personal use."
          />
          <FAQItem
            question="What are Free Updates?"
            answer="We are tirelessly working on adding more quality components on the platform. Most of our components are premium but we do release free components and keep on updating them regularly. Lookout for our newsletter, we release new components every month."
          />
          <FAQItem
            question="On how many projects can I use Tailwind Master Kit's components?"
            answer="With Tailwind Master Kit's Lifetime Access Pass, you can use the components on as many websites as you want - which is unlimited. As long as its just you who is using the licence, use it on unlimited projects."
          />
          <FAQItem
            question="What is community access and how is it beneficial for me?"
            answer="You get access to our private Discord Server where you can request for custom components, seek help from the makers of Tailwind Master Kit and other connect and network with other like minded people who are already using the product."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
