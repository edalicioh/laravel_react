import React from "react";
import {Link} from 'react-router-dom'

import "./styles.css";

import Sidebar from '../Sidebar';

const Aside: React.FC = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link">
                <img src="https://adminlte.io/themes/dev/AdminLTE/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </Link>
            <Sidebar />
        </aside>
    );
};

export default Aside;
