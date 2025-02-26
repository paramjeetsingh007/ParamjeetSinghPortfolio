import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      title: 'Blog App',
      description:
        'Sharing knowledge made easy! My Blog Application is a dynamic platform built using React.js, Node.js/Express, and MongoDB, enabling users to create, edit, and share blog posts effortlessly.',
      image: '/BlogApp.png',
      link: 'https://blog-app-frontend-puce-alpha.vercel.app/',
      Github: 'https://github.com/paramjeetsingh007/BlogApp-Backend.git',
    },
    {
      title: 'Smart Expense Tracker',
      description:
        'Managing finances has never been easier! My Expense Tracker is a powerful web application built using React.js, Node.js/Express, and MongoDB, designed to help users track their expenses and income efficiently.',
      image: '/ExpenseTracker.png',
      link: 'https://expense-tracker-six-smoky.vercel.app/',
      Github: 'https://github.com/paramjeetsingh007/ExpenseTracker.git',
    },
    {
      title: 'AI Resume Builder',
      description:
        'Job hunting made smarter! My AI Resume Builder is an intelligent application built using React, Clerk, Strapi, and PostgreSQL, designed to generate professional resumes instantly based on user-provided details.',
      image: '/ResumeBuilder.png',
      link: 'https://resume-builder-frontend-cjjk.vercel.app/',
      Github: 'https://github.com/paramjeetsingh007/ResumeBuilderBackend.git',
    },
    {
      title: 'Notes Saver Application',
      description:
        'NoteNest is a powerful Firebase-based note-saving and sharing web app. It allows users to create, store, and share notes securely in real time. The app has a clean, user-friendly interface with a modern design.',
      image: '/Notes.png',
      link: 'https://note-nest-chi.vercel.app/',
      Github: 'https://github.com/paramjeetsingh007/NoteNest.git',
    },
    {
      title: 'Weather Application',
      description:
        'This is a Weather Application that provides real-time weather updates for any city using the Weather API. The app has a modern, responsive UI with smooth animations and a professional design.',
      image: '/Weather.png',
      link: 'https://weather-application-five-phi.vercel.app/',
      Github: 'https://github.com/paramjeetsingh007/Weather-Application.git',
    },
    {
      title: 'TextMorph',
      description:
        'TextMorph is a versatile text transformation and analysis tool designed to streamline text editing tasks. With its intuitive and user-friendly interface, TextMorph empowers users to perform various text operations effortlessly.',
      image: '/Text.png',
      link: 'https://text-morph-xi.vercel.app/',
      Github: 'https://github.com/paramjeetsingh007/TextMorph-.git',
    },
  ];

  return (
    <div id="projects" className="w-full py-10 px-5 bg-primary text-link">
     <div className="text-center mb-5">
        <h1 className="text-4xl font-playfair  pb-4 relative inline-block">
          Projects
          <span className="absolute left-0 bottom-0 w-full h-1 bg-link"></span>
        </h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-secondary shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 border border-gray-200"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-roboto  text-white">{project.title}</h2>
              <p className="text-white mt-2 font-roboto">{project.description}</p>

              {/* Buttons */}
              <div className="mt-4 flex justify-between">
                <Link
                to={project.link}
                
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-primary transition font-roboto border"
                >
                  Live Demo
                </Link>

                <Link
                  to={project.Github}
                 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition font-roboto border"
                >
                  GitHub Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
