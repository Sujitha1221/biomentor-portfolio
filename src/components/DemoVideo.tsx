import React from 'react';

const DemoVideo: React.FC = () => {
  return (
    <section id="demo-video" className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-green-700 text-center mb-16">
          🎥 UI Demo Video
        </h2>
        <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-500 transition-all hover:shadow-lg">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[500px] rounded-lg"
              src="https://www.youtube.com/embed/ndSQbrTyQm4"
              title="Project Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo; 