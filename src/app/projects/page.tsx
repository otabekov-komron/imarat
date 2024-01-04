'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Project {
  category: string;
  // other properties...
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://imarat.onrender.com/api/projects"
        );
        setProjects(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <p>{project.category}</p>
            {/* Render other project details here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
