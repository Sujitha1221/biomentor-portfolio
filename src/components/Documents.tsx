const allDocuments = [
  {
    category: "Project Proposal",
    files: [
      "Proposal-report-IT21068478",
      "Proposal-report-IT21204302",
      "Proposal-report-IT21264634",
      "Proposal-report-IT21375132",
    ],
  },
  {
    category: "Status Documents",
    files: [
      "IT21068478-Status Document-1",
      "IT21375132-Status Document-1",
      "IT21264634-Status Document-1",
      "IT21204302-Status Document-1",
      "IT21068478-Status Document-2",
      "IT21375132-Status Document-2",
      "IT21264634-Status Document-2",
      "IT21204302-Status Document-2",
    ],
  },
  {
    category: "Presentations",
    files: [
      "Proposal Presentation",
      "Progress Presentation 1",
      "Progress Presentation 2",
      "FinalPresentation",
    ],
  },
  {
    category: "Research Paper",
    files: ["Research Paper"],
  },
  {
    category: "Final Reports",
    files: [
      "2023-042 -Final Group Report",
      "IT21068478_Final Report",
      "IT21375132_Final Report",
      "IT21264634_Final Report",
      "IT21204302_Final Report",
    ],
  },
  {
    category: "Logbooks",
    files: [
      "IT21068478-Log Book",
      "IT21204302-Log Book",
      "IT21264634-Log Book",
      "IT21375132-Log Book",
    ],
  },
  {
    category: "Registration Docs",
    files: ["Topic Assessment", "Project Charter Document"],
  },
];

export default function Documents() {
  return (
    <section id="documents" className="py-24 bg-gradient-to-b from-white to-green-50">
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
                    <div className="text-sm font-medium text-gray-800">{file}</div>
                  </div>
                  <div className="mt-4">
                    <a
                      href={`/docs/${file.replace(/\s+/g, '-')}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-green-600 font-semibold hover:underline"
                    >
                      View PDF →
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
