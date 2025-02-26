import React from "react";

function Skills() {
  const data = {
    "Programming Languages": [
      { name: "JavaScript", image: "/Language/javascript.webp" },
      { name: "C", image: "/Language/C.png" },
      { name: "C++", image: "/Language/C++.png" },
    ],
    "Framework and Libraries": [
      { name: "ReactJs", image: "/FrameWork/React.png" },
      { name: "NodeJs", image: "/FrameWork/Nodejs.png" },
      { name: "ExpressJs", image: "/FrameWork/Express.png" },
      { name: "Bootstrap", image: "/FrameWork/bootstrap.jpg" },
      { name: "Tailwind CSS", image: "/FrameWork/Tailwind.png" },
    ],
    "Database": [
      { name: "MongoDB", image: "/Database/MongoDB.png" },
      { name: "MySQL", image: "/Database/Mysql.png" },
    ],
    "Tools and Platforms": [
      { name: "Git & GitHub", image: "/Tools/Git.png" },
      { name: "Postman", image: "/Tools/postman.png" },
      { name: "Render", image: "/Tools/Render.png" },
      { name: "Vercel", image: "/Tools/vercel.png" },
    ],
  };

  return (
    <div id="skills" className="w-full py-12 px-6 bg-primary text-white">
      {/* Section Title */}
      <div className="text-center mb-5">
        <h1 className="text-4xl font-playfair  pb-4 relative inline-block">
         Skills
          <span className="absolute left-0 bottom-0 w-full h-1 bg-link"></span>
        </h1>
      </div>

      {/* Skills Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {Object.entries(data).map(([category, skills], index) => (
          <div
            key={index}
            className="border p-8 rounded-xl shadow-lg bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <h2 className="text-3xl font-semibold font-roboto text-center border-b-2 pb-3 mb-6 text-link">
              {category}
            </h2>
            <div className="grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-5 justify-center">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center transition-transform transform hover:scale-110 duration-300 font-roboto">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg"
                  />
                  <p className="text-xl mt-3 font-roboto">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
