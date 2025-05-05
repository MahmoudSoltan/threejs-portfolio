const experiences = [
    {
      title: "Frontend Developer",
      company: "Tomorrow’s Wormhole Tech",
      duration: "2021 – Present",
      description: "Led UI/UX design and frontend development for internal voice app platforms.",
    },
    {
      title: "Web Developer",
      company: "Senior IT Company",
      duration: "2020 – 2021",
      description: "Built eCommerce platforms using React.js, Node.js, and optimized component-based architecture.",
    },
  ];
  
  export default function Timeline() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-8">My Experience</h2>
        <div className="relative">
          <div className="border-l-4 border-blue-500 absolute left-0 top-0 h-full"></div>
          <div className="space-y-8 pl-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 w-6 h-6 rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-sm text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.duration}</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  