import * as yup from 'yup'



const basicSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('*'),
    name: yup.string().label('Name').required(('*')),
    lastName: yup.string().label('Last Name').required('*'),
    cityOfOrigin: yup.string().label('City').required('*'),
    cityOfDestiny: yup.string().label('City').required('*'),
    tel: yup.string().label('Phone').required('*'),
    petName: yup.string().label('Pet Name').required('*'),
    petColor: yup.string().label('Pet Color').required('*'),
    breed: yup.string().label('Breed').required('*'),
    weight: yup.number().label('Weight').required('*'),
    birth: yup.date().label('Birth Date').required('*'),
    length: yup.number().label('Length').required('*'),
    width: yup.number().label('Width').required('*'),
    height: yup.number().label('Height').required('*'),
    elbowHeight: yup.number().label('Elbow Height').required('*'),
    transporter: yup.boolean(),
    vaccines: yup.boolean(),
    microchip: yup.boolean(),
    pension: yup.boolean(),
    comments: yup.string().label('Comments'),
});

export default basicSchema;