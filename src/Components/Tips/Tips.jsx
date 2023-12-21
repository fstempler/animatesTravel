import './tips.css';
import animal from '../../assets/tips/animal.png'
import carrier from '../../assets/tips/Carrier2.png'
import Title from '../Title/Title';
import TipsCard from './components/TipsCard'
import { useTranslation } from 'react-i18next';


const Tips = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className='tips__Main-Container' id='tips'>
            <Title text={"Tips"} color={"#AB7A63"} />

            <div className='tips__Subtitle-Container'>
                <h3 className='tips__Subtitle'>
                    {t('tSubtitle')}
                </h3>
            </div>
            <div className='tips__Text-Container'>
                <p className='tips__Text'>
                    {t('tText')}
                </p>
            </div>
            <div className='tips__Cards-Container'>
                <div className='row rowHandle'>
                    <div className='col-sm-8 col-md-4 col-xl-3'>
                        <TipsCard imageUrl={animal} 
                        title={t('tCard1Title')}
                        text={t('tCard1Text')}
                        animation={'fade-right'}
                        />
                    </div>
                    <div className='col-sm-8 col-md-4 col-xl-3'>
                    <TipsCard imageUrl={carrier} 
                        title={t('tCard2Title')}
                        text={t('tCard2Text')}
                        animation={'fade-left'}
                        />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Tips