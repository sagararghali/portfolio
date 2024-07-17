import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-blue-600 p-4 text-white text-center text-3xl">
Sagar Arghali Magar      </header>
      <main className="flex-grow p-4">
        <section id="about" className="my-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
<p>Hello, my name is Sagar Arghali Magar. I am a passionate learner and web developer with a keen interest in expanding my skills and knowledge in the field. Throughout my journey, I have developed several simple projects which i have mentioned below that have helped me gain practical experience and a deeper understanding of web development. I am excited to continue learning and growing as a developer.</p>
        </section>
        <section id="projects" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project 1 */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold">Text Reader</h3>
              <p>A brief description of Project 1.</p>
            </div>
            {/* Project 2 */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold">Project 2</h3>
              <p>A brief description of Project 2.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold">Project 2</h3>
              <p>A brief description of Project 2.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Feel free to reach out to me at <a href="mailto:your-email@example.com" className="text-blue-600">your-email@example.com</a>.</p>
        </section>
      </main>
      <footer className="w-full bg-blue-600 p-4 text-white text-center">
        &copy; 2024 My Portfolio
      </footer>
    </div>
  );
};

export default App;
