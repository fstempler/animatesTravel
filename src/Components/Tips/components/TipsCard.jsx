import './tipsCard.css'

const TipsCard = ({imageUrl, title, text}) => {
    return (
        <div className='tipsCard__Container'>
            <div className='tipsCard__Img-Container'>
                <img src={imageUrl} className='tipsCard__Img' />
            </div>
            <div className='tipsCard__Data-Container'>
                <div className='tipsCard__Title-Container'>
                    <h3 className='tipsCard__Title'>
                        {title}
                    </h3>
                </div>
                <div className='tipsCard__Text-Container'>
                    <p className='tipsCard__Text'>
                        {text}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default TipsCard