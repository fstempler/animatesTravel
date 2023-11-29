
import './footer.css';
import logo from '../../assets/logo/logoRoundSM.png';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className='footer__Main-Container'>
            <div className='container'>
                <div className='row'>
                    <div className="col footer__Logo-Container">
                        <img className='footer__Logo' src={logo} />
                    </div>                    
                    <div className="col footer__Contact-Container">
                        <ul className='footer__List'>
                            <li>                                
                                <a href="#" className="footer__Contact-Info">
                                <i className="bi bi-envelope-fill" />
                                info@animatestravel.com
                                </a>
                            </li>
                            <li>
                                <p className='footer__Contact-Info'>
                                    <i className="bi bi-telephone-fill" />
                                    +54 348 4465282
                                </p>                               
                            </li>
                            <li>
                            <p className='footer__Contact-Info'>
                                    <i className="bi bi-telephone-fill" />
                                    +54 9 11 6377 0225
                                </p>                               
                            </li>
                            <li>
                            <p className='footer__Contact-Info'>
                                    <i className="bi bi-telephone-fill" />
                                    +54 9 11 4178 1043
                                </p>                               
                            </li>
                            <li className='footer__Contact-SM'>
                                <i className="bi bi-instagram" />
                                <i className="bi bi-facebook" />
                            </li>
                        </ul>
                    </div>
                    <div className="col footer__Address-Container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.808415638107!2d-58.7600018!3d-34.4062152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9fa3809640d1%3A0xa630a90f82390b2!2sAconcagua%20300%2C%20B1620EDH%20Maquinista%20Savio%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1701268767656!5m2!1ses!2sar" 
                        className='footer__Map'
                        width="150" 
                        height="150" 
                        style={{border:0,}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        >
                        </iframe>

                        <p className='footer__Address'>
                        <i className="bi bi-geo-alt-fill"></i>
                            Aconcagua 300,
                            Maquinista Savio,
                            Buenos Aires, Argentina
                        </p>
                    </div>
                    <div className="col footer__Sitemap-Container">
                        <ul className='footer__List'>
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer