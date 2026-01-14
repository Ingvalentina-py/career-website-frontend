export default function Skills() {
  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "Python",
    "OpenCV",
    "Git",
    "REST APIs",
  ];

  return (
    <section id="skills" className="bg-black/30 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8 text-cyan-400">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 text-center rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/20"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
