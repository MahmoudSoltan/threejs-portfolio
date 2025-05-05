export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      <img
        src="/profile.png"
        alt="Mahmoud Soltan"
        className="w-52 h-52 rounded-full object-cover shadow-lg"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I'm Mahmoud Soltan, a frontend developer with 2+ years of experience building modern, performant, and responsive web applications using React, Tailwind CSS, and TypeScript.
          I've studied and worked in China, and specialize in UI/UX, API integration, and modern JavaScript frameworks.
        </p>
      </div>
    </div>
  );
}
