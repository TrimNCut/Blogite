import usericon from "../images/usericon.png";
import logo from "../images/logo.png";
import mailicon from "../images/mailicon.png";
import keyicon from "../images/keyicon.png";
import eyeopenicon from "../images/eyeopenicon.png";
import eyeclosedicon from "../images/eyeclosedicon.png";

function SignUp(){
    return(
        <div className="login">
            <h1>S I G N  U P</h1>
            <div className="detailscon">
                <div className="detailsleftcon">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="detailsrightcon">
                    <div className="detailsrightconimg">
                        <img className="detailsusericon" src={usericon} alt="User Icon"/>
                    </div>
                    <div className="detailsrightcondiv">
                        <img className="detailsrightcondivimg" src={mailicon} alt="Mail Icon"/>
                        <input className="detailsrightconinput" type="text" placeholder="Email" />
                    </div>
                    <div className="detailsrightcondiv">
                        <img className="detailsrightcondivimg" src={usericon} alt="User Icon"/>
                        <input className="detailsrightconinput" type="text" placeholder="Username" />
                    </div>
                    <div className="detailsrightcondiv">
                        <img className="detailsrightcondivimg" src={keyicon} alt="Key Icon"/>
                        <input className="detailsrightconinput" type="password" placeholder="Password" />
                    </div>
                    <div className="detailsrightcontermsdiv">
                        <input type="checkbox" />
                        <label>Accept Terms And Conditions</label>
                    </div>
                    <div className="detailsrightconbtncon">
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;