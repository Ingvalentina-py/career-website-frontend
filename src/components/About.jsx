export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      {/* Fondo suave */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="rounded-3xl border border-purple-500/20 bg-black/40 p-10 backdrop-blur-xl shadow-lg shadow-purple-500/10 md:p-14">
        {/* Título */}
        <h3 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h3>

        {/* Texto principal */}
        <p className="max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
          I am a{" "}
          <span className="text-cyan-400 font-medium">
            Systems Engineering student
          </span>
          with a strong focus on{" "}
          <span className="text-purple-400 font-medium">
            Full Stack Development
          </span>
          and{" "}
          <span className="text-cyan-400 font-medium">
            Artificial Intelligence
          </span>{" "}
          applied to computer vision.
        </p>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg">
          I enjoy building <span className="text-purple-400">clean</span>,
          <span className="text-cyan-400"> scalable</span> and
          <span className="text-purple-400"> meaningful</span> software,
          combining solid engineering principles with modern technologies to
          create solutions that have real impact.
        </p>

        {/* Detalle final */}
        <p className="mt-8 max-w-3xl text-sm uppercase tracking-widest text-gray-500">
          Engineering mindset · Continuous learning · Future-driven
        </p>
      </div>
    </section>
  );
}
