import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
function Home() {
  return (
    <>
      <div
        id="home"
        className="w-full h-[600px] bg-primary flex flex-col space-y-5 justify-center items-center sm:flex-row sm:justify-between sm:items-center"
      >
        <div className="mt-10 sm:ml-10 w-[300px] ">
          <div className="flex flex-col items-center justify-center">
            <h1 className=" text-2xl sm:text-4xl text-white text-center font-playfair">
              Welcome to My Portfolio!{" "}
            </h1>
            <p className="text-white text-xl sm:text-2xl pt-3 font-roboto">
              Hi, I'm <b>Paramjeet Singh</b>
            </p>
            <ReactTyped
              strings={[
                "MERN Stack Developer",
                "React.js Developer",
                "Node.js Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              loop
            >
              <input
                type="text"
                className="bg-transparent text-lg sm:text-xl pt-2 font-roboto"
              />
            </ReactTyped>
          </div>

          {/* Resume Download Button */}
          <div className="flex items-center justify-center">
            <a
              href="/Paramjeet_Resume.pdf" // Make sure your resume is placed inside the 'public' folder
              download="/Paramjeet_Resume.pdf"
              className="mt-4 inline-block bg-secondary text-white  font-roboto px-6 py-2 rounded-lg shadow-lg hover:bg-gray-300 hover:text-black transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-[40%] p-4 sm:p-8 hover:transition hover:ease-in-out hover:scale-105">
  <img
    src="/param.jpg"
    alt="portfolio"
    className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-full md:rounded-full lg:rounded-full mx-auto"
  />
</div>

      </div>
    </>
  );
}

export default Home;
