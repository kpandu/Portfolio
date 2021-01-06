import React, { useState, useRef } from "react";
import CustomContainer from "../Shared/CustomContainer";
import "./Navbar.css";
import svgimg from "../../assets/logo.svg";
import { MenuList, MenuItem, IconButton, Popover } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
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
            <p href="#About">About</p>
          </MenuItem>
          <MenuItem>
            <p href="#About">Skills</p>
          </MenuItem>
          <MenuItem>
            <p href="#About">Leadership</p>
          </MenuItem>
          <MenuItem>
            <p href="#About">Experience</p>
          </MenuItem>
          <MenuItem>
            <p href="#About">Projects</p>
          </MenuItem>
          <MenuItem>
            <p href="#About">Contact</p>
          </MenuItem>
        </MenuList>
      </Popover>
    </div>
  );
  const desktopNavbar = (
    <div className="nav-link-container-desktop">
      <p href="#About">About</p>
      <p href="#About">Skills</p>
      <p href="#About">Leadership</p>
      <p href="#About">Experience</p>
      <p href="#About">Projects</p>
      <p href="#About">Contact</p>
    </div>
  );
  return (
    <div className="navbar">
      <CustomContainer maxWidth="xl">
        <img src={svgimg} />
        {desktopNavbar}
        {mobileNavbar}
      </CustomContainer>
    </div>
  );
}

export default Navbar;
