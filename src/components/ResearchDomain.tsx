import { useState } from "react";

const sections = [
  {
    label: "Background",
    content: (
  <div className="space-y-4">
    <p className="text-gray-700 leading-relaxed text-center">
      A/L Biology students in Sri Lanka face challenges with memorizing complex terms, understanding long texts, and getting personalized feedback. Traditional tools don’t support diverse learning styles or adapt to individual needs.
    </p>
    <p className="text-gray-700 leading-relaxed text-center">
      BioMentor was created to solve these problems. It’s a personalized e-learning platform that uses spaced repetition, adaptive quizzes, summaries, and answer evaluation to help students learn more effectively using government-approved content.
    </p>
  </div>
),


  },
  {
    label: "Research Gap",
    content: (
      <p className="text-gray-700 leading-relaxed text-center">
    Despite the rise of digital education platforms in Sri Lanka, A/L Biology students still face significant challenges due to the lack of personalized and adaptive learning tools. Existing platforms are often static, offering limited support for vocabulary retention, comprehension of large volumes of text, or development of exam-oriented answering skills. They do not adapt to a student's individual performance or provide detailed feedback, making it difficult for learners to identify and improve on weak areas. Moreover, there is minimal integration of features that support auditory learners, topic-specific summaries, or structured answer evaluation-all of which are crucial for mastering A/L Biology. This gap calls for a more holistic solution that aligns with the local syllabus, accommodates diverse learning styles, and provides real-time, actionable insights to guide student progress-goals that BioMentor aims to fulfill.
      </p>
    ),
  },
  {
  label: "Research Problem",
  content: (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-gray-700 text-base">
      
      <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500">
        <h4 className="font-semibold text-green-800 mb-2">📚 AI Summarization</h4>
        <p>
          How can we generate concise, exam-relevant summaries from A/L biology materials using customizable lengths and voice support, while ensuring alignment with the national syllabus?
        </p>
      </div>
      
      <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500">
        <h4 className="font-semibold text-green-800 mb-2">🧪 Adaptive Quizzes</h4>
        <p>
          How can we create a dynamic quiz system that adjusts MCQ difficulty based on student performance and accurately identifies learning gaps through real-time feedback?
        </p>
      </div>
      
      <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500">
        <h4 className="font-semibold text-green-800 mb-2">📝 Answer Evaluation</h4>
        <p>
          How can we assist students in improving structured and essay-type answers by evaluating their responses using semantic scoring and offering actionable feedback aligned with curriculum standards?
        </p>
      </div>
      
      <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500">
        <h4 className="font-semibold text-green-800 mb-2">🔁 Spaced Repetition</h4>
        <p>
          How can we optimize vocabulary memorization in biology by customizing spaced review intervals based on the difficulty of terms and the student’s recall performance?
        </p>
      </div>

    </div>
  ),
}
,
  {
  label: "Research Objectives",
  content: (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-gray-700 text-base">
      
      <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500">
        <h4 className="font-semibold text-green-800 mb-2">📚 AI Summarization</h4>
        <p>
          To develop a summarization tool that generates clear, concise, and customizable summaries from A/L biology materials, with voice output and support for multiple learning styles.
        </p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500">
        <h4 className="font-semibold text-green-800 mb-2">🧪 Adaptive Quizzes</h4>
        <p>
          To create a quiz platform that adapts MCQ difficulty in real-time based on student performance and provides detailed feedback and analytics to support targeted learning.
        </p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500">
        <h4 className="font-semibold text-green-800 mb-2">📝 Answer Evaluation</h4>
        <p>
          To build a system that evaluates student-written structured and essay-type answers, offers improvement suggestions, and tracks individual progress using relevant scoring models.
        </p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500">
        <h4 className="font-semibold text-green-800 mb-2">🔁 Spaced Repetition</h4>
        <p>
          To implement a vocabulary learning tool using the SM-2 algorithm that adjusts review intervals based on recall difficulty, helping students retain complex biology terms effectively.
        </p>
      </div>

    </div>
  ),
}


];

export default function ResearchDomain() {
  const [activeTab, setActiveTab] = useState(0);

  // Sections that should have the outer border (index-based)
  const borderedSections = [0, 1]; // Background and Research Gap

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
        <div
          className={`p-6 md:p-8 rounded-xl shadow-md transition-all duration-300 ${
            borderedSections.includes(activeTab)
              ? "bg-white border-l-4 border-green-500"
              : "bg-white"
          }`}
        >
          {sections[activeTab].content}
        </div>
      </div>
    </section>
  );
}
