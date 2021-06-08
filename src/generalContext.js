import React, {useState, createContext} from 'react';

export const GeneralContext = createContext();

export const GeneralContextProvider = (props) => {

    const [errors, setErrors] = useState({});

    const validateData = () => {

        let validatedForm = {}

        if (!values.userName.trim()) {
            validatedForm.userNameError = "Name field is required.";
        }
        if (!values.email.trim()) {
            validatedForm.emailError = "Email field is required.";
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        {
            validatedForm.emailError = "Please enter a valid email address";
        }
        if (!values.message.trim()) {
            validatedForm.messageErrors = "Message field is required.";
        }
        setErrors(validatedForm);
    }

    const [values, setValues] = useState({
        userName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    const [btnMenu, setBtnMenu] = useState(false);
    const [test, setTest] = useState(true);
    const [modalMail, setModalMail] = useState(false);
    const [name, setName] = useState('');
    const [lang, setLang] = useState(localStorage.getItem('lang') ? localStorage.getItem('lang') : 'EN');
    const [portofolioColor, setPortofolioColor] = useState(localStorage.getItem('portofolioColor') ? localStorage.getItem('portofolioColor') : '#FFD408' );
    const changeLang = () => {
        lang === 'EN' ? setLang("RO") : setLang("EN");
    }

    const changeYellow = () => {
        setPortofolioColor('#FFD408');
    }
    const changeRed = () => {
        setPortofolioColor('#F44336');
    }
    const changeBlue = () => {
        setPortofolioColor('#54C158');
    }

    const changeGreen = () => {
        setPortofolioColor('#6EC7FF');
    }

    return (
        <GeneralContext.Provider value={{setBtnMenu, btnMenu, setTest, test, setModalMail, modalMail, setValues, validateData, errors, handleChange, values, setName, name, lang, changeLang, portofolioColor, changeYellow, changeRed, changeBlue, changeGreen}}>
            {props.children}
        </GeneralContext.Provider>
    )
}