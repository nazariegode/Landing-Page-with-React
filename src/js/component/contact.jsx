import React from "react";

const Contact = () => {
    return (
        <form className="bg-dark text-white" id="contact">
            <div className="container py-5">
                <div>
                    <h3>¡Contact Us here!</h3>
                </div>
                <div className="mb-3">
                    <label className="form-label">Name and Last Name</label>
                    <input type="text" className="form-control" />
                    <div className="form-text">Put your info inside the label</div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                    <div className="form-text">Put your email inside the label</div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="4"></textarea>
                    <div className="form-text">Write your message here</div>
                </div>

                <button type="submit" className="btn btn-secondary">Submit</button>
            </div>
        </form>
    );
}

export default Contact;
