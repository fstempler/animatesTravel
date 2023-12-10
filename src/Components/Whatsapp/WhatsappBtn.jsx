import './whatsappBtn.css';
import whatsapp from '../../assets/whatsapp/whatsapp.png'

const WhatsappBtn = () => {
    return (
        <div className="whatsappButton__Container">
            <a href="https://wa.me/5491141781043" target='_blank' rel="noreferrer">
                <img className='whatsappButton__Image' src={whatsapp}/>
            </a>
        </div>
    )
}

export default WhatsappBtn