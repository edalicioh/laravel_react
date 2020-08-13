import React from "react";

import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard: React.FC = ({...props}) => {
    return (
        <div className="wrapper">
            <Navbar>
            <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#">
                        <FaBars />
                    </a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/dashboard/home" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/dashboard/lista" className="nav-link">
                        Contact
                    </Link>
                </li>
            </Navbar>
            <Aside />
            <div className="content-wrapper">
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
