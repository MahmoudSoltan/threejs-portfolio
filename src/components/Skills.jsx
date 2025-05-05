const skills = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Three.js", icon: "🌐" },
    { name: "Framer Motion", icon: "🎞️" },
    { name: "GitHub", icon: "🐙" },
  ];
  
  export default function Skills() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-xl shadow-md text-center"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  