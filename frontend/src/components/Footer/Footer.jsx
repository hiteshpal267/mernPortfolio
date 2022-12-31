 

import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub,   BsLinkedin ,BsStackOverflow,BsWhatsapp} from "react-icons/bs";
import "./Footer.css";
import resume from "./resume.pdf"

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Hitesh Pal. I am a Full-Stack Developer and a
          currently pursuing B.Tech from <b>Rajkiya Engineering College,Sonbhadra</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
        <Link to={resume} className="footerContactBtn"  target="_blank">
          <Typography>Resume</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/hiteshpal267" target="black">
          <BsGithub />
        </a>
         
        <a href="https://stackoverflow.com/users/20521764/hitesh-pal" target="black">
          <BsStackOverflow />
        </a>
        <a href="https://www.linkedin.com/in/hitesh-pal-21b2b3189/" target="black">
          <BsLinkedin />
        </a>
        <a href="https://wa.me/9839818343" target="black">
          <BsWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Footer;