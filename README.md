![Alt text](./src/assets/logo/logoRoundSM.png)
# Animates Travel

Basic handling for editing Animates Travel website. 
Built with Vite Enviroment. 
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Packages used

- "@emailjs/browser": "^3.11.0" - Form delivery (Owner has credentials)
- "formik": "^2.4.5" - Building forms
- "i18next": "^23.7.7" - Translation
- "react": "^18.2.0" - Framework
- "react-dom": "^18.2.0" - Framework
- "react-elfsight-widget": "^1.1.1" - Widget for embeding Instagram feed (Owner has credentials)
- "react-helmet": "^6.1.0" - Script implementation
- "react-router-dom": "^6.20.1" - Navigation
- "react-router-hash-link": "^2.4.3" - Navigation
- "react-toastify": "^9.1.3", - For formatting alerts
- "yup": "^1.3.2" - Form validation
- Bootstrap - Styling

## Usage 
### Translation
The folder "config" contains the setup configuration for translations. Prefault is spanish for the whole site. 
Public\locales contains the different languages. 

### Form
Form is built using formik and yup, which are both imported from 'formik' and 'yup'. Delivery is handled with @emailjs. 
The "Species" input is can be modify in the form or using the cards in the "Services" section.
The animal cards pass the data to the form via context. This is set up in the "state" forlder.
Form validation is handled with Yup, the configuration for this is on the schemas folder. On the form you use a conditional class for every input. 

NOT EVERY FIELD REQUIERES VALIDATION
### Titles
Titles are a component and added to every section needed. 
Texts are handled by i18n and have a prefix of 't'. The key will match the filename, without the .tsx

### Components
The following sections have components in their folders:
- About
- Our Services
- Tips
- Reviews

### Style
Style is done through CSS modules and Bootstrap classes. Each jsx file has its own css file. 

Bootstrap is used mostly to handle responsiveness and pre built items such as forms and Navbar. 








