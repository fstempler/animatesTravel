import './certification.css'

const CertificationCard = ({imageUrl, name}) => {
    return (
        <div className='certification__Container'>
            <img src={imageUrl} className='certification__Image'/>
            <div className='certification__Text-Container'>
                <p className='certification__Text'>
                    {name}                  
                    
                </p>
            </div>
        </div>
    )
}

export default CertificationCard