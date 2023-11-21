import './staffCard.css'

const StaffCard = ({imageUrl, name, title}) => {
    return (
        <div className='staffCard__Container'>
            <img src={imageUrl} className='staffCard__Image'/>
            <div className='staffCard__Text-Container'>
                <p className='staffCard__Text'>
                    {name}
                    <br />
                    {title}
                </p>
            </div>
        </div>
    )
}

export default StaffCard