import React from "react";

function AboutMe() {
  return (
    <div
      id="about"
      className="w-full bg-primary text-white flex flex-col items-center px-5 py-10 lg:py-16"
    >
      {/* Section Title with Full-Width Border */}
     
        <h1 className=" text-4xl font-playfair text-center border-b-4 border-link pb-2 mb-10 ">
          About Me
          
        </h1>
      

      <div className="w-[90%] flex flex-col items-center gap-6 lg:flex-row lg:justify-around mt-6">
        {/* Image Section */}
        <div className="flex justify-center lg:w-1/2 hover:transition hover:ease-in-out hover:scale-105">
          <img
            src="/about.jpg"
            alt="About Me"
            className="rounded-lg w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
          <p className="text-lg lg:text-xl leading-relaxed font-playfair">
            Hello! I'm{" "}
            <span className="font-bold text-link">Paramjeet Singh</span>, a
            passionate <span className="font-bold">MERN Stack Developer</span>{" "}
            with a strong foundation in building scalable and high-performance
            web applications. I specialize in modern technologies like{" "}
            <span className="font-bold">React.js, Node.js, Express.js,</span>{" "}
            and <span className="font-bold">MongoDB</span>, crafting
            user-friendly and efficient solutions.
            <br />
            <br />
            My journey in web development is driven by a deep love for
            problem-solving, continuous learning, and turning creative ideas
            into functional digital experiences. I thrive on writing clean,
            maintainable code and staying updated with the latest industry
            trends to deliver the best solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
