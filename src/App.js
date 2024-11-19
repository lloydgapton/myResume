import React from 'react';
import './index.css';
import './App.css';

function Resume(){
  return(
    <div className="p-10 max-w-5xl mx-auto">
      {/* Centered Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">ABDULQUADRI OLANREWAJU</h1>
        <div className="mt-2">
          <span>Lagos, NG | </span>
          <span>abdulquadri.olanrewaju10@gmail.com</span>
          {' | '}
          <a 
            href="https://github.com/lloydgapton" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 underline"
          >
            github.com/lloydgapton
          </a>
        </div>
      </div>

      {/* Experience Section */}
      <div className="border-b-2 border-black mb-4">
        <h2 className="text-xl font-semibold">EXPERIENCE</h2>
      </div>
      <div className="mb-4">
        <div className="flex justify-between">
          <div>
            <strong>ALX AFRICA - SOFTWARE ENGINEERING PROGRAM</strong>
            <br />
            <em>Software Engineer Trainee</em>
          </div>
          <div className="text-right">
            Aug 2023 - Sep 2024
          </div>
        </div>
        <ul className="list-disc pl-5">
          <li>Built full-stack applications using Python, JavaScript, and MySQL, enhancing technical proficiency.</li>
          <li>Collaborated on real-world projects, applying agile methodologies and GitHub for version control.</li>
          <li>Developed problem-solving and debugging skills through hands-on coding challenges.</li>
          <li>Enhanced personal skills in debugging, testing, and optimizing code for performance and scalability.</li>
        </ul>
      </div>

      {/* Capstone Projects Section */}
      <div className="border-b-2 border-black mb-4">
        <h2 className="text-xl font-semibold">CAPSTONE PROJECTS</h2>
      </div>
      <div className="mb-4">
        <div className="flex justify-between">
          <div>
            <strong>FOOD RECIPES PROJECT (SOLO PROJECT)</strong>
          </div>
          <div className="text-right">
            Aug 2024
          </div>
        </div>
        <ul className="list-disc pl-5 max-w-4xl">
          <li>Developed a responsive food recipe website using HTML, Tailwind CSS, and React, enabling users to search for recipes by entering keywords.</li>
          <li>Connected to the Forkify API to fetch relevant recipe data, displaying images and ingredient lists based on user input.</li>
          <li>Implemented a user-friendly search bar on the homepage to enhance the browsing experience.</li>
        </ul>
      </div>

      <div className="mb-4">
        <div className="flex justify-between">
          <div>
            <strong>STATIONARY DATABASE (SCHOOL TEAM PROJECT)</strong>
          </div>
          <div className="text-right">
            July 2024
          </div>
        </div>
        <ul className="list-disc pl-5 max-w-4xl">
          <li>Led the development of a stationary database using DB SQLite Browser, by applying SQL knowledge in the project.</li>
        </ul>
      </div>

      <div className="mb-4">
        <div className="flex justify-between">
          <div>
            <strong>SIMPLE INTEREST CALCULATOR PROJECT</strong>
          </div>
          <div className="text-right">
            Jul 2022
          </div>
        </div>
        <ul className="list-disc pl-5 max-w-4xl">
          <li>Built a responsive Simple Interest Calculator App with Html, Css, and JavaScript, allowing users to input a certain amount of money they wish to save, the number of years of maturity, and the interest rate, then the projected payout is calculated and outputted.</li>
        </ul>
      </div>

      {/* Skills Section */}
      <div className="border-b-2 border-black mb-4">
        <h2 className="text-xl font-semibold">SKILLS</h2>
      </div>
      <p className="mb-4">
        Github, Python, HTML/CSS, JavaScript, React.js, Tailwind, pandas, numpy, flutter, linux
      </p>

      {/* Education Section */}
      <div className="border-b-2 border-black mb-4">
        <h2 className="text-xl font-semibold">EDUCATION</h2>
      </div>
      <div className="mb-4">
        <div className="flex justify-between">
          <div>
            <strong>LAGOS STATE UNIVERSITY</strong>
            <br />
            Bachelor of Science, Department of Mathematics
          </div>
          <div className="text-right">
            Lagos, NG
            <br />
            Jan 2024 - Present
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between">
          <div>
            <strong>ALX SOFTWARE ENGINEERING</strong>
            <br />
            Full Stack Software Development
          </div>
          <div className="text-right">
            Aug 2023 - Sep 2024
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between">
          <div>
            <strong>MICHIGAN UNIVERSITY (VIA COURSERA)</strong>
            <br />
            Python For Everybody Specialization
          </div>
          <div className="text-right">
            Apr 2023 - June 2023
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between">
          <div>
            <strong>META (VIA COURSERA)</strong>
            <br />
            Meta Front-End Developer Professional Certificate
          </div>
          <div className="text-right">
            Oct 2022 - Mar 2023
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between">
          <div>
            <strong>FREECODECAMP</strong>
            <br />
            Responsive Web Design
          </div>
          <div className="text-right">
            May 2022 - Nov 2022
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between">
          <div>
            <strong>IBM (VIA COURSERA)</strong>
            <br />
            Full-stack Software Developer Programme
          </div>
          <div className="text-right">
            New York, NY
            <br />
            Jan 2022 - Sep 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;