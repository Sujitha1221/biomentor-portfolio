export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-green-700 mb-6">🌱 About BioMentor</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          <span className="font-medium text-green-800">BioMentor</span> is an <span className="font-semibold text-green-700">AI-powered personalized learning platform</span> built specifically for 
          <span className="font-semibold text-green-700"> A/L Biology students in Sri Lanka</span>. Developed by final-year undergraduates at SLIIT, it integrates cutting-edge technologies such as:
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-gray-700 text-base">
          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500">
            <h4 className="font-semibold text-green-800 mb-2">📚 Intelligent Summarization</h4>
            <p>Utilizes Retrieval-Augmented Generation (RAG) to convert lengthy content into digestible summaries.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500">
            <h4 className="font-semibold text-green-800 mb-2">🧪 Adaptive Assessments</h4>
            <p>Generates MCQs and quizzes dynamically based on student performance using Item Response Theory (IRT).</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500">
            <h4 className="font-semibold text-green-800 mb-2">📝 Answer Evaluation</h4>
            <p>Evaluates student responses using large language models and semantic similarity scoring.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500">
            <h4 className="font-semibold text-green-800 mb-2">🔁 Spaced Repetition</h4>
            <p>Improves retention using the SM-2 algorithm, optimizing review intervals based on recall difficulty.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
