import React from "react";
import { Dropdown } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const DropDownProfile = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="link"
        id="dropdown-profile"
        className="text-white"
        style={{ display: "flex", alignItems: "center", border: 'none', backgroundColor: 'transparent' }} // No border or background
      >
        <FaUserCircle className="icons" style={{ fontSize: '1.5rem' }} />
      </Dropdown.Toggle>

      <Dropdown.Menu align="end" className="bg-dark">
        <Dropdown.Item as={Link} to="/auth/login" className="text-white">
          Login
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/auth/signup" className="text-white">
          Signup
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownProfile;
