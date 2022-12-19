// import React from "react";
// import "./Footer.css"
// import {BsGithub,BsYoutube,BsInstagram,BsLinkedin} from "react-icons/bs"
// import { Link } from "react-router-dom";
// import { Typography } from "@mui/material";
// const Footer = ()=>{
//     return(
//         <div className="footer">
//       <div>
//         <Typography variant="h5">About Me</Typography>
//         <Typography>
//           Hey, my name is Hitesh Pal. I am a Full-Stack Developer and a
//           tutorial on Youtube channel called <b> 6 Pack Programmer</b>
//         </Typography>

//         <Link to="/contact" className="footerContactBtn">
//           <Typography>Contact Us</Typography>
//         </Link>
//       </div>
//       <div>
//         <Typography variant="h6">Social Media</Typography>
//         <a href="https://github.com/meabhisingh/" target="black">
//           <BsGithub />
//         </a>
         
         
//         <a href="https://www.linkedin.com/in/meabhisingh/" target="black">
//           <BsLinkedin />
//         </a>
//       </div>
//     </div>
//     )
// }

// export default Footer;

import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin ,BsStackOverflow} from "react-icons/bs";
import "./Footer.css";

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
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/hiteshpal267" target="black">
          <BsGithub />
        </a>
        {/* <a href="https://youtube.com/6packprogrammer/" target="black">
          <BsYoutube />
        </a> */}
        <a href="https://stackoverflow.com/users/20521764/hitesh-pal" target="black">
          <BsStackOverflow />
        </a>
        <a href="https://www.linkedin.com/in/hitesh-pal-21b2b3189/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;