import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact({ email, linkedIn, github }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
        <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-blue-400 transition">
          <FaEnvelope /> {email}
        </a>
        <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition">
          <FaLinkedin /> LinkedIn
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition">
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  );
}
