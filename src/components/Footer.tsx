export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <div className="text-center sm:text-left">
          <p className="font-semibold">© {new Date().getFullYear()} BioMentor</p>
          <p className="text-green-100">Empowering A/L Biology learning with AI</p>
        </div>
        <div className="flex space-x-4">
          <a href="#about" className="hover:underline text-green-100">About</a>
          <a href="#milestones" className="hover:underline text-green-100">Milestones</a>
          <a href="#contact" className="hover:underline text-green-100">Contact</a>
        </div>
      </div>
    </footer>
  );
}
