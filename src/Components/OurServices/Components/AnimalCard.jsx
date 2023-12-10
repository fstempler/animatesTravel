import './animalCard.css';

import { HashLink as Link } from 'react-router-hash-link';
const AnimalCard = ({imageUrl, title, onClick}) => {

    
    return (
        <Link to="#contact">
        <div className='animalCard__Container' onClick={onClick}>
            <img src={imageUrl} className='animalCard__Img' />
            <h1 className='animalCard__Title'>{title}</h1>
        </div>
        </Link>
    )
}

export default AnimalCard