import React from 'react';
import Footer from './Footer';
import logo from './WhatsApp Image 2024-05-29 at 06.34.38_01430168.jpg'
import Getintouch from './Getintouch';
import Projects from './Projects'
import plogo from './SAGAR1.png'

const App = () => {
  return (
  <>
    <div className="min-h-screen bg-cover bg-center bg-[url('5501609ee45d514d1f2c4a63502045e2.gif')] flex flex-col items-center">
      <header className="  flex  justify-between w-full bg-green-500 bg-opacity-60  p-4 text-white text-left  text-3xl rounded-lg">
        <div className='flex gap-0'>
          <div className='text-center w-20 h-10 md:w-10 bg-yellow-400 rounded-full mt-1'>
 $
          </div>
        {/* <img src={plogo} alt="Description of my image" className="w-10 h-10 rounded-full mt-1 " /> */}
        <p className='ml-2 text-4xl'>
Sagar Arghali Magar
        </p></div>
<div className='text-sm text-left'>
        <button class="button" type="button">
  <span class="button__text">Download CV</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
</button>
</div>
        {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline text-xl">Download CV</a> */}

</header>
      <main className="flex-grow p-4">
        <div className='flex gap-6 grid grid-cols-1 md:grid-cols-2 '>
        <section id="about" className="mr-6 ml-8  ">
<div>
          <h2 className="text-3xl font-bold mb-2 p-3 text-center underline text-white">About Me</h2>
          <h3 className=' ml-4 text-2xl font-bold p-3 text-green-400'> Frontend Developer</h3>
<p className='text-xl text-white'>Hello, my name is Sagar Arghali Magar. Throughout my Front-end journey, I have developed several simple projects which i have mentioned below that have helped me gain practical experience and a deeper understanding of web development. I am excited to continue learning and growing as a developer.</p>
</div>

<div className=' pt-5 flex gap-x-8 '>
      <button className=' rounded w-20 h-10 bg-green-400 hover:bg-green-600 hover:font-bold'>Hire Me</button>
      <button className=' border-2 border-green-400 rounded w-20 h-10 bg-green-700 hover:bg-green-400 hover:font-bold'>Let's Talk</button>
</div>
<div>
      <h2 className="text-3xl font-bold p-3  underline text-white">My Work Experience</h2>
      
          <h3 className=' ml-4 text-2xl font-bold p-3 text-green-400 text-xl font-bold'> Web Developer</h3>
          <p className="text-muted-foreground text-white font-bold">-BM Khatri cons..| 2024/02/10 - Present</p>
<p className='text-lg text-white'>Certainly, I have been working on BM Khatri Consultant Pvt.Ltd. Initally I was joined as an intern. I was hired as a full-time Employee on 10-feb 2024.  </p>
<p className="text-muted-foreground text-white font-bold">-Responsibilities</p>
<div className='text-white'>
<li>Building and maintaining user interfaces using HTML, CSS, and JavaScript.</li>
<li>Utilizing frameworks and libraries such as React js, Angular, or Vue.js.</li>
<li>Ensuring responsive design for mobile and desktop platforms.</li>
</div>
</div> 
        </section>
        <div className="p-3 m-20 mb-0 mt-0 bg-white rounded-md shadow-2xl ">
        <img src={logo} alt="Description of my image" className="rounded-md " />
      </div>
        </div>
     <Projects/>
      </main>
    </div>
    <Getintouch/>
    <Footer/>
    </>
  );
};
export default App;
