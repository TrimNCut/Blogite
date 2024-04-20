import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import searchicon from '../images/searchicon.png'

function Navbar(){
    return(
        <nav>
            <img className="logo" src={logo} alt="logo"/>
            <input className="searchbar" type="text" placeholder="Search Up Something..." />
            <button className="searchbtn"><img src={searchicon} alt="searchicon"/></button>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to="latest">Latest</Link>
            <Link className='link' to="popular">Popular</Link>
            <Link className='link' to="home">My Account</Link>
        </nav>
    )
}

export default Navbar;