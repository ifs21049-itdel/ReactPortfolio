import React from 'react';

const About = () => {
  const skills = [
    { name: 'Web Development', level: 85 },
    { name: 'UI/UX Design', level: 95 },
    { name: 'Software Quality Assurance', level: 90 },
    { name: 'Android Mobile Development', level: 70 },
  ];

  return (
    <section id="about" className="about py-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 p-6">
            <div className="about-img">
              <img
                src="img/about.jpg"
                alt="About me"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <div className="about-content">
              <div className="section-header text-left">
                <p className="text-indigo-600 text-lg font-semibold">Learn About Me</p>
                <h2 className="text-3xl font-bold text-gray-800">
                  Undergraduate Informatics Student
                </h2>
              </div>
              <div className="about-text mt-4">
                <p className="text-gray-600">
                  As a third-year Informatics student, I've done several IT-related projects.
                  Here's a summary of skills that I've gained during my academic pursuits.
                </p>
              </div>
              <div className="skills mt-6 space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-gray-800 font-medium">{skill.name}</p>
                      <p className="text-gray-800 font-medium">{skill.level}%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
