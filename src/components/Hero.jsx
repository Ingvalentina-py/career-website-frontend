export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-6">
      <div>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Full Stack Developer
        </h2>
        <p className="max-w-xl mx-auto text-gray-400 mb-8">
          Engineering the future with clean code, AI vision and scalable
          systems.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 transition"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
