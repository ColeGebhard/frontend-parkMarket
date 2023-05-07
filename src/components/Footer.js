import "./Footer.css";
import React, { useState } from "react";

const Footer = (props) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleMessageChange(event) {
        setMessage(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Title: ${title}\nMessage: ${message}\nEmail: ${email}`);
    }

    return (
        <div id="footer">
        
            <h1 className="footerCategory">Contact</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={handleTitleChange} />
                </label>
                <label>
                    Message:
                    <textarea value={message} onChange={handleMessageChange} />
                </label>
                {!props.isLoggedIn &&
                    <label>
                        Email:
                        <input type="email" value={email} onChange={handleEmailChange} />
                    </label>
                }
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Footer;
