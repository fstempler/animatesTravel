import './contact.css'
import Title from '../Title/Title';

const Contact = () => {
    return (
        <div className='contact__Main-Container' id='contact'>
            <div className='container'>
                <div className='row flex-column-reverse flex-xl-row'>
                    <div className='col-lg-7 col-sm-12 contact__Form-Container'>
                    <form>
                        <div className="mb-3">                        
                            <label htmlFor="exampleInputPassword1" className="form-label contact__Form-Title">Cliente</label>

                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Contacto'/>                    
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ciudad de Origen'/>                    
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ciudad de Destino'/>                    
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>                    
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Tel'/>                    
                        </div>
                        <div className="mb-3">                        
                            <label htmlFor="exampleInputPassword1" className="form-label contact__Form-Title">Datos de la mascota</label>

                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Especie'/>                    
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Raza'/> 

                            <div className="row">
                                <div className="col">
                                    <input type="number" className="form-control" placeholder="Peso" aria-label="weight" />
                                    <span>Kg</span>
                                </div>
                            <div className="col">
                                    <input type="number" className="form-control" placeholder="Edad" aria-label="age" />
                                    <span>Años</span>
                                </div>
                            </div>                   

                            <div className="row">
                                <span className='contact__Form-Subtitle'>Medidas: </span>
                                <div className="col">
                                    <input type="number" className="form-control" placeholder="Largo" aria-label="length" />                                
                                </div>
                                <div className="col">
                                    <input type="number" className="form-control" placeholder="Ancho" aria-label="width" />                                
                                </div>
                                <div className="col">
                                    <input type="number" className="form-control" placeholder="Alto" aria-label="height" />                                
                                </div>
                            </div>                   

                            <div className="row">
                                <span className='contact__Form-Subtitle'>¿Requiere de los siguientes servicios?</span>
                                <div className="col">
                                    <label className="form-check-label contact__Form-Services" htmlFor="transporter">Transportadora: </label>
                                    <input type="checkbox" className="form-check-input ms-1" id="transporter" />
                                    <br />
                                    <label className="form-check-label contact__Form-Services" htmlFor="vaccines">Vacunas: </label>
                                    <input type="checkbox" className="form-check-input ms-1" id="vaccines" />
                                    <br />
                                    <label className="form-check-label contact__Form-Services" htmlFor="microchip">Microchip: </label>
                                    <input type="checkbox" className="form-check-input ms-1" id="microchip" />
                                </div>
                                <div className="col">
                                    <label className="form-check-label contact__Form-Services" htmlFor="pension">Pensionado: </label>
                                    <input type="checkbox" className="form-check-input ms-1" id="pension" />
                                    <br />
                                    <label className="form-check-label contact__Form-Services" htmlFor="pension">Otros: </label>
                                    <input type="checkbox" className="form-check-input ms-1" id="others" />
                                </div>
                            </div>                   
                        
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Comentarios:'></textarea>
        
                        </div>
  
  
                        <button type="submit" className="btn contact__Form-Btn">Enviar</button>
                    </form>
                </div>
                <div className='col-lg-5 col-sm-12 contact__RightColumn'>
                    <Title text={"Contacto"} />
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Contact;