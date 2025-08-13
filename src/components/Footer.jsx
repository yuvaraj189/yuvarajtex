// Footer.jsx
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">Yuvaraj Tex</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Delivering high-quality textiles with a touch of elegance.  
            We bring style, comfort, and tradition together in every thread.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-pink-400 transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-pink-400 transition">About Us</a>
            </li>
            <li>
              <a href="/service" className="hover:text-pink-400 transition">Service</a>
            </li>
            <li>
              <a href="/careers" className="hover:text-pink-400 transition">Carrers</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-pink-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>New Machine Installation</li>
            <li>Maintenance & Repair</li>
            <li>Relocation Services</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
          <p className="text-sm">📍 Yuvaraj Tex, Rajapalayam, India</p>
          <p className="text-sm">📞 +91 98420 72961</p>
          <p className="text-sm">📧 selvaraj.yuvarajtex@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Yuvaraj Tex. All rights reserved.
      </div>
    </footer>
  );
}
