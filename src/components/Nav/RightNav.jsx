import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(121, 78, 9, 1) 35%,
      rgba(255, 218, 0, 1) 100%
    );
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -30px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    z-index: 1;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      font-size: 1.5em;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/contact-us">
        <li>Contact</li>
      </Link>
    </Ul>
  );
};

export default RightNav;
