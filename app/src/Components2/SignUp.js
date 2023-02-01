import React, { useState } from "react";
import AuthButton from "../components/AuthButton";
import axios from "axios";

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        repassword: "",
    });
    const handleChange = e => {
        setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
    };

    const addUser = async () => {
        try {
            const res = await axios.post(
                "http://localhost:8080/users/signup",
                userInfo
            );
            if (res.data.ok) {
                alert("Signup successful! Please log in.");
            }
        } catch (err) {
            console.log(err);
            alert(
                `Sorry, there was a problem signing you up. ${err.response.data}`
            );
        }
    };

    return (
        <>
            <form className="d-flex flex-column">
                <input
                    className="rounded-pill border border none p-1"
                    id="email"
                    placeholder="Email"
                    type="email"
                    onChange={handleChange}
                    value={userInfo.email}
                />
                <input
                    className="rounded-pill border border none my-2 p-1"
                    id="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={userInfo.password}
                />
                <span className="align-self-center">Confirm Password</span>
                <input
                    className="rounded-pill border border none my-2 p-1"
                    id="repassword"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={userInfo.repassword}
                />
                <AuthButton text="Sign Up" handleClick={addUser} />
            </form>
        </>
    );
};

export default SignUp;
