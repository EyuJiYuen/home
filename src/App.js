import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Eyu Ji Yuen",
      email: "youremail@example.com",
      phone: "123-456-7890",
      summary: "A brief summary about yourself.",
      experience: [
        {
          jobTitle: "Job Title 1",
          company: "Company Name 1",
          year: "2018 - 2020",
          description: "Description of your responsibilities in this job.",
        },
        {
          jobTitle: "Job Title 2",
          company: "Company Name 2",
          year: "2020 - Present",
          description: "Description of your responsibilities in this job.",
        },
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          school: "University Name",
          year: "2014 - 2018",
        },
      ],
    };
  }

  render() {
    return (
      <div className="cv">
        <header>
          <h1>{this.state.name}</h1>
          <p>{this.state.email}</p>
          <p>{this.state.phone}</p>
        </header>
        <section className="summary">
          <h2>Summary</h2>
          <p>{this.state.summary}</p>
        </section>
        <section className="experience">
          <h2>Experience</h2>
          <ul>
            {this.state.experience.map((job, index) => (
              <li key={index}>
                <h3>{job.jobTitle}</h3>
                <p>
                  {job.company} ({job.year})
                </p>
                <p>{job.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="education">
          <h2>Education</h2>
          <ul>
            {this.state.education.map((edu, index) => (
              <li key={index}>
                <h3>{edu.degree}</h3>
                <p>
                  {edu.school} ({edu.year})
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
