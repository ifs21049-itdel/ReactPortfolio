import React from 'react';
import Portfolio1 from '../assets/portfolio-1.png';
import Portfolio2 from '../assets/portfolio-2.png';
import Portfolio3 from '../assets/portfolio-3.png';
import Portfolio4 from '../assets/portfolio-4.jpg';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'SEMAT IT Del Website',
      description: 'Work in a team of 6 with scrum development methodologies. Focused on Facilities and Announcement page, I took a role as a front-end programmer and UI Designer.',
      image: Portfolio1,
      link: 'https://semat.del.ac.id/',
      delay: '0.0s',
    },
    {
      title: "IT Del's Homepage Re-design",
      description: 'Re-designing the homepage of the IT Del website is one of the Human Computer Interaction course projects that I worked on for approximately 5 days in the 4th semester.',
      image: Portfolio2,
      link: 'https://www.figma.com/proto/FtlTamnbdjE7u0h03pVZH8/Figma-IT-Del?page-id=0%3A1&type=design&node-id=1-4&viewport=728%2C175%2C0.3&t=oOzb0OYOBHuL4S6o-1&scaling=min-zoom&mode=design',
      delay: '0.2s',
    },
    {
      title: "IT Del's Online Library Re-design",
      description: "Re-designing IT Del's Online Library Website as an exam project for the Human Computer Interaction course. I worked on it for approximately 3 days.",
      image: Portfolio3,
      link: 'https://www.figma.com/proto/FtlTamnbdjE7u0h03pVZH8/Figma-IT-Del?page-id=0%3A1&type=design&node-id=1-4&viewport=728%2C175%2C0.3&t=oOzb0OYOBHuL4S6o-1&scaling=min-zoom&mode=design',
      delay: '0.4s',
    },
    {
      title: 'Android Mobile Application',
      description: 'Developed an Android Mobile Application using Kotlin as a mobile application development course project in my 6th semester. This was my first time using Kotlin and Android Studio.',
      image: Portfolio4,
      link: 'https://youtu.be/Xwqvd4s3NKI',
      delay: '0.6s',
    },
  ];

  return (
    <div className="portfolio py-20 bg-gray-100" id="portfolio">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-500">My Portfolio</p>
          <h2 className="text-4xl font-bold text-gray-800">My Excellent Portfolio</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 max-w-xs sm:max-w-sm"
              style={{ animationDelay: item.delay }}
            >
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <a
                    className="text-blue-500 hover:text-blue-700"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
