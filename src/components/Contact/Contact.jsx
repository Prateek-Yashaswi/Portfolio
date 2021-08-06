import React, { useEffect } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import instagramIcon from '@iconify-icons/brandico/instagram';
import githubIcon from '@iconify-icons/cib/github';
import linkedinFill from '@iconify-icons/akar-icons/linkedin-fill';
import "aos/dist/aos.css";
import Aos from "aos";




function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_1gzstjn', 'template_uqbh51o', e.target, 'user_oIDy7FEI88pP1P3nTnv1G')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();

    alert("Email Sent. Prateek Will Reach You Soon !!!");
}

function openSocial(n){
    if(n===1){
        window.open("https://www.instagram.com/prateek_yashaswi/");
    }

    else if(n===2){
        window.open("https://github.com/Prateek-Yashaswi");
    }

    else if(n===3){
        window.open("https://www.linkedin.com/in/prateek-yashaswi/");
    }
}


function Contact() {
    useEffect(()=>{
        Aos.init({duration:700});
    },[]);
    return (
        <div id="contact">
            <div id="form-div" data-aos="fade-in">
                <div id="contact-form-div">
                    <form className="contact-form" onSubmit={sendEmail}>
                        <h1>Contact Me</h1>
                        <div class="info">
                            <input class="fname" type="text" autocomplete="off" name="from_name" placeholder="Full name" />
                            <input type="email" name="from_email" placeholder="Email" autocomplete="off" />
                            <input type="number" name="from_phone" placeholder="Phone" autocomplete="off" />
                            <input type="text" name="subject" placeholder="Subject" autocomplete="off" />
                        </div>
                        <br></br>
                        <p>Message</p>
                        <div>
                            <textarea name="message" rows="4" autocomplete="off"></textarea>
                        </div>
                        <div id="button-div">
                            <Button variant="dark" type="submit" id="submit-btn">Submit</Button>
                        </div>
                    </form>
                </div>
            </div>

            <div id="footer">
                <p>All Rights Reserved | Design by Prateek Yashaswi</p>
                <p>
                   <Button className="contact-logo-btn" variant="dark" onClick={()=>openSocial(1)}> <Icon icon={instagramIcon} className="contact-logo-img" /></Button>
                   <Button className="contact-logo-btn" variant="dark" onClick={()=>openSocial(2)}><Icon icon={githubIcon} className="contact-logo-img" /></Button> 
                   <Button className="contact-logo-btn" variant="dark" onClick={()=>openSocial(3)}> <Icon icon={linkedinFill} className="contact-logo-img" /> </Button>
                </p>

            </div>
        </div>

    );
}

export default Contact;