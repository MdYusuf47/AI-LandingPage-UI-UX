import React from "react";
import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <Logo />
        <div>AI Startup Landing Page</div>
      </div>
      <div>
        <nav>
          <a href="#">Features</a>
          <a href="#">Developers</a>
          <a href="#">Company</a>
          <a href="#">Blog</a>
          <a href="#">Change log</a>
        </nav>
      </div>
      <div>
        <XSocial />
        <InstaSocial />
        <YTSocial />
      </div>
    </footer>
  );
};

export default Footer;
