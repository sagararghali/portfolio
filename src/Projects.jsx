import React from 'react'
import gif from './Sagar-Profile1-Microsoft_Edge2024-07-2321-07-39online-video-cutter.com-ezgif.com-video-to-gif-converter.gif'


export default function Projects() {
  return (
    <>
    <section id="projects" className="my-8">
          <h2 className="text-2xl font-bold mb-4 underline text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project 1 */}
            <div class="w-11/12 h-90 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img className="w-full h-60 border-2 border-gray-300 object-cover rounded-t-lg hover:" alt="Card Image"  src={gif}/>
        <div className="p-4">
            <h2 className="text-xl  font-semibold">-Text Reader-</h2>
            <p className="text-gray-600">
              This web app is designed to assist with text analysis and transformation.  Users can also customize the appearance of the app by enabling different color modes for a personalized experience.</p>
            <div className="flex justify-between items-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">View project</button>
            </div>
        </div>
    </div>

    <div class="w-11/12  p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img className="w-full h-60 object-cover rounded-t-lg" alt="Card Image" src="https://via.placeholder.com/150" />
        <div className="p-4">
            <h2 className="text-xl  font-semibold">-Calculator-</h2>
            <p className="text-gray-600">
            This calculator, was built using HTML, CSS, and JavaScript, provides basic arithmetic functions.  It features a clean and user-friendly interface with responsive design.</p>
            <div className="flex justify-between items-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">View project</button>
            </div>
        </div>
    </div>

    
                        <div class="w-11/12  p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img className="w-full h-60 object-cover rounded-t-lg" alt="Card Image" src="https://via.placeholder.com/150" />
        <div className="p-4">
            <h2 className="text-xl  font-semibold">-Text Reader-</h2>
            <p className="text-gray-600">
              This web app is designed to assist with text analysis and transformation.</p>
            <div className="flex justify-between items-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">View project</button>
            </div>
        </div>
    </div>
          </div>
        </section>
    </>
  )
}
