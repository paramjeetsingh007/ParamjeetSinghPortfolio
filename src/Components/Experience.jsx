import React from "react";

function Experience() {
  const experiences = [
    {
      role: "SDE Intern",
      company: "Success Ladder Company",
      duration: "4 Months",
      description:
        "Worked on full-stack web development using the MERN stack. Developed scalable and efficient web applications, implemented RESTful APIs, optimized database queries, and enhanced UI/UX for a seamless user experience. Collaborated with cross-functional teams to improve performance and security.",
    },
    {
      role: "MERN Stack Developer",
      company: "Freelance Projects",
      duration: "Ongoing",
      description:
        "Designed and developed multiple web applications using React.js, Node.js, Express.js, and MongoDB. Integrated third-party APIs, implemented authentication (JWT, Firebase), optimized backend performance, and built real-time features like chat systems and live notifications. Delivered customized solutions for clients, ensuring high scalability and responsiveness.",
    },
  ];
  

  return (
    <div id="experience" className="w-full bg-primary text-white py-10 px-6">
      {/* Section Title */}
      <div className="text-center">
        <h1 className="text-4xl font-playfair pb-4 relative inline-block">
          Experience
          <span className="absolute left-0 bottom-0 w-full h-1 bg-link"></span>
        </h1>
      </div>

      {/* Experience Timeline */}
      <div className="mt-10 flex flex-col gap-6 lg:w-3/4 mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105"
          >
            <h2 className="text-xl font-bold font-roboto text-link">{exp.role}</h2>
            <h3 className="text-lg font-semibold font-roboto">{exp.company}</h3>
            <p className="text-sm text-gray-300 font-roboto">{exp.duration}</p>
            <p className="mt-2 text-gray-400 font-roboto">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
