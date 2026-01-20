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
    <section id="contact" className="relative py-28">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-xl px-6">
        <div className="rounded-3xl border border-cyan-500/20 bg-black/40 p-10 backdrop-blur-xl shadow-lg shadow-cyan-500/10">
          {/* Título */}
          <h3 className="mb-4 text-center text-3xl font-extrabold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let’s Work Together
            </span>
          </h3>

          <p className="mb-10 text-center text-gray-400">
            Have an idea, a project or just want to say hello? I’m always open
            to meaningful conversations.
          </p>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-gray-200 placeholder-gray-500 backdrop-blur transition-all duration-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-gray-200 placeholder-gray-500 backdrop-blur transition-all duration-300 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
              required
            />

            <textarea
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-gray-200 placeholder-gray-500 backdrop-blur transition-all duration-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              required
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
