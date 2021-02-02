import React, { useState, useRef } from "react";
import CustomContainer from "../Shared/CustomContainer";
import "./Navbar.css";
import svgimg from "../../assets/logo.svg";
import { MenuList, MenuItem, IconButton, Popover } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = ({ currentTarget }) => {
    setIsOpen(!isOpen);
    setAnchorEl(currentTarget);
  };

  const mobileNavbar = (
    <div className="nav-link-container-mobile">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenuClick}
      >
        <MenuIcon style={{ fontSize: "50px" }} />
      </IconButton>
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        onClose={() => setIsOpen(false)}
      >
        <MenuList className="navbar-menu">
          <MenuItem>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>About</p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Skills</p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Education</p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Experience</p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Projects</p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p>Contact</p>
            </Link>
          </MenuItem>
        </MenuList>
      </Popover>
    </div>
  );
  const desktopNavbar = (
    <div className="nav-link-container-desktop">
      <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
        <p>About</p>
      </Link>
      <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
        <p>Skills</p>
      </Link>
      <Link to="education" spy={true} smooth={true} offset={50} duration={500}>
        <p>Education</p>
      </Link>
      <Link to="experience" spy={true} smooth={true} offset={50} duration={500}>
        <p>Experience</p>
      </Link>
      <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
        <p>Projects</p>
      </Link>
      <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
        <p>Contact</p>
      </Link>
    </div>
  );
  return (
    <div className="navbar">
      <CustomContainer maxWidth="xl" className="nav-container">
        <img src={svgimg} className="nav-logo" />
        {desktopNavbar}
        {mobileNavbar}
      </CustomContainer>
    </div>
  );
}

export default Navbar;
