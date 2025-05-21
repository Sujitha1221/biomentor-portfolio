const features = [
  {
    title: "AI Summarization",
    desc: "Uses Retrieval-Augmented Generation (RAG) and Flan-T5 to generate accurate, structured content summaries.",
  },
  {
    title: "Adaptive Quizzes",
    desc: "Dynamically generates and adjusts MCQ difficulty using Item Response Theory (IRT).",
  },
  {
    title: "Answer Evaluation",
    desc: "Leverages semantic similarity models to analyze and score answers with rich feedback.",
  },
  {
    title: "Spaced Repetition",
    desc: "Implements the SM-2 algorithm to schedule memory-optimized vocabulary and concept reviews.",
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
