export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Línea superior suave */}
      <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-10 text-center">
        <p className="text-sm text-gray-400">
          © 2026 <span className="font-medium text-cyan-400">Valentina</span> ·
          Built with <span className="text-purple-400">passion</span> and{" "}
          <span className="text-cyan-400">code</span>
        </p>

        <p className="mt-2 text-xs text-gray-500">
          Full Stack · AI Vision · Future-driven Engineering
        </p>
      </div>
    </footer>
  );
}
