import './ourServices.css';
import Title from '../Title/Title';
import AnimalCard from './Components/AnimalCard';
import dog from '../../assets/ourServices/dog.jpg';
import cat from '../../assets/ourServices/cat.jpg';
import exotic from '../../assets/ourServices/exotic.jpg';
import ferret from '../../assets/ourServices/ferret.jpg';

const OurServices = () => {
    return (
        <div className='ourServices__MainContainer'>
            <div className='ourServices__Title-Container'>
                <Title text={"Servicios"} color={"#F8FBFB"} />
            </div>
            <div className='ourServices__Text-Container'>
                <p className='ourServices__Text'>
                Cada traslado es único, y para ello contamos con todas las herramientas que nos permiten tener procesos y presupuestos a medida para cada necesidad en
                particular Es por esto, que proporcionamos todos los servicios necesarios para el traslado de tu mascota, cumpliendo con todas las normas internacionales, ya
                sea para un proceso de importación, como de exportación.
                </p>
            </div>
            <div className='ourServices__Bullets-Container row'>
                <div className='col'>
                    <ul>
                        <li>
                            Servicio médico veterinario: controles médicos,
                            vacunación, colocación de microchip, desparasitación, etc
                        </li>
                        <li>
                            Contratación de flete aéreo y terrestre. En el caso de los
                            traslados aéreos, nuestro servicio incluye traslado desde
                            el domicilio y/o pensionado hasta el aeropuerto, espera y
                            despacho de la mascota.
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <ul>
                        <li>
                            Servicio médico veterinario: controles médicos,
                            vacunación, colocación de microchip, desparasitación, etc
                        </li>
                        <li>
                            Contratación de flete aéreo y terrestre. En el caso de los
                            traslados aéreos, nuestro servicio incluye traslado desde
                            el domicilio y/o pensionado hasta el aeropuerto, espera y
                            despacho de la mascota.
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <ul>
                        <li>
                            Servicio de pensionado que incluye búsqueda y traslado
                            desde el domicilio. Con una amplia experiencia y atención
                            médica veterinaria, brindamos bienestar a tu mascota en
                            un ambiente agradable y cuidado.
                        </li>
                        <li>
                            Liberación de importaciones: En caso de mascotas que
                            ingresan al país, te brindamos nuestros servicios para una
                            liberación sin demoras ni complicaciones, con la opción de
                            entregar a tu mascota en el aeropuerto o bien en tu
                            domicilio.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='ourServices__Cards-Container row'>
                <div className='col-md-3'>
                    <AnimalCard imageUrl={dog} title={"Perros"}/>
                </div>
                <div className='col-md-3'>
                    <AnimalCard imageUrl={cat} title={"Gatos"}/>
                </div>
                <div className='col-md-3'>
                    <AnimalCard imageUrl={ferret} title={"Hurones"}/>
                </div>
                <div className='col-md-3'>
                    <AnimalCard imageUrl={exotic} title={"Exóticos"}/>
                </div>
            </div>
        </div>
    )
}

export default OurServices