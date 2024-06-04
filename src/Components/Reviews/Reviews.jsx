import Title from '../Title/Title'
import ReviewCard from './components/ReviewCard'

import profile1 from '../../assets/reviews/Profile1.jpg';
import profile2 from '../../assets/reviews/Profile2.jpg';
import profile3 from '../../assets/reviews/Profile3.jpg';

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
                        id="1"
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
                        id="2"
                        imageUrl1={review21}
                        imageUrl2={review22}
                        imageUrl3={review23}
                        title={"Julián P."}
                        text={`"Mi experiencia ha sido excelente desde el primer contacto hasta el viaje de Diana, mi pug, desde Argentina hasta Sudáfrica. Todo salió tal como se planeó y mi mascota llegó en perfectas condiciones. Recomiendo ampliamente el servicio de Animates Travels y la eficiencia y cuidado de María Verónica."`}                        
                        animation={'flip-up'}
                        />
                    </div>
                    <div className='col-sm-4 col-lg-3 col-xl-3 col-xxl-3 reviews__Card-Item'>
                    <ReviewCard 
                        id="3"
                        imageUrl1={review31}
                        imageUrl2={review32}                        
                        imageUrl3={review32}
                        title={"Olivia y Priscilla"}
                        text={`"Hola!!! Somos Olivia (mamá de Felix, de 2 años) y Priscilla (mamá de Charlie y Khya, 13 y 6 años) Nos instalamos en abril de 2023 en Nueva Zelanda donde Charlie, Khya y Felix disfrutan de sol y sus juegos
                        No tenemos mas que palabras de agradecimiento para con ellos porque siempre estuvieron presentes en todo el proceso, sacandonos dudas y miedos"`}                        
                        animation={'flip-up'}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Reviews