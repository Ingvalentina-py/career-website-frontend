import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section id="contact" className="bg-black/30 py-20">
      <div className="max-w-xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6 text-cyan-400">Contact</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black/50 text-white"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black/50 text-white"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black/50 text-white"
            rows="4"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded bg-gradient-to-r from-purple-600 to-cyan-500 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
