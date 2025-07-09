// ContactSection.jsx
import React, { useState } from "react";
import "./contact.css";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = "6069404040:AAHSsCrtvwYM_3s1GAq6H_7tiLpWfG_Z8YY";
    const chatId = "889498109";
    const message = `
<b>📩 Новое сообщение:</b>%0A
<b>👤 Имя:</b> ${form.name}%0A
<b>📧 Email:</b> ${form.email}%0A
<b>💬 Сообщение:</b> ${form.message}
    `;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      message
    )}&parse_mode=HTML`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.ok) {
        alert("Сообщение отправлено!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Ошибка при отправке. Попробуйте позже.");
      }
    } catch (error) {
      alert("Ошибка сети. Проверьте подключение.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="form-container">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">SUBMIT ➤</button>
        </form>
      </div>
    </section>
  );
}
