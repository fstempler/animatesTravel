import './navbar.css';
import Logo from '../../assets/logo/logoRoundSM.png'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar__Container">
            <div className="container-fluid">
                <a className="navbar-brand navbar__Logo-Container" href="#"><img src={Logo} className='navbar__Logo'/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                             <Link className="nav-link" aria-current="page" to="#services">SERVICIOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="#tips">TIPS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="#about">NOSOTROS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="#contact">CONTACTO</Link>
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