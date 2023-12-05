import './contact.css'
import Title from '../Title/Title';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Contact = () => {

    const location = useLocation();
    const option = new URLSearchParams(location.search).get('option');
    const { t, i18n } = useTranslation();

    return (
        <div className='contact__Main-Container' id='contact'>
            <div className='container'>
                <div className='row flex-column-reverse flex-xl-row'>
                    <div className='col-lg-7 col-sm-12 contact__Form-Container'>
                    <form>
                        <div className="mb-3">                        
                            <label htmlFor="exampleInputPassword1" className="form-label contact__Form-Title">{t('cClient')}</label>

                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t('cContact')}/>                    
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t('cOrigin')}/>                    
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t('cDestiny')}/>                    
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>                    
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Tel'/>                    
                        </div>
                        {/* Pet's Data */}
                        <div className="mb-3">                        
                            <label htmlFor="exampleInputPassword1" className="form-label contact__Form-Title">{t('cPetData')}</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t('cPetName')}/>                    
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t('cColor')}/>                                                
                            <select 
                            className="form-select contact__Form-Species" 
                            aria-label="Default select example" 
                            defaultValue={option || ''}                            
                            >
                                <option value="" disabled >{t('cSpecies')}</option>
                                <option value="dog">{t('sDog')}</option>
                                <option value="cat">{t('sCat')}</option>
                                <option value="ferret">{t('sFerret')}</option>
                                <option value="exotic">{t('sExotic')}</option>
                            </select>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t('cBreed')}/> 

                            <div className="row">
                                <div className="col">
                                    <input type="number" className="form-control" placeholder={t('cWeight')} aria-label="weight" />
                                    <span>Kg</span>
                                </div>
                            <div className="col">
                                    <input type="date" className="form-control" aria-label="age" />
                                    <span>{t('cBirth')}</span>
                                </div>
                            </div>                   

                            <div className="row">
                                <span className='contact__Form-Subtitle'>{t('cMeasures')}</span>
                                <div className="col">
                                    <input type="number" className="form-control" placeholder={t('cLength')} aria-label="length" />                                
                                </div>
                                <div className="col">
                                    <input type="number" className="form-control" placeholder={t('cWidth')} aria-label="width" />                                
                                </div>
                                <div className="col">
                                    <input type="number" className="form-control" placeholder={t('cHeight')} aria-label="height" />                                
                                </div>
                                <div className="col">
                                    <input type="number" className="form-control" placeholder={t('cElbow')} aria-label="elbow" />                                
                                </div>
                            </div>                   

                            <div className="row">
                                <span className='contact__Form-Subtitle'>{t('cServices')}</span>
                                <div className="col">
                                    <label className="form-check-label contact__Form-Services" htmlFor="transporter">{t('cKennel')}</label>
                                    <input type="checkbox" className="form-check-input ms-1" id="transporter" />
                                    <br />
                                    <label className="form-check-label contact__Form-Services" htmlFor="vaccines">{t('cVaccines')}</label>
                                    <input type="checkbox" className="form-check-input ms-1" id="vaccines" />
                                    <br />
                                    <label className="form-check-label contact__Form-Services" htmlFor="microchip">Microchip: </label>
                                    <input type="checkbox" className="form-check-input ms-1" id="microchip" />
                                </div>
                                <div className="col">
                                    <label className="form-check-label contact__Form-Services" htmlFor="pension">{t('cBoarding')}</label>
                                    <input type="checkbox" className="form-check-input ms-1" id="pension" />
                                    <br />
                                    <label className="form-check-label contact__Form-Services" htmlFor="pension">{t('cOther')}</label>
                                    <input type="checkbox" className="form-check-input ms-1" id="others" />
                                </div>
                            </div>                   
                        
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={t('cComments')}></textarea>
                            <div className='row'>                                
                                <div className="mb-3 mt-2">
                                    <label htmlFor="formFile" className="form-label">{t('cAttachedImage')}</label>
                                    <input className="form-control" type="file" id="formFile"/>
                                </div>
                            </div>
                            
                        </div>
  
  
                        <button type="submit" className="btn contact__Form-Btn">{t('cSendBtn')}</button>
                    </form>
                </div>
                <div className='col-lg-5 col-sm-12 contact__RightColumn'>
                    <Title text={t('cTitle')} />
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Contact;