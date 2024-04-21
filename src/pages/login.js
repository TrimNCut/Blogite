import usericon from "../images/usericon.png";
import logo from "../images/logo.png";
import keyicon from "../images/keyicon.png";
import eyeopenicon from "../images/eyeopenicon.png";
import eyeclosedicon from "../images/eyeclosedicon.png";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="login">
            <h1>L O G I N</h1>
            <div className="detailscon">
                <div className="detailsleftcon">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="detailsrightcon">
                    <div className="detailsrightconimg">
                        <img className="detailsusericon" src={usericon} alt="User Icon"/>
                    </div>
                    <div className="detailsrightcondiv">
                        <img className="detailsrightcondivimg" src={usericon} alt="User Icon"/>
                        <input className="detailsrightconinput" type="text" placeholder="Username" />
                    </div>
                    <div className="detailsrightcondiv">
                        <img className="detailsrightcondivimg" src={keyicon} alt="Key Icon"/>
                        <input className="detailsrightconinput" type="password" placeholder="Password" />
                    </div>
                    <div className="detailsrightconbtncon">
                        <button>Login</button>
                    </div>
                    <div className="detailsrightconlinkdiv">
                        <h2>O R</h2>
                    </div>
                    <div className="detailsrightconlinkdiv2">
                        <Link className="detailsrightconlinkdiv2link" to="/signup">SignUp</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;