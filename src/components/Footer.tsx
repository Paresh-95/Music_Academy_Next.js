"use client"
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-8 md:gap-10">
        <div>
          <h3 className="text-xl mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            Music School is a premier institution dedicated to teaching the art and science of music. We nurture talent from the ground up, fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h3 className="text-xl mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl mb-4">Follow Us</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl mb-4">Contact Us</h3>
          <p className="text-sm leading-relaxed">
            New Delhi, India<br />Delhi 10001
          </p>
          <p className="text-sm mt-2">
            Email: <a href="mailto:info@musicschool.com" className="hover:underline">info@musicschool.com</a>
          </p>
          <p className="text-sm mt-2">
            Phone: <a href="tel:+1234567890" className="hover:underline">(123) 456-7890</a>
          </p>
        </div>
      </div>
      <p className='text-center text-xs pt-10'>© 2024 Music School. All rights reserved</p>
    </footer>
  );
}

export default Footer;
