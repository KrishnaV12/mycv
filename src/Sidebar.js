import react from "react";
import facebook from "./assets/icons/facebook.svg";
import instagram from "./assets/icons/instagram.svg";
import github from "./assets/icons/github.svg";
import mail from "./assets/icons/mail.png";
import dob from "./assets/icons/dob.png";
import mobile from "./assets/icons/github.svg";
import location from "./assets/icons/location.png";
import tie from "./assets/icons/tie.png";
import linkedin from "./assets/icons/linkedin.svg";
import profile from "./assets/image/profile.jpg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import "./sidebar.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import resume from "./assets/resume.pdf";






const sidebar =()=>{
    const handlemail=()=>{
        window.open("mailto:krishnanew99@gmail.com")
    }
    return(
        <>
        <div className="sidebar">
            <img src={profile} alt="avatar" className="sidebar_avatar"/>
            <div className="sidebar_name">Krishna <span>Vishwakarma</span></div>
            <div className="sidebar_item sidebar_title">Im a Software Engineer</div>
            
            
            <a href={resume} download="resume.pdf">
                <div className="sidebar_item sidebar_resume">
                    <img src={tie} alt="resume" className="sidebar_icon" />Download Resume
                
            
                </div>
            </a>
            
            
            
            <div className="sidebar_social-icon my-2 ">
                <a href="https://www.facebook.com/profile.php?id=100005854893515"><img src={facebook} alt="facebook" className="sidebar_icon my-3"/></a>
                <a href="https://www.instagram.com/its.vishkrish/?hl=en"><img src={instagram} alt="instagram" className="sidebar_icon"/></a>
                <a href="www.linkedin.com/in/krish379"><img src={linkedin} alt="linkedin" className="sidebar_icon"/></a>
               
            </div>
            
            
            
            <div className="contact">
                <div className="sidebar_item sidebar_github">
                    <a href="https://github.com/KrishnaV12" ><img src={github} alt="github" className="sidebar_icon" /></a>
                </div>
            
            
                <div className="sidebar_location">
                    <img src={location} alt="location" className="sidebar_icon aling=center"/>BANGALORE , INDIA
                </div>
            
                <div className="sidebar_item">
                <img src={mail} alt="mail" className="sidebar_icon aling=center"/>krishnanew99@gmail.com</div>
                <div className="sidebar_item">
                <img src={mobile} alt="mobile" className="sidebar_icon aling=center"/>9967339082</div>
                <div className="sidebar_item">
                <img src={dob} alt="dob" className="sidebar_icon aling=center"/>2ND FRBRUARY 1999</div>

            </div>
            <div className="sidebar_item sidebar_email" onClick={handlemail}>Mail Me</div>
        </div>

        </>


    );
};

export default sidebar;