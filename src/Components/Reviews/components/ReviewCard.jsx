import './reviewCard.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

import { useEffect } from 'react';

const ReviewCard = ({ imageUrl1, imageUrl2, imageUrl3, title, text, animation }) => {

    useEffect(() => {
        Aos.init({duration: 1500})
    })

    return (
        <div className='reviewCard__Container' data-aos={animation}>
            {/* <img src={imageUrl} className='reviewCard__Img' /> */}
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imageUrl1} className="d-block w-100 reviewCard__Img" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={imageUrl2} className="d-block w-100 reviewCard__Img" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imageUrl3} className="d-block w-100 reviewCard__Img" alt="..." />
                    </div>
                </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>                        
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>                        
                    </button>
            </div>
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