import './About.css'; 
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600">About Us</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We are a team of passionate students, Pankaj Yadav and Anmol Kumar, who have collaborated to create this skill-sharing platform. 
          Our goal is to foster a community where individuals can learn, grow, and share knowledge in various fields.
        </p>
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-blue-600">Meet the Creators</h3>
          <div className="flex justify-center space-x-10 mt-8">
            {/* Pankaj's Image and Description */}
            <div className="flex flex-col items-center">
              <img
                src="path_to_pankaj_image.jpg" // Replace with Pankaj's image URL
                alt="Pankaj Yadav"
                className="w-32 h-32 rounded-full border-4 border-blue-600"
              />
              <h4 className="mt-4 text-xl font-semibold">Pankaj Yadav</h4>
              <p className="text-gray-600 mt-2 max-w-xs mx-auto">
                Pankaj is passionate about web development and loves building scalable applications. He has experience with front-end and back-end technologies, and enjoys learning new programming languages.
              </p>
            </div>
            {/* Anmol's Image and Description */}
            <div className="flex flex-col items-center">
              <img
                src="path_to_anmol_image.jpg" // Replace with Anmol's image URL
                alt="Anmol Kumar"
                className="w-32 h-32 rounded-full border-4 border-blue-600"
              />
              <h4 className="mt-4 text-xl font-semibold">Anmol Kumar</h4>
              <p className="text-gray-600 mt-2 max-w-xs mx-auto">
                Anmol is passionate about AI/ML and enjoys solving real-world problems through technology. He has a strong background in machine learning and data science, and loves to work on innovative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
