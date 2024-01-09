import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://admin.imarat.uz/api/vacancies'); // Use relative path if you've set up API routes
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Vacancies</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <p>{project}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
