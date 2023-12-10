import './ourServices.css';
import Title from '../Title/Title';
import AnimalCard from './Components/AnimalCard';
import dog from '../../assets/ourServices/dog.jpg';
import cat from '../../assets/ourServices/cat.jpg';
import exotic from '../../assets/ourServices/exotic.jpg';
import ferret from '../../assets/ourServices/ferret.jpg';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../state/AnimalCard.Context';

const OurServices = () => {    
    const { t, i18n } = useTranslation();
    const { option, setOption } = useAppContext()
    const navigate = useNavigate();

    const handleCardClick = (selectedOption) => {
        console.log('Card clicked with option:', selectedOption)
        setOption(selectedOption)
        navigate('#contact');
    };

    

    return (
        <div className='ourServices__MainContainer' id='services'>
            <div className='ourServices__Title-Container'>
                <Title text={t('sTitle')} color={"#F8FBFB"} />
            </div>
            <div className='ourServices__Text-Container'>
                <p className='ourServices__Text'>
                    {t('sText')}
                </p>
            </div>
            <div className='ourServices__Bullets-Container row'>
                <div className='col'>
                    <ul>
                        <li>
                            {t('sContent1')}
                        </li>
                        <li>
                            {t('sContent2')}
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <ul>
                        <li>
                            {t('sContent3')}
                        </li>
                        <li>
                            {t('sContent4')}
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <ul>
                        <li>
                            {t('sContent5')}
                        </li>
                        <li>
                            {t('sContent6')}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='ourServices__Cards-Container row'>
                <div className='col-md-3'>
                    <AnimalCard 
                    imageUrl={dog} 
                    title={t('sDog')}       
                    option="dog"            
                    onClick={() => handleCardClick('dog')}
                    />
                </div>
                <div className='col-md-3'>
                    <AnimalCard 
                    imageUrl={cat} 
                    title={t('sCat')} 
                    option="cat"            
                    onClick={() => handleCardClick('cat')}
                    />
                </div>
                <div className='col-md-3'>
                    <AnimalCard 
                    imageUrl={ferret} 
                    title={t('sFerret')}               
                    option="ferret"            
                    onClick={() => handleCardClick('ferret')}  
                    />
                </div>
                <div className='col-md-3'>
                    <AnimalCard 
                    imageUrl={exotic} 
                    title={t('sExotic')} 
                    option="exotic"            
                    onClick={() => handleCardClick('exotic')}
                    />
                </div>
            </div>
        </div>
    )
}

export default OurServices