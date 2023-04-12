import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  border: 1px black solid;
  box-shadow: -5px -2px 4px rgba(0, 0, 0, 0.2);
  li {
    display: block;
    padding: 18px 10px;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease;
  }
  li:hover {
    background-color: #f2f2f2;
    color: #000;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
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
  @media (min-width: 769px) {
    flex-flow: row nowrap;
    height: fit-content;
    background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
    z-index: 1;
    transition: transform 0.3s ease-in-out;
    padding: 0 1em 0 1em;
    li {
      color: #000;
      font-size: 1.3em;
    }
    .link {
      text-decoration: none;
    }
    .link:active {
      color: white;
      animation: flash 0.5s;
    }
    @keyframes flash {
      0% {
        color: white;
      }
      50% {
        color: transparent;
      }
      100% {
        color: black;
      }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} className="ul">
      <Link className="link" to="/">
        <li>Home</li>
      </Link>
      <Link className="link" to="/about">
        <li>About</li>
      </Link>
      <Link className="link" to="/contact-us">
        <li>Contact</li>
      </Link>
    </Ul>
  );
};

export default RightNav;
