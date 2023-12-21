import Title from '../Title/Title'
import dogCat from '../../assets/about/dogCat.jpg'
import daniel from '../../assets/about/danielOtano.jpg'
import luciano from '../../assets/about/lucianoSampietro.jpg'
import maminska from '../../assets/about/maminska.jpg'
import veronica from '../../assets/about/veronicaPerez.jpg'
import josefina from '../../assets/about/Josefina.jpg'
import ipata from '../../assets/about/ipata.png'
import iata from '../../assets/about/iata.png'

import StaffCard from './components/StaffCard'
import CertificationCard from './components/Certification'

import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'



import './about.css'

const About = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className='about__Main-Container' id='about'>

            {/* Use Helmet to insert the script then you call the html code that elfsight gives you in the section you want the IG feed to render */}

            <Helmet>
                <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
            </Helmet>
            <div className='row'>
                <div className='col-lg-8 col-md-12'>                    
                    <Title text={t("aTitle")} color={"#7C583B"} />
                    <div className='about__Text-Container'>
                        <p className='about__Text'>
                            {t("aText")}
                        </p>                    
                    </div>
                    <div className='about__Certification-Container container'>

                        {/* Certification cards have image, title and text to add.  */}

                        <div className='row'>
                            <CertificationCard 
                            imageUrl={ipata}
                            name={'Member'}
                            text={'BOAS Certified'}
                            />

                            <CertificationCard 
                            imageUrl={iata}
                            name={'LAR Certified'}
                            />
                        </div>
                    </div>
                    {/* Stadd section */}
                    <div className='about__Staff-Container'>
                        <div className='staff__Title-Container'>
                            <h2 className='staff__Title'>Staff</h2>
                        </div>
                        <div className='staff__Cards-Container row'>
                            <StaffCard imageUrl={daniel} 
                            name={"Daniel Otano"} 
                            title={t("aDOposition")}/>
                            <StaffCard imageUrl={veronica} 
                            name={"Verónica Perez"} 
                            title={t("aVPposition")}/>
                            <StaffCard imageUrl={maminska} 
                            name={"Marie Eliane Maminska"} 
                            title={t("aMEMposition")}/>
                            <StaffCard imageUrl={luciano} 
                            name={"Luciano Sampietro"} 
                            title={t("aLSposition")}/>
                            <StaffCard imageUrl={josefina} 
                            name={"Josefina"} 
                            title={"CEO Animates Travel"}/>
                        </div>
                    </div>
                    <div className='about__Ig-container'>
                        <div className="elfsight-app-755b2351-2258-49e5-a423-1c1670d6b678" data-elfsight-app-lazy></div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-0 about__Right-Column'>
                    <img src={dogCat} className='about__Right-Image img-fluid'/>
                </div>
            </div>
        </div>
    )
}
export default About

