export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-green-800 leading-tight mb-6">
            Biology Made Brilliant <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Smarter Tools, Better Grades 
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-lg">
            BioMentor personalizes education using intelligent summarization, adaptive quizzes, answer evaluation,
            and spaced repetition - built for smarter biology learning.
          </p>
          <a
            href="#about"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-full transition duration-300 shadow-lg"
          >
            🚀 Get Started
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center items-center py-8">
  <img
    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGszd3ppYzJxaHh2cjF5bnh5Y2lkemxsYmZvOGkyMDJxNXJ5ejN1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yeUxljCJjH1rW/giphy.gif"
    className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg"
  />
</div>

      </div>
    </section>
  );
}
