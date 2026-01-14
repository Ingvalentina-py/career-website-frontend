export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <h3 className="text-3xl font-bold mb-8 text-purple-400">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-black/40 border border-purple-500/20">
          <h4 className="text-xl font-semibold mb-2">Vixel</h4>
          <p className="text-gray-400">
            Computer vision software using mathematical image processing.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-black/40 border border-cyan-500/20">
          <h4 className="text-xl font-semibold mb-2">Career Website</h4>
          <p className="text-gray-400">
            Full stack personal portfolio with MERN architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
