import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
      </div>

      {/* Contenido */}
      <div className="max-w-5xl rounded-3xl border border-purple-500/20 bg-black/40 p-14 backdrop-blur-xl shadow-xl shadow-purple-500/10 animate-fade-in">
        <div className="grid items-center gap-2 md:grid-cols-2">
          {/* IMAGEN */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 blur-2xl opacity-60" />
              <img
                src={profile}
                alt="Valentina"
                className="relative h-64 w-64 rounded-2xl object-cover border border-purple-500/30"
              />
            </div>
          </div>

          {/* TEXTO (NO SE TOCA ESTILO) */}
          <div className="text-center md:text-left">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
              <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
                Full Stack Developer
              </span>
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-gray-300 md:mx-0 md:text-lg">
              Engineering the future with{" "}
              <span className="text-cyan-400">clean code</span>,
              <span className="text-purple-400"> AI vision</span> and scalable
              systems.
            </p>

            <div className="flex justify-center gap-4 md:justify-start">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-cyan-400/40 px-8 py-3 font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/10 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
