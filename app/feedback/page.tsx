"use client"
import React, { useState } from "react";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState<string>("");
  const [submittedFeedback, setSubmittedFeedback] = useState<string | null>(null);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (feedback.trim() === "") return;

    // Simulate submitting feedback
    setSubmittedFeedback(feedback);

    // Clear the input field after submission
    setFeedback("");
  };

  return (
    <div className="bg-[#FCF8F3] min-h-screen">
      <header className="bg-[#B88E2F] h-60 flex items-center justify-center">
        <h1 className="text-5xl font-extrabold text-white">We Value Your Feedback</h1>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-extrabold text-gray-800">Your Thoughts Matter to Us</h2>

          {/* Feedback Form */}
          <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-6 mt-6">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="We'd love to hear your feedback!"
              className="border p-4 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
              rows={6}
              required
            />
            <button
              type="submit"
              className="bg-[#B88E2F] text-white font-bold p-3 rounded-md hover:bg-[#9A6C2F] transition-colors"
            >
              Submit Feedback
            </button>
          </form>

          {/* Display Submitted Feedback */}
          {submittedFeedback && (
            <div className="mt-8 p-6 bg-white border rounded-md shadow-md">
              <h4 className="text-2xl font-bold text-gray-800">Your Submitted Feedback:</h4>
              <p className="text-lg text-gray-700 mt-2">{submittedFeedback}</p>
              <p className="text-green-500 mt-4 font-semibold">Thank you for your feedback!</p>
            </div>
          )}
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

export default FeedbackPage;
