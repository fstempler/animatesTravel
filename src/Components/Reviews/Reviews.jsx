import Title from '../Title/Title'
import ReviewCard from './components/ReviewCard'

import profile1 from '../../assets/reviews/Profile1.jpg';
import profile2 from '../../assets/reviews/Profile2.jpg';
import profile3 from '../../assets/reviews/Profile3.jpg';

//Review1
import review11 from '../../assets/reviews/Review 1-1.png';
import review12 from '../../assets/reviews/Review 1-2.png';
import review13 from '../../assets/reviews/Review 1-3.png';

import './reviews.css'

const Reviews = () => {
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
                    <div className='col-sm-4 col-lg-3 col-xl-3 col-xxl-3 reviews__Card-Item'>
                        <ReviewCard 
                        imageUrl1={review11}
                        imageUrl2={review12}
                        imageUrl3={review13}
                        title={"Natalia Fuccini"}
                        text={"Migrar en familia nunca es sencillo y encontrar quién nos pudiera asesorar y ayudar al traslado de nuestra familia de cuatro patas tampoco. No conocimos personalmente a los ángeles detrás de Animates Travel hasta el momento del viaje, pero la tranquilidad y el profesionalismo que transmitieron desde la primera llamada es indescriptible. El viaje salió todo de 10 y llegaron a nuestro nuevo hogar con toda la documentación para poder ser registrados. Los recomendamos siempre que podemos. Calidad y calidez cinco estrellas!"}                        
                        animation={'flip-up'}
                        />
                    </div>
                    <div className='col-sm-4 col-lg-3 col-xl-3 col-xxl-3 reviews__Card-Item'>
                        <ReviewCard 
                        imageUrl1={profile2}
                        title={"María y Paz"}
                        text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat totam dignissimos hic, harum dolorum consequatur corrupti doloribus alias necessitatibus tempore fugit officiis quos sunt numquam in magni minima quisquam!"}                        
                        animation={'flip-up'}
                        />
                    </div>
                    <div className='col-sm-4 col-lg-3 col-xl-3 col-xxl-3 reviews__Card-Item'>
                        <ReviewCard 
                        imageUrl1={profile3}
                        title={"Sofía Andressi"}
                        text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat totam dignissimos hic, harum dolorum consequatur corrupti doloribus alias necessitatibus tempore fugit officiis quos sunt numquam in magni minima quisquam!"}                        
                        animation={'flip-up'}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Reviews