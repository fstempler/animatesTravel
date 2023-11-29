import './tips.css';
import animal from '../../assets/tips/animal.png'
import carrier from '../../assets/tips/Carrier2.png'
import Title from '../Title/Title';
import TipsCard from './components/TipsCard'


const Tips = () => {
    return (
        <div className='tips__Main-Container' id='tips'>
            <Title text={"Tips"} color={"#AB7A63"} />

            <div className='tips__Subtitle-Container'>
                <h3 className='tips__Subtitle'>
                    ¿Qué necesitas saber?
                </h3>
            </div>
            <div className='tips__Text-Container'>
                <p className='tips__Text'>
                    Al momento de decidir el traslado de tu mascota, es importante que tengas en cuenta que debes calcular correctamente la transportadora adecuada a las medidas de esta, de acuerdo
                    con la normativa de transporte de animales IATA garantizando su salud y comodidad. Para ello debes contemplar su tamaño, peso, raza o especie y su condición. Para medir con éxito a
                    tu mascota, sigue las instrucciones a continuación: 
                </p>
            </div>
            <div className='tips__Cards-Container'>
                <div className='row rowHandle'>
                    <div className='col-sm-8 col-md-4 col-xl-3'>
                        <TipsCard imageUrl={animal} 
                        title={"Cómo medir a tu mascota"}
                        text={`Las dimensiones calculadas son dimensiones internas del
                        contenedor y se refieren al animal de pie en su posición natural.

                        A = longitud del animal de la punta de la nariz a la base de la cola.
                        
                        B = altura del suelo a la articulación del codo. A + 1⁄2 B = largo del
                        contenedor.
                        
                        C = anchura de los hombros o el punto más ancho (el que sea
                        mayor). C x 2 = anchura del contenedor.
                        
                        D = altura del animal en su posición de pie natural desde la parte
                        superior de la cabeza o la punta de la oreja hacia el suelo (el que sea
                        mayor)/altura del contenedor (superficie plana o arqueada).
                        
                        Al tener estas medidas, podrás saber la transportadora correcta para
                        tu mascota, haciendo un último cálculo.`}
                        />
                    </div>
                    <div className='col-sm-8 col-md-4 col-xl-3'>
                    <TipsCard imageUrl={carrier} 
                        title={"Dimensiones mínimas internas del contenedor:"}
                        text={`A + 1⁄2 B = Longitud 

                        C x 2 = Anchura 
                        
                        D = Altura 
                        
                        Las razas de nariz chata requieren de un contenedor 10%
                        más grande`}
                        />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Tips