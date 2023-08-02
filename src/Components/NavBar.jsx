import React from "react";
import "../Css/NavBar.css";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import ThreePIcon from "@mui/icons-material/ThreeP";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";


export default function NavBar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showBars, setShowbars] = useState(true);

  const HandleOpen = () => {
    setShowSidebar(true);
    setShowbars(false);
  };
  const HandleClose = () => {
    setShowSidebar(false);
    setShowbars(true);
  };

  const navigate = useNavigate();

  return (
    <>
    
        <div className="nav-bar">
          <div className="nav-logo">
            <div>Career</div>
            <div>Guidance Technology</div>
          </div>
          <div className="nav-btn">
            <ul className="btn-list">
              <li>
                <Button
                  variant="text"
                  startIcon={<HomeIcon />}
                  className="navbtn-icon"
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  Home
                </Button>
              </li>
              <li>
                <Button
                  variant="text"
                  startIcon={<ContactsIcon />}
                  className="navbtn-icon"
                  onClick={() => {
                    navigate("/referralpage");
                  }}
                >
                  Referral
                </Button>
              </li>
              <li>
                <Button
                  variant="text"
                  startIcon={<ThreePIcon />}
                  className="navbtn-icon"
                  onClick={() => {
                    navigate("/studentpage");
                  }}
                >
                  Student
                </Button>
              </li>
              <li>
                <Button
                  variant="text"
                  startIcon={<PhotoCameraFrontIcon />}
                  className="navbtn-icon"
                >
                  Trainer
                </Button>
              </li>
              <li>
                <Button
                  variant="text"
                  endIcon={<LogoutIcon />}
                  className="navbtn-icon"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Logout
                </Button>
              </li>
            </ul>
          
          </div>
        </div>
        
    </>
  );
}
