import './title.css'

const Title = ({text, color}) => {
    return (
        <div className='title__Container'>
            <h1 className='title__Text' style={{color}}>{ text }</h1>
        </div>
    )
}

export default Title