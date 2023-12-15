import './certification.css'

const CertificationCard = ({imageUrl, name, text}) => {
    return (
        <div className='certification__Container'>
            <img src={imageUrl} className='certification__Image'/>
            <div className='certification__Text-Container'>
                <p className='certification__Text'>
                    {name}                  
                    <br/>                    
                    {text}
                </p>
            </div>
        </div>
    )
}

export default CertificationCard