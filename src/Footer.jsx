import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-8 mt-8 gap-y-5 grid">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-20 ">
      <div>
          <h2 className="text-xl font-bold mb-2">About Me</h2>
          <p>I am a web developer with 5 months of work experience in React JS in a company.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Contact Me</h2>
          <p>Gmail: sagararghalimagar@gmail.com</p>
          <p>Phone: +977 9748813046</p>
          <p>Location: Butwal, Nepal</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Follow Me</h2>
          <ul className="flex  grid">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>

      </div>
      <div className='bg-gray-500 font-bold text-center'>
      &copy; 2024 My Portfolio
      </div>
    </footer>
  );
};

export default Footer;
