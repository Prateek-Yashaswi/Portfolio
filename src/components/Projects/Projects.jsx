import React, { useEffect } from 'react';
import '../Projects/Projects.css';
import { Jumbotron, Button } from 'react-bootstrap';
import "aos/dist/aos.css";
import Aos from "aos";

function openLink(n){
    if(n===1){
        window.open("https://github.com/Prateek-Yashaswi/Skin-Cancer-Detection-App");
    }

    else if(n===2){
        window.open("https://github.com/Prateek-Yashaswi/X-Ray-Vision");
    }

    else if(n===3){
        window.open("https://github.com/Prateek-Yashaswi/Highway-Companion-App");
    }

    else if(n===4){
        window.open("https://github.com/Prateek-Yashaswi/Portfolio");
    }

    else if(n===5){
        window.open("https://github.com/Prateek-Yashaswi/Payroll-Management-System");
    }

    else if(n===6){
        window.open("https://github.com/Prateek-Yashaswi/Random-Memes-Generator");
    }
}

function Projects() {
    useEffect(()=>{
        Aos.init({duration:500});
    },[]);
    return (
        <div id="projects">
            <div id="projects-header"  data-aos="fade-up">
                <h1>
                    <span id='projects-title'>My Projects</span>
                </h1>
            </div>

            <div id="project-name">
            <div id="skin-cancer" className="project-details">
                <Jumbotron className="projects-names-jumbo" data-aos="slide-up">
                    <h1><span>Skin Cancer Detection Application</span></h1>
                    <p>
                    Technologies Used: Flutter And TensorFlow Lite <br></br><br></br><br></br>
                    3-layered approach to detecting cancer, melanoma and allergies with state-of-the-art Tensorflow models, integrated into an app with exciting features using Flutter Android Dev.
                    </p>
                    <p>
                        <Button className="github-btn-skin" variant="dark" onClick={()=>openLink(1)}>Know more</Button>
                    </p>
                </Jumbotron>
            </div>

            <div id="xray">
                <Jumbotron className="projects-names-jumbo" data-aos="slide-up">
                    <h1><span>X-Ray Vision</span></h1>
                    <p>
                    Technologies Used: ReactJS, Firebase, NodeJS, Heroku, PyTorch And Detectron2 <br></br><br></br>
                    An interactive Web Application on React for medical experts and patients to localize and classify abnormalities in Chest Radiographs using advanced Deep Learning techniques.
                    </p>
                    <p>
                        <Button className="github-btn-xray" variant="dark" onClick={()=>openLink(2)}>Know more</Button>
                    </p>
                </Jumbotron>
            </div>

            <div id="hway">
                <Jumbotron className="projects-names-jumbo" data-aos="slide-up">
                    <h1><span>Highway Companion App</span></h1>
                    <p>
                    Technologies Used: Flutter <br></br>
                    <br></br>
                    <br></br>
                    A Mobile Application That Helps You With Information Like Traffic Situations, Weather Reports Along With Features Like SOS Calling In Case Of An Emergency When You Are Travelling.
                    </p>
                    <p>
                        <Button className="github-btn-hway" variant="dark" onClick={()=>openLink(3)}>Know more</Button>
                    </p>
                </Jumbotron>
            </div>
            </div>
            <h1 id="more"><span>Scroll For More</span></h1>
            <div id="project-name" className='project-2'>
            <div id="skin-cancer" className="project-details">
                <Jumbotron className="projects-names-jumbo" data-aos="slide-up">
                    <h1><span>Portfolio Website</span></h1>
                    <p>
                    Technology Used: React<br></br>
                    
                    <br></br><br></br>
                    This Is My Portfolio website Which Provides Information About Me Including My Certifications, Skills, Projects And Achievements. This Can Be A Way For You To Reach Me Easily Just By Filling In The Details Along With The Message.
                    </p>
                    <p>
                        <Button className="github-btn-skin" variant="dark" onClick={()=>openLink(4)}>Know more</Button>
                    </p>
                </Jumbotron>
            </div>

            <div id="xray">
                <Jumbotron className="projects-names-jumbo" data-aos="slide-up">
                    <h1><span>Payroll Management System</span></h1>
                    <p>
                    Mini-Project : DBMS <br></br>
                    Technology Used: Flutter, PHP And PHPMyAdmin<br></br><br></br>
                    A Flutter Application With A MySQL Database As Backend. The Application Takes The Details Of The User Along With Basic Salary, Bonus And Expenses And Calculates The In-Hand And Stores It In The Database.
                    </p>
                    <p>
                        <Button className="github-btn-xray" variant="dark" onClick={()=>openLink(5)}>Know more</Button>
                    </p>
                </Jumbotron>
            </div>
                
            <div id="hway">
            <Jumbotron className="projects-names-jumbo" data-aos="slide-up">
            <h1><span>Reddit - Random Post API</span></h1>
                    <p>
                    Technology Used: React<br></br>
                    
                    <br></br><br></br>
                    This Project Was Created While Learning ReactJS. It Is A WebApp Fetching Data From An API Which Looks For A Random Meme On Reddit And Displays It With Informations Like Title, SubReddit And Link To The Post Along With The Meme Itself.
                    </p>
                    <p>
                        <Button className="github-btn-xray" variant="dark" onClick={()=>openLink(6)}>Know more</Button>
                    </p>
                </Jumbotron>
            </div>
            </div>
        </div>
    );
}

export default Projects;