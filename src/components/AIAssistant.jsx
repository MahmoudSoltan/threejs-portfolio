import React, { useState } from 'react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = () => {
    if (input.toLowerCase().includes('skills')) {
      setResponse("I'm skilled in React, Three.js, TypeScript, and Tailwind CSS.");
    } else if (input.toLowerCase().includes('experience')) {
      setResponse("I have over 2 years of experience building modern frontend applications.");
    } else {
      setResponse("I'm here to help! Try asking about my skills or experience.");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white shadow-md"
      >
        {isOpen ? 'Close AI' : 'Chat with AI'}
      </button>

      {isOpen && (
        <div className="absolute bottom-14 right-0 w-72 bg-gray-800 p-4 rounded-xl shadow-xl text-white z-50">
          <h2 className="text-xl font-bold mb-2">AI Assistant 🤖</h2>
          <p className="text-sm mb-2 text-gray-300">
            Ask me something about Mahmoud’s skills or experience.
          </p>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 mb-2"
            placeholder="e.g. What are your skills?"
          />
          <button
            onClick={handleAsk}
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md w-full"
          >
            Ask
          </button>
          {response && (
            <div className="mt-3 p-2 bg-gray-700 rounded">
              <p>{response}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
