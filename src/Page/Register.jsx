import { Link } from "react-router-dom";
import "../css/Register.css";
import panel from "../img/nenHome.png";
export default function Register(){
    return(
        <div className="register-container" style={{backgroundImage : `url(${panel})`}}>
            <div className="form_register">
                <h2>Create an account</h2>
                <form action="">
                    <input type="text"name = "username" placeholder="UserName"/>
                    <input type="email" name = "email" placeholder="Email"/>
                    <input type="email" name = "email" placeholder="Phone"/>
                    <input type="password" name ="password" placeholder="Password"/>
                    <input type="password" name = "confirmPassword"placeholder="Confirm Password"/>
                    <button type="submit">REGISTER</button>
                </form>
                <p>Already have an account ?<Link to="/login">Login</Link></p>
            </div>
        </div>
    );
}