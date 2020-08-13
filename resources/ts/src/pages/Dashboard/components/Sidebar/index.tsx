import React from "react";
import { Link } from "react-router-dom";

import { FaTachometerAlt, FaAngleLeft } from "react-icons/fa";

import { menu } from "../../../../config/Menu";
import Navbar from "../Navbar";

const Sidebar: React.FC = () => {
    console.log(menu);

    return (
        <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img
                        src="https://adminlte.io/themes/dev/AdminLTE/dist/img/user2-160x160.jpg"
                        className="img-circle elevation-2"
                        alt="User Image"
                    />
                </div>
                <div className="info">
                    <Link to="/" className="d-block">
                        Alexander Pierce
                    </Link>
                </div>
            </div>
            <nav className="mt-2">
                <ul
                    className="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                >

                        {menu.map((iten, i ) => {
                            if (iten.submenu?.length) {
                                return (
                                    <li  key={i} className="nav-item has-treeview">
                                        <a className="nav-link" href="#">
                                                {<iten.icon className="nav-icon" />}
                                                <p>
                                                    {iten.text}
                                                    <FaAngleLeft className="right" />
                                                </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            {iten.submenu?.map((subIten , j) => {
                                               return( <li  key={j} className="nav-item">
                                                    <Link  to={subIten.url}  className="nav-link">
                                                        {<subIten.icon className="nav-icon" />}
                                                        <p>{subIten.text}</p>
                                                    </Link>
                                                </li>
                                               )
                                            })}
                                        </ul>
                                    </li>
                                )
                            }
                            return(
                                <li key={i} className="nav-item">
                                    <Link to={iten.url}  className="nav-link">
                                        {<iten.icon className="nav-icon" />}
                                        <p>{iten.text}</p>
                                    </Link>
                                </li>
                            )
                        })}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
