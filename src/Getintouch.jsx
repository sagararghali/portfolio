import React from 'react'

export default function Getintouch() {
  return (
    <>
     <section  className="bg-muted py-16 px-6 md:px-10 lg:px-16 bg-gray-300">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <form className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full  rounded-lg p-2" />
                <input type="email" placeholder="Email" className="w-full rounded-lg p-2" />
              </div>
              <textarea placeholder="Message" className="w-full rounded-lg p-2" />
              <button className="w-36 text-white rounded-lg p-1.5 bg-blue-600 justify-self-end hover:bg-green-600">
                Submit
              </button>
              <div className=''> 
          <p>Feel free to <strong>message</strong> me about your doubts: <a href="mailto:your-sagararghalimagar@gmail.com" className="text-blue-600">sagararghalimagar@example.com</a>.</p>
          </div>
            </form>
          </div>
        </section>
    </>
  )
}
