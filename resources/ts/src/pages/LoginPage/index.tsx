import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaLanguage } from "react-icons/fa";

import Input from "./components/Input";
import Button from "./components/Button";

import lang from "./../../lang";

import { Title } from "./styled";

const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-logo">{lang.title}</div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg"></p>
                        <form>
                            <Input
                                name="sasa"
                                icon={FaEnvelope}
                                type="email"
                                placeholder={lang.auth.email}
                            />

                            <Input
                                name="sas"
                                icon={FaLock}
                                type="password"
                                placeholder={lang.auth.password}
                            />

                            <div className="input-group mb-3">
                                <Button text={lang.auth.sign_in} />
                            </div>

                            <div className="input-group mb-3">
                                <p className="mb-1">
                                    <Link to="/dashboard">
                                        {lang.auth.i_forgot_my_password}
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
