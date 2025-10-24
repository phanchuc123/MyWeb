import { Link } from "react-router-dom";
import "../css/Login.css";
import panel from "../img/nenHome.png";
export default function Login(){
    return (
        <div className="login_container" style={{backgroundImage : `url(${panel})`}}>
            <div className="form_login">
                <h2>Login</h2>
                <form action="">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password"/>
                    <button type="submit">LOGIN</button>
                </form>
                <p>Don't have an account ?<Link to = "/register">Registor</Link></p>
            </div>
        </div>
    );
}