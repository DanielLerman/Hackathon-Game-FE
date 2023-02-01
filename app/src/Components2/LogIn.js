import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthButton from "../components/AuthButton";
import axios from "axios";

const LogIn = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const handleChange = e => {
        setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
    };

    const navigate = useNavigate();

    const loginUser = async () => {
        try {
            const res = await axios.post(
                "http://localhost:8080/users/login",
                userInfo
            );
            if (res.data.ok) {
                alert("Login successful!");
                navigate("/user");
            }
        } catch (err) {
            console.log(err);
            alert(
                `Sorry, there was a problem logging you in. ${err.response.data}`
            );
        }
    };

    return (
        <div>
            <>
                <form className="d-flex flex-column">
                    <input
                        className="rounded-pill border border none p-1"
                        placeholder="Email"
                        id="email"
                        type="email"
                        value={userInfo.email}
                        onChange={handleChange}
                    />
                    <input
                        className="rounded-pill border border none my-2 p-1"
                        placeholder="Password"
                        id="password"
                        type="password"
                        value={userInfo.password}
                        onChange={handleChange}
                    />
                    <AuthButton text="Log In" handleClick={loginUser} />
                </form>
            </>
        </div>
    );
};

export default LogIn;
