import React, { useEffect } from 'react';
import '../About/About.css';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import "aos/dist/aos.css";
import Aos from "aos";

function onClickGHub() {
    window.open("https://github.com/Prateek-Yashaswi/Skin-Cancer-Detection-App");
}

function onClickABGI() {
    window.open("https://www.hackerearth.com/challenges/hackathon/agbi-digital-healthtech-grand-challenge/");
}

function onClickLink(n){
    if(n===1){
        window.open("https://drive.google.com/file/d/1y48fLgma32ol6J4akbx5OEWugCkDUijk/view?usp=sharing");
    }

    else if(n===2){
        window.open("https://drive.google.com/file/d/1WfzoJt-PxR7uP4IP23m9Ohq0mot0yhhi/view?usp=sharing");
    }

    else if(n===3){
        window.open("https://drive.google.com/file/d/1xOsdIfj1fwdLoAanBLhAPWiKD39i12Co/view?usp=sharing");
    }

    else if(n===4){
        window.open("https://coursera.org/share/e085f9ba82c46ae3b0cee8a384819e41");
    }

    else if(n===5){
        window.open("https://coursera.org/share/ee59d4f29499a385e75fb1e2cc51922d");
    }

    else if(n===6){
        window.open("https://coursera.org/share/cdc2bc5d7d9dd9293f6a7e24c29f61c3");
    }

    else if(n===7){
        window.open("https://coursera.org/share/00b8f316531cfdd73cd71bcbacb76119");
    }

    else if(n===8){
        window.open("https://drive.google.com/u/0/uc?id=1Ue0ezygYc6HH6Vx8X6TehVWcoYguS_x4&export=download");
    }
}
function About() {
    useEffect(()=>{
        Aos.init({duration:200,});
    },[]);

    return (
        <div id="about">
            <div className="heading" data-aos="fade-up"><h1><span>About Me</span></h1></div>
            <div id="total">
                <div className="background">
                    <div className="description" data-aos="slide-up">
                        <div className='description-text'>
                            <p>Hello There, <br></br><br></br>I am a Final year Student pursuing B.Tech in Computer Science and Engineering from SRM Institute of Science and Technology. I am currently working to enhance my skills in the field of Web and Application Development. I like to work with full determination and aim to deliver my work on time. Along with that, I am very eager to acquire knowledge about new concepts in the field of Technology. Few Things I Use To Counter Boredom Are Playing Online Games With Friends And Listening To Music.</p>

                        </div>

                    </div>
                    <div className="acadamics" data-aos="slide-up">
                        <h1><span>Education</span></h1>
                        <br></br>
                        <div id="school">
                            <div id="class-10" className="schoolAndClg">
                                <h2><span>AISSE</span></h2>
                                <p className="schoolAndClg-det">
                                    D.A.V Public School
                    </p>
                                <p className="schoolAndClg-det">
                                    Passing Year: 2016
                    </p>
                                <p className="schoolAndClg-det">
                                    Score: 9.6 CGPA
                    </p>
                            </div>
                            <br></br>
                            <div id="class-12" className="schoolAndClg">
                                <h2><span>AISSCE</span></h2>
                                <p className="schoolAndClg-det">
                                    B.R D.A.V Public School
                    </p>
                                <p className="schoolAndClg-det">
                                    Passing Year: 2018
                    </p>
                                <p className="schoolAndClg-det">
                                    Score: 80.8%
                    </p>
                            </div>
                        </div>
                        <br></br>
                        <div id="college" className="schoolAndClg">
                            <h2><span>B.Tech In Computer Science And Engineering</span></h2>
                            <p className="schoolAndClg-det">
                                S.R.M Institute Of Science And Technology
                    </p>
                            <p className="schoolAndClg-det">
                                Passing Year: 2022
                    </p>
                            <p className="schoolAndClg-det">
                                Score: TBA
                    </p>
                        </div>
                    </div>
                </div>
                <div className="achievements">
                    <Container className="achievements-container" data-aos="slide-up">
                        <h1>
                            <span>Achievements</span>
                        </h1>
                        <div className="achievement-desc">
                            <p>  Me Along With 3 Other Students Took Part In An Online Hackathon Named AGBI Healthtech Grand Challenge Under The Team Name "Health Fanatics". We Made A Skin Cancer Detection Mobile Application Using Flutter And Managed To Win The Second Prize And An Incubation Offer With AGBI.
                              </p>
                        </div>
                        <div className="achievement-button">
                            <Button variant="dark" className="achievement-btn" onClick={onClickGHub}>Check It Out On Github</Button>
                            <Button variant="dark" className="achievement-btn" onClick={onClickABGI}>Go To Their Website</Button>
                        </div>
                    </Container>
                    <br></br><br></br><br></br>
                    <Container className="achievements-container"  data-aos="slide-up">
                        <h1>
                            <span>Certificates</span>
                        </h1>
                        <div className="certificates">
                            <div className="certi-1">
                                <p>AISSE</p>
                                <Button variant="dark" size="sm" onClick={()=>onClickLink(1)}>Get Certificate</Button>
                            </div>

                            <div className="certi-2">
                                <p>AISSCE</p>
                                <Button variant="dark" size="sm" onClick={()=>onClickLink(2)}>Get Certificate</Button>
                            </div>

                            <div className="certi-3">
                                <p>Python</p>
                                <Button variant="dark" size="sm" onClick={()=>onClickLink(3)}>Get Certificate</Button>
                            </div>
                        </div>
                        <div className="certificates">
                            <div className="certi-1">
                                <p>HTML5</p>
                                <Button variant="dark" size="sm" onClick={()=>onClickLink(4)}>Get Certificate</Button>
                            </div>

                            <div className="certi-2">
                                <p>CSS3</p>
                                <Button variant="dark" size="sm" onClick={()=>onClickLink(5)}>Get Certificate</Button>
                            </div>

                            <div className="certi-3">
                                <p>JavaScript</p>
                                <Button variant="dark" size="sm" onClick={()=>onClickLink(6)}>Get Certificate</Button>
                            </div>
                        </div>  
                        <div className="certificates">
                            <div className="certi-1">
                                <p>Responsive Web Design</p>
                                <Button variant="dark" size="sm" onClick={()=>onClickLink(7)}>Get Certificate</Button>
                            </div>
                        </div>                       
                    </Container>
                    <br></br><br></br>
                    <Container className="achievements-container"  data-aos="slide-up">
                    <h1><span>Resume</span></h1>
                    <br></br><br></br>
                    <div className="resume">
                    <p>Click The Button To Download My Resume</p>
                    <Button variant="dark" size="sm" onClick={()=>onClickLink(8)}>Download Resume</Button>
                    </div>
                </Container>
                </div>
            </div>
        </div>
    );
}

export default About;