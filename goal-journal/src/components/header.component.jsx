import React from "react";

const Header = ({ props }) => (
  <div className='header'>
    <h1>100 day goal</h1>
    <button>AM</button>
    <button>PM</button>
    <p>these are props: {props}</p>
  </div>
);

export default Header;
