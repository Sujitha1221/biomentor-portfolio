import { useState } from "react";

const sections = [
  {
    label: "Background",
    content: (
      <p className="text-gray-700 leading-relaxed">
        E-learning is a powerful educational tool that uses online platforms like videos, webinars, and documents to enhance student engagement.
        However, current platforms often lack adaptability and student wellness features. BioMentor addresses these issues by offering easy, personalized, and health-conscious learning for A/L Biology students.
      </p>
    ),
  },
  {
    label: "Research Gap",
    content: (
      <p className="text-gray-700 leading-relaxed">
        Existing tools focus mainly on content delivery without personalization or adaptive assessments. Mental health and attention metrics are rarely considered. There's a clear need for AI-based systems that also support well-being, specifically tailored for A/L education in Sri Lanka.
      </p>
    ),
  },
  {
    label: "Research Problem",
    content: (
      <p className="text-gray-700 leading-relaxed">
        How can we design an intelligent, adaptive e-learning platform that enhances biology education and mental well-being using modern AI tools like summarization, semantic evaluation, and personalized assessments?
      </p>
    ),
  },
  {
    label: "Research Objectives",
    content: (
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Implement RAG-based summarization for biology study material.</li>
        <li>Develop adaptive quizzes using LLMs and student performance history.</li>
        <li>Evaluate answers using semantic scoring and feedback mechanisms.</li>
        <li>Integrate SM-2 spaced repetition for memory enhancement.</li>
        <li>Enhance well-being via attention detection and emotion support tools.</li>
      </ul>
    ),
  },
];

export default function ResearchDomain() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-emerald-100" id="domain">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-green-700 mb-12">🔍 Research Domain</h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeTab === index
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-green-700 hover:bg-green-100 border border-green-300"
                }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-green-500 transition-all duration-300">
          {sections[activeTab].content}
        </div>
      </div>
    </section>
  );
}
