import Title from '../Title/Title'
import ReviewCard from './components/ReviewCard'

import profile1 from '../../assets/reviews/Profile1.jpg';
import profile2 from '../../assets/reviews/Profile2.jpg';
import profile3 from '../../assets/reviews/Profile3.jpg';

import './reviews.css'

const Reviews = () => {
    return (
        <div className='reviews__Main-Container'>
            <div className='reviews__Title-Container'>
                <Title 
                text={"¿Qué dicen nuestros clientes?"} 
                color={"#7C583B"}
                />    
            </div>
            <div className='reviews__Card-Container'>
                <div className='row rowHandle'>
                    <div className='col-sm-4 col-lg-3 col-xl-3 col-xxl-3 reviews__Card-Item'>
                        <ReviewCard 
                        imageUrl={profile1}
                        title={"Juan Ignacio Pirrota"}
                        text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat totam dignissimos hic, harum dolorum consequatur corrupti doloribus alias necessitatibus tempore fugit officiis quos sunt numquam in magni minima quisquam!"}                        
                        />
                    </div>
                    <div className='col-sm-4 col-lg-3 col-xl-3 col-xxl-3 reviews__Card-Item'>
                        <ReviewCard 
                        imageUrl={profile2}
                        title={"María y Paz"}
                        text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat totam dignissimos hic, harum dolorum consequatur corrupti doloribus alias necessitatibus tempore fugit officiis quos sunt numquam in magni minima quisquam!"}                        
                        />
                    </div>
                    <div className='col-sm-4 col-lg-3 col-xl-3 col-xxl-3 reviews__Card-Item'>
                        <ReviewCard 
                        imageUrl={profile3}
                        title={"Sofía Andressi"}
                        text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat totam dignissimos hic, harum dolorum consequatur corrupti doloribus alias necessitatibus tempore fugit officiis quos sunt numquam in magni minima quisquam!"}                        
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Reviews