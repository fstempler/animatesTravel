import './navbar.css';
import Logo from '../../assets/logo/logoRoundSM.png'
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';


const Navbar = () => {

    const { t, i18n } = useTranslation(["language"]);
    const changeLanguage = () => {
        const newLanguage = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLanguage)
    };

    const changeLanguagePg = () => {
        const newLanguage = i18n.language === 'es' ? 'pg' : 'es';
        i18n.changeLanguage(newLanguage)
    };

    return (
        <nav className="navbar navbar-expand-lg navbar__Container">
            <div className="container-fluid">
                <a className="navbar-brand navbar__Logo-Container" href="/"><img src={Logo} className='navbar__Logo'/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                             <Link className="nav-link" aria-current="page" to="#services">{t('services')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="#tips">{t('tips')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="#about">{t('aboutUs')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="#contact">{t('contact')}</Link>
                        </li>        
                        <li className="nav-item">
                            <div className='navbar__Toggle-Container'>
                                <button className="nav-link " onClick={changeLanguage}>
                                    <i className={`bi bi-toggle-${i18n.language === 'es' ? 'on' : 'off'} link__Style`}></i>
                                    <span className='navbar__Toggle-Text'>{t('langEnBtn')}</span>
                                </button>                            
                            </div>                            
                        </li>
                        <li className="nav-item">
                            <div className='navbar__Toggle-Container'>
                                <button className="nav-link " onClick={changeLanguagePg}>
                                    <i className={`bi bi-toggle-${i18n.language === 'es' ? 'on' : 'off'} link__Style`}></i>
                                    <span className='navbar__Toggle-Text'>{t('langPgBtn')}</span>
                                </button>                            
                            </div>
                        </li>
                    </ul>
      
                </div>
            </div>
        </nav>

    )
}

export default Navbar;