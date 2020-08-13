import React from "react";

const Navbar: React.FC = ({ ...props }) => (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">{props.children}</ul>
    </nav>
);

export default Navbar;
