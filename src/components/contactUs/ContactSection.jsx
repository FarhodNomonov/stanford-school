// ContactSection.jsx
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        toast.success("Сообщение отправлено!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Ошибка при отправке. Попробуйте позже.");
      }
    } catch (error) {
      toast.error("📡 Ошибка сети. Проверьте подключение.");
    }
  };

  return (
  <>
  <section className="contact-section" id="contact">
    <div className="form-container">
      <h2>Свяжитесь с нами</h2>
      <p>
        Остались вопросы? Хотите записать ребёнка или узнать подробнее о наших программах?
        Оставьте заявку — мы свяжемся с вами в ближайшее время!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Ваш email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Отправить ➤</button>
      </form>
    </div>
  </section>

  {/* Контейнер для тостов */}
  <ToastContainer position="top-center" autoClose={3000} />
</>

  );
}
