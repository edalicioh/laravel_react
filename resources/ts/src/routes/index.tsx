import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/Dashboard";
import DashboardHome from "../pages/DashboardHome";
import DashboardLista from "../pages/DashboardLista";

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />

            <Route exact path="/dashboard" component={DashboardHome} />
            <Route exact path="/dashboard/lista" component={DashboardLista} />
            <Route path="*" component={HomePage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
