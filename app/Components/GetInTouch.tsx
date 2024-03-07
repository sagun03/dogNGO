import React from 'react';

const GetInTouch = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 dark:from-gray-800 dark:to-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl text-center text-white font-bold mb-8">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-700 hover:text-blue-800 dark:hover:text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
