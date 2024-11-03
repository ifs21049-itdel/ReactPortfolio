import React from "react";
import tabithaImage from "../assets/tabitha.jpg";
import aboutImage from "../assets/about.jpg";

const Hero = () => {
  return (
    <div className="hero bg-slate-500 w-full text-white" id="home">
      <div className="container mx-auto py-16">
        <div className="flex flex-wrap items-center">
          {/* Left Content - Hero Section */}
          <div className="w-full md:w-1/2 px-4">
            <div className="hero-content space-y-4">
              <div className="hero-text">
                <p className="text-lg">I'm</p>
                <h1 className="text-4xl font-bold">Tabitha Aquila Lamsari Marbun</h1>
                <div className="typed-text text-indigo-800 text-xl font-medium mt-2">
                  UI/UX Designer and Web Developer
                </div>
              </div>

              <div className="hero-btn mt-6 items-center space-x-4">
                <a
                  className="btn bg-indigo-900 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md"
                  href="https://drive.google.com/file/d/1dDoPDdc69cE692XkWVRYnfiYc167B2Kt/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Right Image - Hero Section */}
          <div className="w-full md:w-1/2 px-4 hidden md:block">
            <div className="hero-image">
              <img
                src={tabithaImage}
                alt="Tabitha Aquila"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      {/* <div className="about bg-slate-500 text-white py-16" id="about"> */}
        <div className="container mx-auto flex flex-wrap items-center py-16">
          {/* Left Image - About Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="about-img">
              <img
                src={aboutImage}
                alt="About Tabitha"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>

          {/* Right Content - About Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="about-content space-y-6">
              <div className="section-header text-left">
                <p className="text-lg font-semibold text-indigo-800">Learn About Me</p>
                <h2 className="text-3xl font-bold">Undergraduate Informatics Student</h2>
              </div>
              <div className="about-text">
                <p className="text-lg">
                  As a third-year Informatics student, I've done several IT-related projects.
                  Here's a summary of the skills I've gained during my academic pursuits.
                </p>
              </div>

              {/* Skills Section */}
              <div className="skills space-y-4">
                <div className="skill">
                  <div className="flex justify-between text-sm font-semibold">
                    <p>Web Development</p>
                    <p>85%</p>
                  </div>
                  <div className="bg-gray-700 h-2 rounded-full">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div className="skill">
                  <div className="flex justify-between text-sm font-semibold">
                    <p>UI/UX Design</p>
                    <p>95%</p>
                  </div>
                  <div className="bg-gray-700 h-2 rounded-full">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>

                <div className="skill">
                  <div className="flex justify-between text-sm font-semibold">
                    <p>Software Quality Assurance</p>
                    <p>90%</p>
                  </div>
                  <div className="bg-gray-700 h-2 rounded-full">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div className="skill">
                  <div className="flex justify-between text-sm font-semibold">
                    <p>Android Mobile Development</p>
                    <p>70%</p>
                  </div>
                  <div className="bg-gray-700 h-2 rounded-full">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Hero;
