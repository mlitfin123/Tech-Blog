import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_s2e1vlm', 'template_ns2ubq2', e.target, 'user_F50HIjhG7V6zUkMAsw8UL')
            .then((result) => {
                console.log(result.text);
                alert("Thanks for your email, we will respond shortly")
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
        }
    return (
        <main>
            <div class="row">
                <div class="col">
                    <h1 className="title">Contact</h1>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <label>Name:</label>
                        <div className="form-group">
                            <input type="hidden" name="contact_number" />
                            <input type="text" name="from_name" placeholder="Name"/>
                        </div>
                        <label>Email:</label>
                        <div className="form-group">
                            <input type="email" name="from_email" placeholder="Email"/>
                        </div>
                        <label>Subject: </label>
                        <div className="form-group">
                            <input type="text" name="subject" placeholder="Subject"/>
                        </div>
                        <label>Message: </label>
                        <div className="form-group">
                            <textarea name="html_message" placeholder="Message" rows="4" cols="50"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Contact;