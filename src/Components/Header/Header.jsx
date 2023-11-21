import carousel1 from '../../assets/header/carousel1.jpg';
import carousel2 from '../../assets/header/carousel2.jpg';
import carousel3 from '../../assets/header/carousel3.jpg';
import './header.css'

const Header = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide header__Carousel-Container">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={carousel1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={carousel2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={carousel3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Header