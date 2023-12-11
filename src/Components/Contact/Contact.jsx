import './contact.css'
import Title from '../Title/Title';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../state/AnimalCard.Context';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useState } from 'react';
import basicSchema from '../../schemas';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const Contact = () => {

    const { option, setOption } = useAppContext();
    const { t, i18n } = useTranslation();
    const formRef = useRef(null);
    
    //Handle Image Attachment
    const [attachment, setAttachment] = useState(null);


    const send = async () => {
        try {
            const emailParams = {
                to_name: "Recipient Name",
                from_name: 'Your Name',
                message: "Email message here",
            };
    
            if (attachment) {
                const reader = new FileReader();
                reader.readAsDataURL(attachment);
    
                reader.onload = async (e) => {
                    const fileBase64 = reader.result.split(',')[1];
                    emailParams.file = fileBase64;
    
                    await emailjs.sendForm('service_j80reiy', 'template_nvz8y31', formRef.current, 'ietTVU-Jq_0wMYeK-', emailParams);
                };
            } else {
                // Si no hay adjunto, simplemente enviar el formulario sin el campo de archivo.
                await emailjs.sendForm('service_j80reiy', 'template_nvz8y31', formRef.current, 'ietTVU-Jq_0wMYeK-', emailParams);
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };
    
    

      const onSubmit = async (values, actions) => {
        console.log('submitted');
        await send(); 
        toast.success( t('cAlert'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm()
    }

    const handleSelectChange = (event) => {
        setOption(event.target.value);
    };

    const { values, errors, touched, handleBlur, isSubmitting, handleChange, handleSubmit } = useFormik ({
        initialValues: {
            name:"",
            lastName:"",
            cityOfOrigin:"",
            cityOfDestiny:"",
            email:"",
            tel:"",
            petName:"",
            petColor:"",
            breed:"",
            weight:"",
            birth:"",
            length:"",
            width:"",
            height:"",
            elbowHeight:"",
            transporter:"",
            vaccines:"",
            microchip:"",
            pension:"",
            comments:"",
        },
        validationSchema: basicSchema,
        onSubmit,
    })
    console.log(errors)
    return (
        <div className='contact__Main-Container' id='contact'>
            <div className='container'>
                <div className='row flex-column-reverse flex-xl-row'>
                    <div className='col-lg-7 col-sm-12 contact__Form-Container'>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="mb-3">                        
                            <label htmlFor="exampleInputPassword1" className="form-label contact__Form-Title">{t('cClient')}</label>

                            {errors.name && touched.name && <p className='contact__Form-Error'>{errors.name}</p>}
                            <input 
                            value= {values.name} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text" 
                            className={`form-control ${errors.name && touched.name ? 'input-error' : ''}`}
                            id="name" 
                            aria-describedby="Contact Input" 
                            placeholder={t('cName')} 
                            autoComplete='given-name' 
                            name='name'
                            />  
                            
                            {errors.name && touched.lastName && <p className='contact__Form-Error'>{errors.lastName}</p>}
                            <input 
                            value= {values.lastName} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text" 
                            className={`form-control ${errors.lastName && touched.lastName ? 'input-error' : ''}`}
                            id="lastName" 
                            aria-describedby="Contact Input" 
                            placeholder={t('cLastName')} 
                            autoComplete='given-name' 
                            name='lastName'
                            />                    
                            
                            {errors.name && touched.cityOfOrigin && <p className='contact__Form-Error'>{errors.cityOfOrigin}</p>}
                            <input 
                            value= {values.cityOfOrigin} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text" 
                            className={`form-control ${errors.cityOfOrigin && touched.cityOfOrigin ? 'input-error' : ''}`}
                            id="cityOfOrigin" 
                            aria-describedby="City Of Origin Input" 
                            placeholder={t('cOrigin')} 
                            name='cityOfOrigin'
                            />                    
                            
                            {errors.name && touched.cityOfDestiny && <p className='contact__Form-Error'>{errors.cityOfDestiny}</p>}
                            <input 
                            value= {values.cityOfDestiny} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text" 
                            className={`form-control ${errors.cityOfDestiny && touched.cityOfDestiny ? 'input-error' : ''}`}
                            id="cityOfDestiny" 
                            aria-describedby="City of Destiny Input" 
                            placeholder={t('cDestiny')} 
                            name='cityOfDestiny'
                            />                    
                            
                            {errors.name && touched.email && <p className='contact__Form-Error'>{errors.email}</p>}                
                            <input 
                            value= {values.email} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text" 
                            className={`form-control ${errors.email && touched.email? 'input-error' : ''}`}
                            id="email" 
                            aria-describedby="Email Input" 
                            placeholder='Email'
                            name='email' 
                            />

                            {errors.name && touched.tel && <p className='contact__Form-Error'>{errors.tel}</p>}    
                            <input 
                            value= {values.tel} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="number" 
                            className={`form-control ${errors.tel && touched.tel? 'input-error' : ''}`} 
                            id="tel" 
                            aria-describedby="Telephone Number Input" 
                            placeholder='Tel' 
                            name='tel'
                            />                    
                            
                        </div>
                        
                        <div className="mb-3">                        
                            <label htmlFor="exampleInputPassword1" className="form-label contact__Form-Title">{t('cPetData')}</label>
                            
                            {errors.name && touched.petName && <p className='contact__Form-Error'>{errors.petName}</p>}                
                            <input 
                            value= {values.petName} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text" 
                            className={`form-control ${errors.petName && touched.petName ? 'input-error' : ''}`}
                            id="petName" aria-describedby="Pet Name Input" 
                            placeholder={t('cPetName')} 
                            name='petName'
                            />    
                            
                            {errors.name && touched.petColor && <p className='contact__Form-Error'>{errors.petColor}</p>}                                                
                            <input 
                            value= {values.petColor} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text" 
                            className={`form-control ${errors.petColor && touched.petColor ? 'input-error' : ''}`}
                            id="petColor" 
                            aria-describedby="Pet Color" 
                            placeholder={t('cColor')} 
                            name='petColor'
                            />
                            
                            
                            <select                                                                                                  
                                className={`form-select contact__Form-Species ${errors.species && touched.species ? 'input-error' : ''}`}
                                id='specie'
                                aria-label="Select you pet's specie"                             
                                value={option}
                                onChange={handleSelectChange}                                
                                onBlur={handleBlur}        
                                name='specie'                        
                            >
                                <option value="" >{t('cSpecies')}</option>
                                <option value="dog">{t('sDog')}</option>
                                <option value="cat">{t('sCat')}</option>
                                <option value="ferret">{t('sFerret')}</option>
                                <option value="exotic">{t('sExotic')}</option>
                            </select>
                            <input type="hidden" id='selectedSpecies' name="selectedSpecies" value={option} />

                            {errors.name && touched.breed && <p className='contact__Form-Error'>{errors.breed}</p>}
                            <input 
                            value= {values.breed} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text" 
                            className={`form-control ${errors.breed && touched.breed ? 'input-error' : ''}`}
                            id="breed" 
                            aria-describedby="Breed Input" 
                            placeholder={t('cBreed')}      
                            name='breed'                       
                            /> 
                            
                            <div className="row">
                                <div className="col">

                                    {errors.name && touched.weight && <p className='contact__Form-Error'>{errors.weight}</p>}
                                    <input 
                                    value= {values.weight} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="number" 
                                    id='weight' 
                                    className={`form-control ${errors.weight && touched.weight ? 'input-error' : ''}`}
                                    placeholder={t('cWeight')} 
                                    aria-label="input weight"
                                    name='weight' 
                                    />                                    
                                    <span>Kg</span>
                                </div>
                            <div className="col">

                                    {errors.name && touched.birth && <p className='contact__Form-Error'>{errors.birth}</p>}
                                    <input 
                                    value= {values.birth} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="date" 
                                    id='birth' 
                                    className={`form-control ${errors.birth && touched.birth ? 'input-error' : ''}`} 
                                    aria-label="input age"
                                    name='birth' 
                                    />
                                    
                                    <span>{t('cBirth')}</span>
                                </div>
                            </div>                   

                            <div className="row">
                                <span className='contact__Form-Subtitle'>{t('cMeasures')}</span>
                                <div className="col">

                                    {errors.name && touched.length && <p className='contact__Form-Error'>{errors.length}</p>}     
                                    <input 
                                    value= {values.length} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="number" 
                                    id='length' 
                                    className={`form-control ${errors.length && touched.length ? 'input-error' : ''}`} 
                                    placeholder={t('cLength')} 
                                    aria-label="input length" 
                                    name='length'
                                    />                           
                                    
                                </div>
                                <div className="col">
                                    
                                    {errors.name && touched.width && <p className='contact__Form-Error'>{errors.width}</p>}    
                                    <input 
                                    value= {values.width} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="number" 
                                    id='width' 
                                    className={`form-control ${errors.width && touched.width ? 'input-error' : ''}`}
                                    placeholder={t('cWidth')} 
                                    aria-label="input width" 
                                    name='width'
                                    />                            
                                    
                                </div>
                                <div className="col">
                                    
                                    {errors.name && touched.height && <p className='contact__Form-Error'>{errors.height}</p>}     
                                    <input 
                                    value= {values.height} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="number" 
                                    id='height' 
                                    className={`form-control ${errors.height && touched.height ? 'input-error' : ''}`}
                                    placeholder={t('cHeight')} 
                                    aria-label="input height" 
                                    name='height'
                                    />                           
                                    
                                </div>
                                <div className="col">
                                    
                                    {errors.name && touched.elbowHeight && <p className='contact__Form-Error'>{errors.elbowHeight}</p>}    
                                    <input 
                                    value= {values.elbowHeight} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="number" 
                                    id='elbowHeight' 
                                    className={`form-control ${errors.elbowHeight && touched.elbowHeight ? 'input-error' : ''}`}
                                    placeholder={t('cElbow')} 
                                    aria-label="input elbow height"
                                    name='elbowHeight'
                                    />                            
                                    
                                </div>
                            </div>                   

                            <div className="row">
                                <span className='contact__Form-Subtitle'>{t('cServices')}</span>
                                <div className="col">
                                    <label className="form-check-label contact__Form-Services" htmlFor="transporter">{t('cKennel')}</label>
                                    <input 
                                    value= {values.transporter} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="checkbox" 
                                    className="form-check-input ms-1" 
                                    id="transporter"
                                    name='transporter' 
                                    />
                                    <br />
                                    <label className="form-check-label contact__Form-Services" htmlFor="vaccines">{t('cVaccines')}</label>
                                    <input 
                                    value= {values.vaccines} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="checkbox" 
                                    className="form-check-input ms-1" 
                                    id="vaccines" 
                                    name='vaccines'
                                    />
                                    <br />
                                    <label className="form-check-label contact__Form-Services" htmlFor="microchip">Microchip: </label>
                                    <input 
                                    value= {values.microchip} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="checkbox" 
                                    className="form-check-input ms-1" 
                                    id="microchip" 
                                    name='microchip'
                                    />
                                </div>
                                <div className="col">
                                    <label className="form-check-label contact__Form-Services" htmlFor="pension">{t('cBoarding')}</label>
                                    <input 
                                    value= {values.pension} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="checkbox" 
                                    className="form-check-input ms-1" 
                                    id="pension" 
                                    name='pension'
                                    />
                                    <br />
                                    <label className="form-check-label contact__Form-Services" htmlFor="pension">{t('cOther')}</label>
                                    <input 
                                    type="checkbox" 
                                    value={values.others}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="form-check-input ms-1" 
                                    id="others" 
                                    name='others'
                                    />
                                </div>
                            </div>                   
                        
                            <textarea 
                            value= {values.comments} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='comments' 
                            className="form-control" 
                            rows="3" 
                            placeholder={t('cComments')}
                            name='comments'
                            />                                                            
                            <div className='row'>                                
                                <div className="mb-3 mt-2">
                                    <label htmlFor="formFile" className="form-label">{t('cAttachedImage')}</label>
                                    <input className="form-control" name='my_file' type="file" id="formFile" onChange={(e) => setAttachment(e.target.files[0])}/>
                                </div>
                            </div>
                            
                        </div>
  
  
                        <button type="submit" className="btn contact__Form-Btn" disabled={isSubmitting} >{t('cSendBtn')}</button>
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