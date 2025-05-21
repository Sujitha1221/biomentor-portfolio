const highlights = [
  {
    title: "Summarization",
    icon: "🧠",
    description:
      "Uses Retrieval-Augmented Generation (RAG) and Flan-T5 to summarize educational content into concise, structured formats.",
  },
  {
    title: "Adaptive Quiz",
    icon: "📊",
    description:
      "Dynamically adjusts difficulty levels using Item Response Theory (IRT) for personalized learning.",
  },
  {
    title: "Answer Evaluation",
    icon: "📝",
    description:
      "Leverages LLaMA 3 and semantic similarity to score structured and essay-type answers with adaptive feedback.",
  },
  {
    title: "Spaced Repetition",
    icon: "🔁",
    description:
      "Incorporates SM-2 algorithm to enhance long-term memory retention through spaced learning intervals.",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-green-700 mb-16">🌿 Research Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-green-500"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-green-800">{item.title}</h3>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
