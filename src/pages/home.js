import favicon from '../images/favicon.png';

function Home(){
    return(
        <div className="home">
            <div className="hero">
                <div>
                    <img src={favicon} alt="Logo"/>
                    <div>
                        <h1>Blogging,<br/>But With A Twist</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;