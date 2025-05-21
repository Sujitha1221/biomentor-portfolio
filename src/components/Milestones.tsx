const milestones = [
  {
    title: "Project Topic Assessment",
    date: "January 2023",
    description: "Initial topic assessment document submitted. Included research problem, objectives, and task breakdown.",
    marks: "No marks allocated",
  },
  {
    title: "Project Charter Submission",
    date: "January 2023",
    description: "Finalized topic and submitted project charter including all key aspects of the research.",
    marks: "No marks allocated",
  },
  {
    title: "Project Proposal Presentation",
    date: "March 2023",
    description: "Presented the proposed research to a panel of judges.",
    marks: "Marks Allocation - 6%",
  },
  {
    title: "Project Proposal Report",
    date: "March 2023",
    description: "In-depth analysis and proposed solution submitted as a formal report.",
    marks: "Marks Allocation - 6%",
  },
  {
    title: "Status Document 1",
    date: "May 2023",
    description: "Overview of implementation tasks completed by team members.",
    marks: "Marks Allocation - 1%",
  },
  {
    title: "Progress Presentation 1",
    date: "May 2023",
    description: "Evaluation of 50% completion of the proposed solution.",
    marks: "Marks Allocation - 15%",
  },
  {
    title: "Research Paper Draft",
    date: "June 2023",
    description: "Submitted draft research paper for supervisor review.",
    marks: "Marks Allocation - 10%",
  },
  {
    title: "Final Thesis Submission",
    date: "September 2023",
    description: "Group and individual thesis documents submitted for evaluation.",
    marks: "Marks Allocation - 19%",
  },
  {
    title: "Progress Presentation 2",
    date: "September 2023",
    description: "Evaluation of 90% project completion.",
    marks: "Marks Allocation - 18%",
  },
  {
    title: "Log Book & Status Document 2",
    date: "October 2023",
    description: "Logbook and final implementation tasks summary submitted.",
    marks: "Marks Allocation - 3%",
  },
  {
    title: "Website Assessment",
    date: "November 2023",
    description: "Research website submitted for review.",
    marks: "Marks Allocation - 2%",
  },
  {
    title: "Final Presentation & Viva",
    date: "November 2023",
    description: "Final evaluation of the completed product by judges.",
    marks: "Marks Allocation - 20%",
  },
];

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 bg-gradient-to-b from-green-50 via-white to-green-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-extrabold text-center text-green-700 mb-16">🌿 Project Milestones</h2>
        <div className="relative border-l-4 border-gradient-to-b from-green-400 to-green-600 space-y-10">
          {milestones.map((m, i) => (
            <div key={i} className="relative pl-6 group">
              {/* Dot */}
              <span className="absolute -left-3 top-4 w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 shadow-lg rounded-full ring-4 ring-white group-hover:scale-110 transition-transform duration-200 ease-out"></span>

              {/* Card */}
              <div className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">{m.title}</h3>
                    <p className="text-sm text-gray-500">{m.date}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-600 text-white shadow">
                    {m.marks}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
