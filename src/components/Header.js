import "./Header.css";
import React from "react";

const Header = (props) => {

    function toggleMenu() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
    }

    return (
        <div id="header">
            <div className="topnav">
                <a href="/#/" className="active">Park Market</a>
                <div id="myLinks">
                    <a href="#profile">Profile</a>
                    <a href="#messages">Messages</a>
                    <a href="#yourpost">Your Posts</a>
                </div>
                <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </div>
    )
}

export default Header;
