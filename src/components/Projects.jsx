const projects = [
    {
      name: "Spicy Hot Pot",
      description: "Online cuisine ordering app",
      link: "https://spicyhotpot.vercel.app/",
      tech: "React, Next.js, Redux",
    },
    {
      name: "Coffee Plus",
      description: "Artisanal coffee shop frontend",
      link: "https://coffeeplus.vercel.app/",
      tech: "React, Tailwind, TypeScript",
    },
    {
      name: "Clothes Store",
      description: "E-commerce clothing platform",
      link: "https://cloth-store-seven.vercel.app/",
      tech: "React, Node.js, Redux",
    },
  ];
  
  export default function Projects() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-xl shadow-md block"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-300 mb-1">{project.description}</p>
              <p className="text-sm text-gray-400 italic">{project.tech}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }
  