import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Колонка с логотипом и краткой информацией */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Stanford Lending</h3>
            <p className="text-gray-400">
              We provide flexible and reliable loan options with an easy application process. Your financial freedom is our priority.
            </p>
          </div>

          {/* Колонка с быстрыми ссылками */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-400">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Колонка с контактной информацией */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Phone: (123) 456-7890</span>
              </li>
              <li>
                <span className="text-gray-400">Email: support@stanfordlending.com</span>
              </li>
              <li>
                <span className="text-gray-400">Address: 123 Main Street, Namanagan, UZ</span>
              </li>
            </ul>
          </div>

          {/* Колонка с соцсетями */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Нижний текст с авторскими правами */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            &copy; 2025 Stanford Lending. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
