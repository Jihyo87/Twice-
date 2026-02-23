import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
            <nav className='navbar' >
                <ul className='navbarlist'>
                    <li> <Link to='/'> HOME </Link> </li>
                    <li> <Link to='/about'>  ABOUT </Link> </li>
                    <li> <Link to='/members'> MEMBER </Link> </li>
                    <li> <Link to='/discography'> DISCOGRAPHY </Link> </li>
                </ul>
            </nav>
    );
}


export default Navbar;