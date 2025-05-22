const features = [
  {
    title: "AI Summarization",
    desc: "Developed and analyzed in both monolithic and microservices architectures, this tool uses the Flan-T5 base model with RAG to generate structured summaries and notes with voice output. Notes are available in English, Tamil, and Sinhala."
  },
  {
    title: "Adaptive Quizzes",
    desc: "Generates MCQs dynamically and adjusts difficulty in real-time using Item Response Theory (IRT), student performance tracking, and semantic filtering to enhance personalized practice."
  },
  {
    title: "Answer Evaluation",
    desc: "Evaluates structured and essay-type responses using semantic similarity, grammar scoring, and curriculum-aligned model answers to provide personalized feedback and performance insights."
  },
  {
    title: "Spaced Repetition",
    desc: "Uses the SM-2 algorithm to schedule personalized vocabulary reviews based on recall performance, with daily flashcards, pronunciation support, and progress tracking."
  },
];


export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-green-700 text-center mb-16">
          🌱 Key Features Overview
        </h2>
        <div className="relative border-l-4 border-green-200 space-y-12">
          {features.map((feature, index) => (
            <div key={index} className="relative pl-10 group">
              {/* Number Badge */}
              <span className="absolute -left-5 top-1 w-10 h-10 bg-green-500 text-white font-bold text-sm rounded-full flex items-center justify-center shadow-md ring-2 ring-white">
                {index + 1}
              </span>

              {/* Card */}
              <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md border-l-[4px] border-green-400 transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold text-green-800">{feature.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
