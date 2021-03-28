import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    document.title = "Fit-to-Tech"

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_s2e1vlm', 'template_nc6k0qa', e.target, 'user_F50HIjhG7V6zUkMAsw8UL')
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
            <div class="jumbotron p-4 p-md-2 text-white rounded bg-dark text-center">
                <h1>Contact</h1>
            </div>
                <div className="row">
                    <div className="col">
                    </div>
                <div className="col-11">
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
                <div className="col">
                </div>
            </div>
        </main>
    );
}

export default Contact;