import './reviewCard.css'

const ReviewCard = ({ imageUrl, title, text }) => {
    return (
        <div className='reviewCard__Container'>
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