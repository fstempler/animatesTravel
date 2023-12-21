import './reviewCard.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

import { useEffect } from 'react';

const ReviewCard = ({ imageUrl, title, text, animation }) => {

    useEffect(() => {
        Aos.init({duration: 1500})
    })

    return (
        <div className='reviewCard__Container' data-aos={animation}>
            <img src={imageUrl} className='reviewCard__Img' />
            <div className='reviewCard__Title-Container'>
                <h4 className='reviewCard__Title'>{title}</h4>
            </div>
            <div className='reviewCard__Text-Container'>
                <p className='reviewCard__Text'>
                    {text}
                </p>    
            </div>
        </div>
    )
}

export default ReviewCard;