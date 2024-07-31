import Title from '../Title/Title'
import ReviewCard from './components/ReviewCard'

//Review1
import review11 from '../../assets/reviews/Review 1-1.png';
import review12 from '../../assets/reviews/Review 1-2.png';
import review13 from '../../assets/reviews/Review 1-3.png';
//Review2
import review21 from '../../assets/reviews/Review 2-1.png';
import review22 from '../../assets/reviews/Review 2-2.png';
import review23 from '../../assets/reviews/Review 2-3.png';
//Review3
import review31 from '../../assets/reviews/Review 3-1.png';
import review32 from '../../assets/reviews/Review 3-2.png';
//Review4
import review41 from '../../assets/reviews/Review 4-1.png';

import './reviews.css'

import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

const Reviews = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className='reviews__Main-Container'>
            <div className='reviews__Title-Container'>
                <Title 
                text={"¿Qué dicen nuestros clientes?"} 
                color={"#F8FBFB"}
                />    
            </div>
            <div className='reviews__Card-Container'>
                <div className='row rowHandle'>
                    <div className='col-sm-3 col-lg-3 col-xl-3 col-xxl-3 reviews__Card-Item'>
                        <ReviewCard 
                        id="1"
                        imageUrl1={review11}
                        imageUrl2={review12}
                        imageUrl3={review13}
                        title={"Natalia Fuccini"}
                        text={t("cReview1Text1")}                        
                        animation={'flip-up'}
                        />
                    </div>
                    <div className='col-sm-3 col-lg-3 col-xl-3 col-xxl-3 reviews__Card-Item'>
                        <ReviewCard 
                        id="2"
                        imageUrl1={review21}
                        imageUrl2={review22}
                        imageUrl3={review23}
                        title={"Julián P."}
                        text={t("cReview1Text2")}                        
                        animation={'flip-up'}
                        />
                    </div>
                    <div className='col-sm-3 col-lg-3 col-xl-3 col-xxl-3 reviews__Card-Item'>
                    <ReviewCard 
                        id="3"
                        imageUrl1={review31}
                        imageUrl2={review32}                        
                        imageUrl3={review32}
                        title={"Olivia y Priscilla"}
                        text={t("cReview1Text3")}                        
                        animation={'flip-up'}
                        />
                        
                    </div>
                    <div className='col-sm-3 col-lg-3 col-xl-3 col-xxl-3 reviews__Card-Item'>
                    <ReviewCard 
                        id="4"
                        imageUrl1={review41}
                        imageUrl2={review41}                        
                        imageUrl3={review41}
                        title={"V. L."}
                        text={t("cReview1Text4")}                        
                        animation={'flip-up'}
                        />
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Reviews