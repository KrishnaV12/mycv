import React from 'react';
import "./resume.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const Skills = ({ value: { icon, name, level } }) => {
    const bar_width = `${level}%`
    return (
        <div className="bar">
            <div className="bar__wrapper" style={{
                'width': bar_width
            }}>
                <span className="bar__name">
                    <img src={icon} alt="icon" className="bar__icon mr-4 m-lg-2"  />{name}
                </span>

            </div>

        </div>
    );
};

export default Skills;