import React from 'react';
import "./Footer.css"
import { Icon } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import CopyrightIcon from '@mui/icons-material/Copyright';


const Footer = () => {
  return (
    <footer className="footercontainer">
        <div className="footercontainer__logo">            
            <a href="#"><InstagramIcon style={{fontSize:"35px"}}/></a>
            <a href="#"><FacebookIcon style={{fontSize:"35px"}}/></a>
            <a href="#"><XIcon style={{fontSize:"35px"}}/></a>
            <a href="#"><LanguageIcon style={{fontSize:"35px"}}/></a>
        </div>
        <div>
            <CopyrightIcon />Copyright 2024 GreenTrend.in
        </div>
    </footer>
  )
}

export default Footer