// ProfilePage.js
import React from "react";
import "./ProfilePage.css";

function ProfilePage() {
  const user = {
    name: "Thaneshowar Joshi",
    age: 22,
    email: "Thaneshowarjoshi2022@gmail.com",
    photoUrl: "https://via.placeholder.com/150", 
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS", "Python"],
  };
  const projects = [
    {
      id: 1,
      title: "AI Virtual Mouse",
      description: "Operate a virtual mouse using webcam",
      demoUrl: "https://example.com/project1-demo",
    },
    {
      id: 2,
      title: "Movie Recommendation System",
      description: "Recommends movies based on user's interests",
      demoUrl: "https://example.com/project2-demo",
    },
    {
      id: 3,
      title: "Zamil-Kebab",
      description: "Loyalty point system for restaurants",
      demoUrl: "https://zamil-kebab-loyalty-points.com/",
    },
  ];

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={user.photoUrl} alt={user.name} className="profile-photo" />
        <div className="user-info">
          <h1>{user.name}</h1>
          <p className="email">{user.email}</p>
          <p className="age">Age: {user.age}</p>
        </div>
      </div>
      <div className="section">
        <h2>Skills</h2>
        <ul className="skills">
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Projects</h2>
        <ul className="projects">
          {projects.map((project) => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;
