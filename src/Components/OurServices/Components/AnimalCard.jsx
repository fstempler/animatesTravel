import './animalCard.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

import { useEffect } from 'react';


import { HashLink as Link } from 'react-router-hash-link';
const AnimalCard = ({imageUrl, title, onClick}) => {

    useEffect(() => {
        Aos.init({duration: 1500})
    })
    
    return (
        <Link to="#contact">
        <div className='animalCard__Container' onClick={onClick} data-aos="flip-left">
            <img src={imageUrl} className='animalCard__Img' />
            <h1 className='animalCard__Title'>{title}</h1>
        </div>
        </Link>
    )
}

export default AnimalCard