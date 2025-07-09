import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Логотип и краткое описание */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Stanford School</h3>
            <p className="text-gray-400">
              Частная школа с акцентом на английский язык, IT и креативное мышление. Учим с 1 класса, готовим к IELTS и даём знания, которые пригодятся в будущем.
            </p>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="/header" className="hover:text-gray-400">Главная</a></li>
              <li><a href="#about" className="hover:text-gray-400">О нас</a></li>
              <li><a href="#programs" className="hover:text-gray-400">Курсы</a></li>
              <li><a href="#teachers" className="hover:text-gray-400">Учителя</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Контакты</a></li>
            </ul>
          </div>

          {/* Контактная информация */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Связаться с нами</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 Телефон: +998 90 123 45 67</li>
              <li>📧 Email: info@stanfordschool.uz</li>
              <li>📍 Адрес: Наманган, ул. Школьная, 25</li>
            </ul>
          </div>

          {/* Соцсети */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex space-x-6 text-gray-400">
              <a href="https://t.me/sata_namangan" className="hover:text-blue-400" title="Telegram">
                <i className="fab fa-telegram-plane"></i>
              </a>
              <a href="https://www.instagram.com/stanford.it.school/" className="hover:text-pink-500" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com/stanfordschool" className="hover:text-blue-600" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Авторское право */}
        <div className="text-center mt-8 text-gray-400">
          &copy; 2025 Stanford School. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
