import './navbar.css';
import Logo from '../../assets/logo/logoRound.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar__Container">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={Logo} className='navbar__Logo'/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">SERVICIOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">TIPS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">NOSOTROS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">CONTACTO</a>
                        </li>        
                        <li className="nav-item">
                            <div className='navbar__Toggle-Container'>
                                <a className="nav-link" aria-current="page" href="#"><i className="bi bi-toggle-off"></i><span className='navbar__Toggle-Text'>EN</span></a>                            
                            </div>
                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#"><i className="bi bi-toggle-off"></i><span className='navbar__Toggle-Text'>PG</span></a>
                        </li>
                    </ul>
      
                </div>
            </div>
        </nav>

    )
}

export default Navbar;