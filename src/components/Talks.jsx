import { useState } from "react";

export default function Talks() {
  const [selected, setSelected] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);

  const talks = [
    {
      title: "Visión Artificial Aplicada",
      event: "Semillero MFAI",
      year: "2024",
      short: "Procesamiento digital de imágenes y matemáticas.",
      full: "Ponencia enfocada en el uso de matemáticas aplicadas al procesamiento digital de imágenes, convolución, análisis visual y su impacto educativo y social. Se abordaron ejemplos prácticos y aplicaciones reales en visión artificial.",
      image: "/certificates/EAN_ponencia1.jpg",
    },
    {
      title: "IA en la Educación",
      event: "Evento Académico Universitario",
      year: "2024",
      short: "IA como herramienta educativa.",
      full: "Charla sobre cómo la inteligencia artificial puede democratizar el aprendizaje, facilitar procesos educativos, fortalecer el pensamiento computacional y generar impacto social positivo.",
      image: "/certificates/UNICATOLICA_NOV_ponencia2.jpg",
    },
    {
      title: "CONNECT AI UNICATOLICA",
      event: "Congreso Tecnológico",
      year: "2024",
      short: "IA responsable y aplicada.",
      full: "Análisis del impacto social del deep learning, su uso responsable, implicaciones éticas y oportunidades en sectores educativos e industriales.",
      image: "/certificates/CONNECT_IA_ponencia3.jpeg",
    },
    {
      title: "Software Open Source",
      event: "Jornada de Innovación",
      year: "2023",
      short: "Accesibilidad tecnológica.",
      full: "Exposición sobre la importancia del software libre como herramienta de acceso, aprendizaje continuo y crecimiento profesional en comunidades tecnológicas.",
      image: "/certificates/talk4.jpg",
    },
    {
      title: "Arquitectura de Software",
      event: "Semana Académica",
      year: "2025",
      short: "Sistemas escalables.",
      full: "Ponencia enfocada en principios de arquitectura de software, escalabilidad, buenas prácticas y diseño de sistemas modernos.",
      image: "/certificates/talk5.jpg",
    },
    {
      title: "Mujeres en Tecnología",
      event: "Encuentro STEM",
      year: "2024",
      short: "Liderazgo femenino.",
      full: "Charla motivacional sobre el rol de la mujer en tecnología, liderazgo, constancia, disciplina y crecimiento profesional.",
      image: "/certificates/talk6.jpg",
    },
  ];

  return (
    <section id="talks" className="relative py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="mb-10 text-center text-3xl font-bold text-purple-400">
          Ponencias & Conferencias
        </h3>

        {/* CARRUSEL */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
          {talks.map((talk, index) => (
            <div
              key={index}
              onClick={() => setSelected(talk)}
              className="min-w-[280px] cursor-pointer overflow-hidden rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-xl transition hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <img
                src={talk.image}
                alt={talk.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-5">
                <h4 className="text-lg font-semibold text-cyan-400">
                  {talk.title}
                </h4>
                <p className="mt-1 text-xs text-purple-300">
                  {talk.event} · {talk.year}
                </p>
                <p className="mt-3 text-sm text-gray-300">{talk.short}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL PRINCIPAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6">
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-purple-500/30 bg-black/80 p-6 shadow-2xl shadow-purple-500/20">
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              onClick={() => setZoomImage(selected.image)}
              className="mb-6 h-64 w-full cursor-zoom-in rounded-2xl object-cover transition hover:opacity-90"
            />

            <h4 className="text-2xl font-bold text-cyan-400">
              {selected.title}
            </h4>

            <p className="mt-1 text-sm text-purple-300">
              {selected.event} · {selected.year}
            </p>

            <p className="mt-4 leading-relaxed text-gray-300">
              {selected.full}
            </p>
          </div>
        </div>
      )}

      {/* ZOOM DE IMAGEN */}
      {zoomImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md px-6">
          <button
            onClick={() => setZoomImage(null)}
            className="absolute right-6 top-6 text-2xl text-white"
          >
            ✕
          </button>

          <img
            src={zoomImage}
            alt="Certificado ampliado"
            className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
