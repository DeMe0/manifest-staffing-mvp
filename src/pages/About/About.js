import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <img src="https://media.licdn.com/dms/image/D4E03AQEAO9KWhWLAKQ/profile-displayphoto-shrink_800_800/0/1678214483266?e=2147483647&v=beta&t=-FnvbFK6x5aB7I0TdzNNy9c1pgWVOgJamfn5lHyFvKw" />
      <Link to="/">Home</Link>
      About
    </div>
  );
};
