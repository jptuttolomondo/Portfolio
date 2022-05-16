import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8tp9r25', 'template_j5novrm', form.current, 'EMr3kvKEaIB2-cS5s')
          .then((result) => {
              alert('Mensage Enviado');
                            console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
      };


    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>jptuttolomondo@hotmail.com</h5>
                        <a href="mailto:jptuttolomondo@hotmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>Whatsapp</h4>
                        <h5>+543887400710</h5>
                        <a href="https://wa.me/+543887400710" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className="contact__option-icon"/>
                        <h4>Linkedin</h4>
                        <h5>Juan Pablo Tuttolomondo</h5>
                        <a href="https://www.linkedin.com/in/juan-pablo-tuttolomondo" target='_blank'>Send a message</a>
                    </article> 
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your Full Name" required/>
                    <input type="email" name='email' placeholder="Your Email" required/>
                    <textarea name='message' rows='7' placeholder="Your Message" required></textarea>
                    <button type='submit' className="btn btn-primary">Send Message</button>
                </form>
                
<script type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>


            </div>
            
        </section>
    );
}

export default Contact;