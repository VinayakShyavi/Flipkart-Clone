import React from "react";
import { Link } from "react-router-dom";
import NaviBar from "./NaviBar";

function Login() {
    return (
        <div>
            <NaviBar/>
            <Link to="/"><button className="userLogin">User</button></Link>
            <Link  to="/admin"><button className="admiLogin">Admin</button></Link> <br /><br />
            <Link to="/">Return to Home Page </Link>
        </div>
    )
}

export default Login;