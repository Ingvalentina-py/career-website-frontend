export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">Valentina.dev</h1>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-purple-400">
            About
          </a>
          <a href="#skills" className="hover:text-purple-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-purple-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-purple-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
