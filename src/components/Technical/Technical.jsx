import React, { useEffect } from 'react';
import './Technical.css';
import { Icon } from '@iconify/react';
import html5 from '@iconify-icons/logos/html-5';
import cPlusplus from '@iconify-icons/logos/c-plusplus';
import pythonIcon from '@iconify-icons/logos/python';
import css3 from '@iconify-icons/logos/css-3';
import javascriptIcon from '@iconify-icons/logos/javascript';
import flutterIcon from '@iconify-icons/logos/flutter';
import fileTypeDartlang from '@iconify-icons/vscode-icons/file-type-dartlang';
import Aos from "aos";
import "aos/dist/aos.css";

function Technical() {
    useEffect(()=>{
        Aos.init({duration:500});
    },[]);

    return (
        <div id="technical">
            <h1 className="technical-header" data-aos="fade-up"><span>Technical Skills</span></h1>
            <div className="techno" data-aos="flip-up">
                <div className="t0">
                    <h2 className="tech-header2">Programming Languages</h2>
                    <Icon icon={cPlusplus} className="logo-img"/>
                    <Icon icon={pythonIcon} className="logo-img"/>
                    <p className="tech-header3">
                        My Preferred Programming Languages Are C++ And Python. Along With These Two Languages I Also Know Basics Of C And Dart.
                    </p>
                </div>

                <div className="t0" data-aos="flip-up">
                    <h2 className="tech-header2">HTML, CSS</h2>
                    <Icon icon={html5} className='logo-img'/>
                    <Icon icon={css3} className='logo-img'/>
                    <p className="tech-header3">
                        I Have Worked With HTML And Designed Websites Using CSS. Actually These Were The First Few Things I Came To Know When I Was Learning Web Development.
                    </p>
                </div>

                <div className="t0" data-aos="flip-up">
                    <h2 className="tech-header2">Javascript</h2>
                    <Icon icon={javascriptIcon} className='logo-img'/>
                    <p className="tech-header3">
                        I Have Acquired A Certificate In Vanilla JavaScript And As I Am Learning Full Stack Developmet, I Am Aware With The JavaScript Libraries Like ReactJs Too.
                    </p>
                </div>
            </div>
            <div className="techno" data-aos="flip-up">
                <div className="t2">
                    <h2 className="tech-header2">Flutter</h2>
                    <Icon icon={flutterIcon} className='logo-img'/>
                    <Icon icon={fileTypeDartlang} className='logo-img'/>
                    <p className="tech-header3">
                    Flutter is an open-source UI SDK Created By Google Written In Dart Programming Language. I Have Made Many Mobile Applications With Flutter.
                    </p>
                </div>

                <div className="t2" data-aos="flip-up">
                    <h2 className="tech-header2">ReactJS</h2>
                    <Icon icon="logos:react" className='logo-img'/>
                    <p className="tech-header3">
                    I Am Learning Full Stack Development Right Now. I Am Planning To Go With The MERN Stack. I Have Covered The Basics Of MongoDB, ExpressJS And ReactJs.
                    </p>
                </div>

                <div className="t2" data-aos="flip-up">
                    <h2 className="tech-header2">Video Editing</h2>
                    <Icon icon="ant-design:video-camera-outlined" className='logo-img'/>
                    <p className="tech-header3">
                        This Is One Of My Favourite Hobbies. I Have Worked With Clients And Earned Money During My Second Year In The College. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Technical;