import './animalCard.css';
import dog from '../../../assets/ourServices/dog.jpg';

const AnimalCard = ({imageUrl, title}) => {
    return (
        <div className='animalCard__Container'>
            <img src={imageUrl} className='animalCard__Img' />
            <h1 className='animalCard__Title'>{title}</h1>
        </div>
    )
}

export default AnimalCard