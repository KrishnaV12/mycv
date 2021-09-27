import React from 'react';
import github from './assets/icons/github.png';
import Projects from './Project';
import "./project.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const ProjectCard = ({ project: { name, image, github_url } }) => {
    return (
        <div className="projectrCard col-md-6 col-lg-4 my-2">
            <figure className="projectCard__wrapper">
              
                    <img src={image} alt={name} className="projectCard__image" />
                
                <div className="projectCard__title">
                    <a href={github_url} target="_blank">
                        <img src={github} alt="github link" className="projectCard__icon" />
                    </a>
                    {name}
                </div>
            </figure>

        </div>
    );
};

export default ProjectCard;