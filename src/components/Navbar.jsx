export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Capa glass */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-xl px-6 py-4 shadow-lg shadow-purple-500/10">
          {/* Logo */}
          <h1 className="text-lg font-semibold tracking-wide text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
            Valentina<span className="text-purple-400">.dev</span>
          </h1>

          {/* Links */}
          <div className="flex items-center space-x-8 text-sm font-medium text-gray-300">
            {[
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Talks", href: "talks" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative transition-all duration-300 hover:text-purple-400"
              >
                {link.name}

                {/* underline animado */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
