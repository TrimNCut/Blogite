import usericon from "../images/usericon.png"

function Login(){
    return(
        <div className="login">
            <div className="logincon">
                <div className="loginleftcon"></div>
                <div className="loginrightcon">
                    <div className="loginrightconimg">
                        <img className="loginusericon" src={usericon} alt="User Icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;