import Title from '../Title/Title'
import dogCat from '../../assets/about/dogCat.jpg'
import StaffCard from './components/StaffCard'
import daniel from '../../assets/about/danielOtano.jpg'
import luciano from '../../assets/about/lucianoSampietro.jpg'
import maminska from '../../assets/about/maminska.jpg'
import veronica from '../../assets/about/veronicaPerez.jpg'
import josefina from '../../assets/about/Josefina.jpg'
import { useTranslation } from 'react-i18next'


import './about.css'

const About = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className='about__Main-Container' id='about'>
            <div className='row'>
                <div className='col-lg-8 col-md-12'>                    
                    <Title text={t("aTitle")} color={"#7C583B"} />
                    <div className='about__Text-Container'>
                        <p className='about__Text'>
                            {t("aText")}
                        </p>                    
                    </div>
                    <div className='about__Staff-Container'>
                        <div className='staff__Title-Container'>
                            <h2 className='staff__Title'>Staff</h2>
                        </div>
                        <div className='staff__Cards-Container row'>
                            <StaffCard imageUrl={daniel} 
                            name={"Daniel Otano"} 
                            title={"Socio Fundador"}/>
                            <StaffCard imageUrl={veronica} 
                            name={"Verónica Perez"} 
                            title={"Socia / Business Department"}/>
                            <StaffCard imageUrl={luciano} 
                            name={"Luciano Sampietro"} 
                            title={"Médico veterinario M.P. Pcia. Bs.As. Nro. 13518 - M.N. Nro. 8312"}/>
                            <StaffCard imageUrl={maminska} 
                            name={"Marie Eliane Maminska"} 
                            title={"Médica veterinaria - Oncóloga - M.P. Pcia. Bs.As. Nro. 14105 - M.N. Nro. 7544"}/>
                            <StaffCard imageUrl={josefina} 
                            name={"Josefina"} 
                            title={"CEO Animates Travel"}/>
                        </div>
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

