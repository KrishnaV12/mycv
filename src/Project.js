import React, { useState } from 'react';

import ProjectCard from './ProjectCard';
import "./project.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import covid from './assets/image/covid.png'
import gas from './assets/image/gas.png'
import intruder from './assets/image/intruder.png'
import res from './assets/image/res.png'
import port from './assets/image/port.png'



const data_projects = [
    {
        name: 'COVID 19 tracker',
        image: covid,
        github_url: 'https://krishnav12.github.io/covidapp/',
        
        
    },

    {
        name: 'Blue Ice Kitchen',
        image: res,
        github_url: 'https://krishnav12.github.io/resturant/',
       
        
    },

    {
        name: 'Home Security',
        image: intruder,
        github_url: 'https://github.com/KrishnaV12/iothomesecurity',
        
    },

    {
        name: 'Gas Monitoring',
        image: gas,
        github_url: 'https://krishnav12.github.io/gasmonitoring/',
      
    },

    {
        name: 'Portfolio',
        image: port,
        github_url: 'https://krishnav12.github.io/portfolio/',
    
    },

  
]










const Projects = () => {
    const [projects, setProjects] = useState(data_projects)

   
    return (
        <div className="container projects">
            <div className="projects__navbar">
               <h3>My Projects</h3>
            </div>
            <div className="row">

                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;