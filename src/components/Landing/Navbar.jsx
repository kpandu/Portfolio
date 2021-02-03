import React, { useState, useRef } from "react";
import CustomContainer from "../Shared/CustomContainer";
import "./Navbar.css";
import svgimg from "../../assets/logo.svg";
import { MenuList, MenuItem, IconButton, Popover } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-scroll";
import { Spring } from "react-spring/renderprops";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = ({ currentTarget }) => {
    setIsOpen(!isOpen);
    setAnchorEl(currentTarget);
  };

  const commonAnimationProps = {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 600 },
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
        <Spring {...commonAnimationProps} delay={200}>
          {(props) => <p style={props}>About</p>}
        </Spring>
      </Link>
      <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
        <Spring {...commonAnimationProps} delay={300}>
          {(props) => <p style={props}>Skills</p>}
        </Spring>
      </Link>
      <Link to="education" spy={true} smooth={true} offset={50} duration={500}>
        <Spring {...commonAnimationProps} delay={400}>
          {(props) => <p style={props}>Education</p>}
        </Spring>
      </Link>
      <Link to="experience" spy={true} smooth={true} offset={50} duration={500}>
        <Spring {...commonAnimationProps} delay={500}>
          {(props) => <p style={props}>Experience</p>}
        </Spring>
      </Link>
      <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
        <Spring {...commonAnimationProps} delay={600}>
          {(props) => <p style={props}>Projects</p>}
        </Spring>
      </Link>
      <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
        <Spring {...commonAnimationProps} delay={700}>
          {(props) => <p style={props}>Contact</p>}
        </Spring>
      </Link>
    </div>
  );
  return (
    <div className="navbar">
      <CustomContainer maxWidth="xl" className="nav-container">
        <Spring {...commonAnimationProps} config={{ duration: 1500 }}>
          {(props) => <img src={svgimg} style={props} className="nav-logo" />}
        </Spring>

        {desktopNavbar}
        {mobileNavbar}
      </CustomContainer>
    </div>
  );
}

export default Navbar;
