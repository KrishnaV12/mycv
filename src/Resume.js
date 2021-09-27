import React from 'react';
import react from './assets/icons/react.svg'
import python from './assets/icons/python.svg'
import repair from './assets/icons/repair.svg'
import css from './assets/icons/css.svg'
import html from './assets/icons/html.png'
import github from './assets/icons/github.svg'
import "./resume.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Skills from './Skills';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const technicalSkill = [
    {
        icon: python,
        name: 'Python Programming',
        level: '60'
    },
    {
        icon: react,
        name: 'React.JS',
        level: '60'
    },
    {
        icon: react,
        name: 'HTML',
        level: '60'
    },
    {
        icon: react,
        name: 'CSS',
        level: '60'
    },
    {
        icon: react,
        name: 'MySQL',
        level: '60'
    },
    {
        icon: react,
        name: 'GITHUB',
        level: '60'
    }
]

const nonTechnicalSkills = [
    {
        icon: react,
        name: 'Project Management',
        level: '100'
    },
    {
        icon: react,
        name: 'Strong decision maker ',
        level: '100'
    },
    {
        icon: react,
        name: 'Complex problem solver ',
        level: '100'
    },
    {
        icon: react,
        name: 'Creative design  ',
        level: '100'
    },
    {
        icon: react,
        name: 'Service-focused  ',
        level: '100'
    },
    {
        icon: react,
        name: 'Innovative  ',
        level: '100'
    },

]


const certi = [
    {
        icon: react,
        name: 'Boostrap Framework (2020-2021)',
        level: '217'
    },
    {
        icon: react,
        name: 'Python programming (2019-2020)',
        level: '217'
    },
    {
        icon: react,
        name: 'Cyber Security & Internet Of Things (2019-2020)   ',
        level: '217'
    },
   
]

const languages = [
    {
        icon: react,
        name: 'HINDI : Full Professional Proficiency ',
        level: '100'
    },
    {
        icon: react,
        name: 'ENGLISH : Professional Working Proficiency  ',
        level: '100'
    },
]


const hobbys = [
    {
        icon: react,
        name: 'Bike Riding & Travelling  ',
        level: '60'
    },
  
    {
        icon: react,
        name: 'Decorations & Painting',
        level: '60'
    },
   
   

]

const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card" >
               
                    <h3 className="resume-card__heading ">
                    B.TECH
                    </h3>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science & Enginnering
                        </h5>
                        <p className="resume-card__name">
                        Lovely Professional University (2017-2020)
                        <h3 className="resume-card__name">Panjab</h3>
                        </p>
                        
                        
                    </div>
                    <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading ">
                        XII
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        HSC BOARD
                        
                        </h5>
                        <p className="resume-card__name">
                        Patuck Junior College
                        <h3 className="resume-card__name">Mumbai (2013-2015)</h3>
                        </p>
                    </div>
                    </div>
                    
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading ">
                        DIPLOMA
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        Computer Science & Enginnering
                        
                        </h5>
                        <p className="resume-card__name">
                        M.H.S.S.P. Polytechnic (2015-2017)
                        
                        <h3 className="resume-card__name">Mumbai</h3></p>
                    </div>

                    <div className="col-lg-6 resume-card " >
                    <h4 className="resume-card__heading ">
                        X
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        SSC BOARD
                        
                        </h5>
                        <p className="resume-card__name">
                        Patuck Tech High School
                        
                        <h3 className="resume-card__name">Mumbai (2012-2013)</h3></p>
                    </div>
                    </div>
                    
                </div>



            
            <div className="row">
                <div className="col-lg-6 resume-languages mt-3">
                    <h5 className="resume-language__heading">
                    Technical Skills :
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            technicalSkill.map(technicalSkill =>
                                <Skills value={technicalSkill} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages mt-3">
                    <h5 className="resume-language__heading">
                        Non-Technical Skills :
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            nonTechnicalSkills.map(nonTechnicalSkills => <Skills value={nonTechnicalSkills} />)
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages mt-3">
                    <h5 className="resume-language__heading">
                    Hobbys :
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            hobbys.map(hobbys => <Skills value={hobbys} />)
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages mt-3">
                    <h5 className="resume-language__heading">
                    Languages :
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map( languages => <Skills value={ languages} />)
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages mt-3">
                    <h5 className="resume-language__heading">
                    Certifications :
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            certi.map( certi => <Skills value={ certi} />)
                        }
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Resume;