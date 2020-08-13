import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./styles.css";


const HomePage: React.FC = () => {

    return (
        <div className="flex-center position-ref full-height">
            <div className="top-right links">
                    <Link to="/login">Login</Link>

            </div>

        <div className="content">
            <div className="title m-b-md">
                Laravel React Typescript
            </div>
        </div>
    </div>
    );
};

export default HomePage;
