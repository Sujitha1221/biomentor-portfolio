const tools = [
  { name: "React", icon: "⚛️", description: "Frontend UI development" },
  { name: "Tailwind CSS", icon: "🎨", description: "Modern utility-first CSS" },
  {
    name: "TypeScript",
    icon: "🧠",
    description: "Static typing for JavaScript",
  },
  { name: "Python", icon: "🐍", description: "AI/ML backend services" },
  {
    name: "TensorFlow",
    icon: "🧮",
    description: "Model training & evaluation",
  },
  {
    name: "HuggingFace Transformers",
    icon: "🤗",
    description: "LLM fine-tuning & inference",
  },
  { name: "MongoDB", icon: "🍃", description: "NoSQL database for analytics" },
  { name: "FastAPI", icon: "⚡", description: "Lightweight Python backend" },
  {
    name: "Vite",
    icon: "🚀",
    description: "Blazing fast dev server for React",
  },
  {
    name: "Azure",
    icon: "☁️",
    description: "Cloud hosting and deployment (CI/CD)",
  },
  {
    name: "GitHub Actions",
    icon: "🔁",
    description: "Automation workflows for building, testing, deploying",
  },
  {
    name: "OCR (Tesseract)",
    icon: "🔍",
    description: "Text extraction from scanned content & images",
  },
];

export default function Tools() {
  return (
    <section
      id="tools"
      className="py-24 bg-gradient-to-br from-green-50 via-white to-emerald-100"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-green-700 mb-16">
          🛠️ Tools & Technologies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md ${
                index % 2 === 0
                  ? "bg-white border-l-4 border-green-400"
                  : "bg-gradient-to-r from-green-100 to-emerald-200"
              }`}
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-bold text-green-800">{tool.name}</h3>
              <p className="text-sm text-gray-700 mt-2">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
