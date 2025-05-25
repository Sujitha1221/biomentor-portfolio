const allDocuments = [
  {
    category: "Project Proposal",
    files: [
      { name: "Proposal Report - IT21375132", path: "IT21375132-Project-Proposal.pdf" },
      { name: "Proposal Report - IT21068478", path: "IT21068478-Project-Proposal.pdf" },
      { name: "Proposal Report - IT21264634", path: "IT21264634-Project-Proposal.pdf" },
      { name: "Proposal Report - IT21204302", path: "IT21204302-Project-Proposal.pdf" },
    ],
  },
  // {
  //   category: "Status Documents",
  //   files: [
  //     { name: "Status Document 1 - IT21375132", path: "IT21375132_Status_Document_1.pdf" },
  //     { name: "Status Document 1 - IT21068478", path: "IT21068478_Status_Document_1.pdf" },
  //     { name: "Status Document 1 - IT21264634", path: "IT21264634_Status_Document_1.pdf" },
  //     { name: "Status Document 1 - IT21204302", path: "IT21204302_Status_Document_1.pdf" },
  //     { name: "Status Document 2 - IT21375132", path: "IT21375132_Status_Document_2.pdf" },
  //     { name: "Status Document 2 - IT21068478", path: "IT21068478_Status_Document_2.pdf" },
  //     { name: "Status Document 2 - IT21264634", path: "IT21264634_Status_Document_2.pdf" },
  //     { name: "Status Document 2 - IT21204302", path: "IT21204302_Status_Document_2.pdf" },
  //   ],
  // },
  {
    category: "Final Reports",
    files: [
      { name: "Final Report - IT21375132", path: "IT21375132_Final-Report.pdf" },
      { name: "Final Report - IT21068478", path: "IT21068478_Final-Report.pdf" },
      { name: "Final Report - IT21264634", path: "IT21264634_Final-Report.pdf" },
      { name: "Final Report - IT21204302", path: "IT21204302_Final-Report.pdf" },
      { name: "Final Group Report", path: "Final_Report-24_25J_257.pdf" },
    ],
  },
  // {
  //   category: "Logbooks",
  //   files: [
  //     { name: "Log Book - IT21375132", path: "IT21375132-Log Book.pdf" },
  //     { name: "Log Book - IT21068478", path: "IT21068478-Log Book.pdf" },
  //     { name: "Log Book - IT21264634", path: "IT21264634-Log Book.pdf" },
  //     { name: "Log Book - IT21204302", path: "IT21204302-Log Book.pdf" },
  //   ],
  // },
  {
    category: "Presentations",
    files: [
      { name: "Proposal Presentation", path: "Proposal_Presentation-24-25J-257.pdf" },
      { name: "Progress Presentation 1", path: "Progress_Presentation_1-24-25J-257.pdf" },
      { name: "Progress Presentation 2", path: "Progress_Presentation_2-24-25J-257.pdf" },
      { name: "Final Presentation", path: "Final_Presentation.pdf" },
    ],
  },
  {
    category: "Research Paper",
    files: [
      { name: "Research Paper", path: "Research_Paper-24-25J-257.pdf" },
    ],
  },
  {
    category: "Registration Docs",
    files: [
      { name: "Topic Assessment", path: "TAF_24-25J-257.pdf" },
      // { name: "Project Charter Document", path: "Project_Charter_Document.pdf" },
    ],
  },
];



export default function Documents() {
  return (
    <section
      id="documents"
      className="py-24 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-green-700 mb-16">
          📚 Project Documents
        </h2>

        {allDocuments.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              {section.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.files.map((file, i) => (
                <div
                  key={i}
                  className="bg-white p-4 border border-green-200 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📄</div>
                    <div className="text-sm font-medium text-gray-800">
                      {file.name}
                    </div>
                  </div>
                  <div className="mt-4 text-center space-x-4">
                    <a
                      href={`/docs/${file.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 font-semibold hover:underline"
                    >
                      View →
                    </a>
                    <a
                      href={`/docs/${file.path}`}
                      download
                      className="text-sm text-green-600 font-semibold hover:underline"
                    >
                      Download ↓
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
