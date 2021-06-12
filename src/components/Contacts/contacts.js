import {useContext, useState, useEffect} from 'react';
import emailjs from 'emailjs-com';
import { GeneralContext } from "../../generalContext";
import { HiOutlineMail } from 'react-icons/hi';
import { SiMailDotRu } from 'react-icons/si';
import { FaUserAlt } from 'react-icons/fa';
import './contacts.css';
import React from 'react';

const Contacts = () => {
    const {setModalMail, setValues, validateData, errors, handleChange, values, name, setName, lang, portofolioColor} = useContext(GeneralContext); 
    const [test, setTest] = useState(false);

    useEffect(() => {
        setName(lang === "EN" ? 'Contacts' : 'Contact');
      }, [setName, name, lang])

    const sentEmail = (event) => {
          event.preventDefault();
          if(values.userName !== "" && values.email !== "" && values.message !== "" && Object.keys(errors).length === 0 && test)
          {
              setModalMail(true);
              emailjs.sendForm('gmail', 'portofolio_template', event.target, 'user_TVSiLna0aJ3sBylFvYN3R')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              setValues({
                userName: '',
                email: '',
                message: '',
            });
          }
          event.target.reset();
    }

    const clickSubmit = () => {
        validateData();
        setTest(true);
    }

    return (
        <div className="contactsContainer">
            <h1>{lang === "EN" ? "Contact Information" : "Informații Contact"}</h1>
            <div className="infoBox">
                <div className="dataBox">
                    <p><span>{lang === "EN" ? "Country" : "Țara"}:</span> <span>România</span></p>
                    <p><span>{lang === "EN" ? "City" : "Oraș"}:</span> <span>Botoșani</span> </p>
                    <p><span>{lang === "EN" ? "Address" : "Adresă"}:</span> <span>Impărat Traian Nr. 12</span></p>
                </div>
                <div className="dataBox">
                    <p><span>Skype:</span><span>live:.cid.689ba5290b78cf22</span></p>
                    <p><span>Email:</span> <span>prisacaru.adrian25@gmail.com</span></p>
                    <p><span>{lang === "EN" ? "Phone/Whatsapp" : "Telefon/Whatsapp"}:</span> <span>0748051195</span></p>
                </div>
            </div>
            <h1 className="touchContent">
                {lang === "EN" ? "Get in touch!" : "Intră în legătură!"}
            </h1>
            <div className="mailBox">
                <form onSubmit={sentEmail}>
                    <div className="inputBox">
                        <div 
                            className="iconBox" 
                            style={{backgroundColor: values.userName !== '' ? portofolioColor : "#20202A"}}
                        >
                            <FaUserAlt style={{color: values.userName !== '' ? 'black' : "#8C8C8E"}} />
                        </div>
                        <input 
                            name="userName" 
                            placeholder={lang === "EN" ? "Name ..." : "Nume ..."} 
                            required 
                            type="text" 
                            className="inputType" 
                            value={values.userName}
                            onChange={handleChange}
                            style={errors.userNameError && {border: '1px solid red'}}
                        />
                    </div>
                    {errors.userNameError && <p className="errorBox">{errors.userNameError}</p>}
                    <div className="inputBox">
                        <div 
                            className="iconBox" 
                            style={{backgroundColor: values.email !== '' ? portofolioColor : "#20202A"}}
                        >
                            <SiMailDotRu style={{color: values.email !== '' ? 'black' : "#8C8C8E"}} />
                        </div>
                        <input 
                            name="email" 
                            placeholder="Email ..." 
                            required 
                            type="email" 
                            className="inputType" 
                            value={values.email}
                            onChange={handleChange}
                            style={errors.emailError && {border: '1px solid red'}}
                        />
                    </div>
                    {errors.emailError && <p className="errorBox">{errors.emailError}</p>}
                    <div className="inputBoxMsg">
                        <div 
                            className="iconBoxMsg" 
                            style={{backgroundColor: values.message !== '' ? portofolioColor : "#20202A"}}
                        >
                            <HiOutlineMail style={{color: values.message !== '' ? 'black' : "#8C8C8E"}} />
                        </div>
                        <textarea 
                            name="message" 
                            placeholder={lang === "EN" ? "Message ...": "Mesaj ..."} 
                            required 
                            type="textarea"
                            className="inputTypeMsg" 
                            value={values.message}
                            onChange={handleChange}
                            style={errors.messageErrors && {border: '1px solid red'}}
                        />
                    </div> 
                    {errors.messageErrors && <p className="errorBox">{errors.messageErrors}</p>}
                    <button 
                        className="btnMessage" 
                        style={{backgroundColor: portofolioColor}} 
                        onClick={() => clickSubmit()}
                        type="submit"
                    >
                        {lang === "EN" ? "Send Message" : "Trimite Mesaj"}
                    </button>  
                    </form> 
            </div>
        </div>
    )
}

export default Contacts;
