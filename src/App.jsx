import React from 'react';
import Footer from './Footer';

const App = () => {
  return (<>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-green-600 p-4 text-white text-center text-3xl">
Sagar Arghali Magar      </header>
      <main className="flex-grow p-4">
        <section id="about" className="my-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
<p>Hello, my name is Sagar Arghali Magar. Throughout my Front-end journey, I have developed several simple projects which i have mentioned below that have helped me gain practical experience and a deeper understanding of web development. I am excited to continue learning and growing as a developer.</p>
        </section>
        <section id="projects" className="my-8">
          <h2 className="text-2xl font-bold mb-4 underline">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project 1 */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold">Text Reader</h3>
              <p>
              This web app is designed to assist with text analysis and transformation. It counts the number of letters and words in a given text. Additional functionalities include converting text to uppercase or lowercase and removing extra spaces. Users can also customize the appearance of the app by enabling different color modes for a personalized experience.</p>
            </div>
            {/* Project 2 */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold">Calculator</h3>
              <p>This calculator, was built using HTML, CSS, and JavaScript, provides basic arithmetic functions such as addition, subtraction, multiplication, and division. It features a clean and user-friendly interface with responsive design, allowing users to perform calculations easily on various devices.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold">Project 2</h3>
              <p>A brief description of Project 2.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          
          <p>Feel free to <strong>message</strong> me about your doubts: <a href="mailto:your-sagararghalimagar@gmail.com" className="text-blue-600">sagararghalimagar@example.com</a>.</p>
        </section>
      </main>
      
    </div>
    <Footer/>
    
    


    </>
  );
};

export default App;
