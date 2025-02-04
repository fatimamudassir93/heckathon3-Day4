"use client"
import React, { useState } from "react";

interface Question {
  id: string;
  text: string;
}

const FaqPage = () => {
  const [question, setQuestion] = useState<string>("");
  const [questionsList, setQuestionsList] = useState<Question[]>([]);

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (question.trim() === "") return;

    // Create a new question with a unique ID
    const newQuestion: Question = {
      id: `${Date.now()}`,  // Simple unique ID using timestamp
      text: question,
    };

    // Add new question to the list
    setQuestionsList((prevList) => [...prevList, newQuestion]);

    // Clear input field after submission
    setQuestion("");
  };

  return (
    <div className="bg-[#FCF8F3] min-h-screen">
      <header className="bg-[#B88E2F] h-60 flex items-center justify-center">
        <h1 className="text-5xl font-extrabold text-white">Frequently Asked Questions</h1>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="space-y-10">
          <h2 className="text-3xl font-extrabold text-gray-800">Our Most Common Questions</h2>

          {/* FAQ Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#333]">What is Furniro?</h3>
              <p className="text-lg text-gray-700">Furniro is a modern furniture store offering high-quality products at affordable prices.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#333]">How can I track my order?</h3>
              <p className="text-lg text-gray-700">Once your order is shipped, you will receive a tracking link via email. You can track your order status on our website.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#333]">Do you offer international shipping?</h3>
              <p className="text-lg text-gray-700">Currently, we only offer shipping within the USA. We are working on expanding to international markets.</p>
            </div>
          </div>

          {/* Submit a Question Section */}
          <h3 className="text-2xl font-bold text-gray-800 mt-10">Have a Question?</h3>
          <form onSubmit={handleQuestionSubmit} className="flex flex-col gap-5 mt-4">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask us anything..."
              className="border p-4 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
              required
            />
            <button
              type="submit"
              className="bg-[#B88E2F] text-white font-bold p-3 rounded-md hover:bg-[#9A6C2F] transition-colors"
            >
              Submit Question
            </button>
          </form>

          {/* Display Submitted Questions with IDs */}
          <div className="mt-8">
            <h4 className="text-2xl font-bold text-gray-800">Submitted Questions</h4>
            <ul className="space-y-4 mt-4">
              {questionsList.length === 0 ? (
                <li className="text-lg text-gray-600">No questions submitted yet.</li>
              ) : (
                questionsList.map((q) => (
                  <li key={q.id} className="text-lg text-gray-700">
                    <span className="font-bold text-[#333]">Q{q.id}: </span>{q.text}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 text-lg">2023 Furniro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FaqPage;
