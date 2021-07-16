import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <nav>
        <Link to='/'><div>Home</div></Link>
        <Link to='/gallary'><div>Pet Gallary</div></Link>
        </nav>
    )
}

export default Nav;
