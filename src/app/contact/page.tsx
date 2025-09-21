'use client';

import Image from "next/image";
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzVYz3D8gZhXD6ebE2f7lKUoSsCZQeeXAfVkWCGxZVR_0znrw1INxbOcpK-FlKJgsBPCg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        alert('Error sending message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-100 to-pink-100">
      {/* Pink curved shape at the top */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-pink-500 rounded-b-[50%] -z-10"></div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-120 mx-auto grid grid-cols-1 gap-8 items-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-8 text-center">Connect with us!</h1>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2.003 5.884L10 11.884l7.997-6.002A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 6-8-6V16a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>

            <form className="space-y-4 text-black" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white/50 backdrop-blur-sm resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-800 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 bg-transparent py-4 text-center text-sm text-gray-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-purple-800">Privacy Statement</a>
            <a href="#" className="hover:text-purple-800">Terms of Use</a>
            <a href="#" className="hover:text-purple-800">Contact Us</a>
          </div>
          <div className="mt-2">
            P1-MONT-00178 Dec 2022
          </div>
        </div>
      </footer>
    </section>
  );
}