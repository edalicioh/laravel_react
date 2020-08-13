import React from "react";
import { IoIosPersonAdd } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";


import Dashboard from "../Dashboard";
import ContentHeader from "../../components/ContentHeader";

import lang from "../../lang";
import SmallBox from "../../components/SmallBox";
const DashboardHome: React.FC = () => {
    return (
        <Dashboard>
            <ContentHeader title={lang.dashboard_home.title} />
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                    <SmallBox icon={IoIosPersonAdd} boxClass="small-box bg-info"/>
                    <SmallBox icon={IoIosPersonAdd} boxClass="small-box bg-info"/>
                    <SmallBox icon={IoIosPersonAdd} boxClass="small-box bg-info"/>
                    <SmallBox icon={IoIosPersonAdd} boxClass="small-box bg-warning"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card card-primary" >
                            <div className="card-body">
                                <h1>Home</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default DashboardHome;
