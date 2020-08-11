import React from "react";

import { Title } from "./styled";

const HomePage: React.FC = () => {
    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">All projects</div>
                        <div className="card-body">
                            <Title>Home Page</Title>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
