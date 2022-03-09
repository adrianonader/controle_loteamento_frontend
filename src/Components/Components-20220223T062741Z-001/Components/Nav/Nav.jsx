import React, { useState, useRef } from "react";
import "./Nav.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <header>
      <div>
        <nav className="menusanduiche">
          <GiHamburgerMenu />
        </nav>
      </div>
    </header>
  );
}

export default Nav;
