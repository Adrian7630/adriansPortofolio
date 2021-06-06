import {useContext, useEffect} from 'react';
import { GeneralContext } from "../../generalContext";
import './history.css';

const History = () => {
    const {setName, name, lang, portofolioColor} = useContext(GeneralContext);
    useEffect(() => {
        setName(lang === "EN" ? 'History' : 'Istoric');
      }, [setName, name, portofolioColor, lang])
    return (
        <div className="historyContainer">
            <div className="columnBox">
            <h1>{lang === "EN" ? "Education" : "Educație"}</h1>
                <div className="textBox">
                    <div className="circleAndTextBox">
                        <div className="cardTextBox">
                        <div className="traingleBox" />
                        <div className="circleHistoryContent" style={{ border: `6px solid ${portofolioColor}` }}/>
                        <div className="rowTitleBox">
                                <h2>Web Developer Courses</h2>
                                <p style = {{margin: '15px 0 10px 0'}}>{lang === "EN" ? "March 2020 - Present" : "Martie 2020 - Prezent"}</p>
                            </div>
                            <p className="statusBox">Self-Taught</p>
                            <p className="bigTextBox">
                            {lang === "EN" ? "While working as a Software Developer in 2018, I was introduced to ReactJS by a work colleague. I've always been curious about software development but after creating some small projects I was officially hooked. I took courses from Udemy for the learning ReactJs, Front-End." : "În timp ce lucram ca dezvoltator de software în 2018, am fost introdus în ReactJS de un prieten. Întotdeauna am fost curios cu privire la dezvoltarea de software, dar după ce am creat câteva proiecte mici, am fost oficial agățat. Am urmat cursuri de la Udemy pentru învățarea ReactJs, Front-End."}  
                            </p>
                        </div>
                        <div className="cardTextBox">
                        <div className="traingleBox" />
                        <div className="circleHistoryContent" style={{ border: `6px solid ${portofolioColor}` }}/>
                        <div className="rowTitleBox">
                                <h2>{lang === "EN" ? "University Gheorghe Asachi of Iași" :"Universitatea Gheorghe Asachi Iași"}</h2>
                                <p style = {{margin: '15px 0 10px 0'}}>{lang === "EN" ? "September 2014 - June 2018" : "Septembrie 2014 - Iunie 2018"}</p>
                            </div>
                            <p className="statusBox">Student</p>
                            <p className="bigTextBox">
                            {lang === "EN" ? "Used single-board computers like Raspberry Pi and Arduino learning the programming language C , C++ , Python .Took beginning classes for Web Dev , learning and creating small projects based on HTML/CSS/JS , ReactJS, Redux, GIT, SASS, BootStrap, jQuery .":"Am folosit microcontroller, cum ar fi Raspberry Pi și Arduino, care învață limbajul de programare C, C ++, Python. Am luat cursuri de începător pentru Web Development, învățând și creând proiecte mici bazate pe HTML / CSS / JS, ReactJS, Redux, GIT, SASS, BootStrap , jQuery."}</p>
                        </div>
                        <div className="cardTextBox">
                        <div className="traingleBox" />
                        <div className="circleHistoryContent" style={{ border: `6px solid ${portofolioColor}` }}/>
                        <div className="rowTitleBox">
                                <h2>{lang === "EN" ? "High School Teacher Nicolae Iorga" : "Liceul Pedagogic Nicolae Iorga"}</h2>
                                <p style = {{margin: '15px 0 10px 0'}}>{lang === "EN" ? "September 2010 - June 2014" : "Septembrie 2010 - Iunie 2014"}</p>
                            </div>
                            <p className="statusBox">{lang === "EN" ? "Scholar" : "Elev"}</p>
                            <p className="bigTextBox">
                            {lang === "EN" ? "Participated in a contest in which I had to create a website in one week using HTML,CSS,JS. In my last year of Highschool tooked classes for Network Software where I studied the basic concept of Cisco Property and Protocols." : "Am participat la un concurs în care a trebuit să creez un site într-o săptămână folosind HTML, CSS, JS. În ultimul meu an de liceu, am urmat cursuri pentru software de rețea, unde am studiat conceptul de bază al proprietăților și protocoalelor Cisco."}</p>
                        </div>
                    </div>
                    <div className="circleBar">
                        <div className="barMagic" />
                    </div>
                </div>
            </div>
            <div className="columnBox">
                <h1>{lang === "EN" ? "Work History" : "Istoric Servicii"}</h1>
                <div className="textBox">
                    <div className="circleAndTextBox">
                        <div className="cardTextBox">
                        <div className="traingleBox" />
                        <div className="circleHistoryContent" style={{ border: `6px solid ${portofolioColor}` }}/>
                            <div className="rowTitleBox">
                                <h2>Raisissoftware</h2>
                                <p style = {{margin: '15px 0 10px 0'}}>{lang === "EN" ? "November 2020 - Present": "Noiembrie 2020 - Prezent"}</p>
                            </div>
                            <p className="statusBox">Junior Front-End Developer</p>
                            <p className="bigTextBox">
                            {lang === "EN" ? "Worked with ReactJs and Material UI for building applications such as CRM, ERM, SPA and MPA. While creating the projects I learned NextJS, Express, MySQL while working with the Back-End team. Designing with Figma or Adobe XD for the CRM, ERP applications. " : "Am lucrat cu ReactJs și Material UI pentru construirea de aplicații precum CRM, ERM, SPA și MPA. În timp ce cream proiectele alături de echipa de Back-End, am învățat NextJS, Express, MySQL. Proiectare cu Figma sau Adobe XD pentru aplicațiile CRM, ERP."}
                            </p>
                        </div>
                        <div className="cardTextBox">
                        <div className="traingleBox" />
                        <div className="circleHistoryContent" style={{ border: `6px solid ${portofolioColor}` }} />
                        <div className="rowTitleBox">
                                <h2>Expleo Group</h2>
                                <p style = {{margin: '15px 0 10px 0'}}>{lang === "EN" ? "December 2018 - July 2020" : "Decembrie 2018 - Iulie 2020"}</p>
                            </div>
                            <p className="statusBox">Software Developer AUTOSAR</p>
                            <p className="bigTextBox">
                            {lang === "EN" ? "Analyze customer requirements , prepare specifications, do implementation in the area of control and data acquisition systems based on AUTOSAR protocol and Matlab projects compiled on CodeBlocks.Scripting code and solving the errors occurred during the testing process with based on Python." : "Analizarea cerințele clienților, pregătirea specificațiile, efectuarea implementarea în zona sistemelor de control și achiziție de date bazate pe protocolul AUTOSAR și proiectele Matlab compilate pe CodeBlocks.Criptarea codului și rezolvarea erorilor apărute în timpul procesului de testare cu ajutorul Python." }
                            </p>
                        </div>
                        <div className="cardTextBox">
                        <div className="traingleBox" />
                        <div className="circleHistoryContent" style={{ border: `6px solid ${portofolioColor}` }}/>
                        <div className="rowTitleBox">
                                <h2>Continental</h2>
                                <p style = {{margin: '15px 0 10px 0'}}>{lang === "EN" ? "October 2018 - December 2018" : "Octombrie 2018 - Decembrie 2018"}</p>
                            </div>
                            <p className="statusBox">Internship Software Developer</p>
                            <p className="bigTextBox">
                            {lang === "EN" ? "Software implementation using C/C++ as main programming language. Development using C/C++ and Python as secondary programming languages for specific tasks; Perform the set-up and maintain continuous integration and evaluation systems." : "Implementare software folosind C / C ++ ca limbaj de programare principal. Dezvoltare folosind C / C ++ și Python ca limbaje de programare secundare pentru sarcini specifice; Efectuați configurarea și mențineți sisteme continue de integrare și evaluare." }
                            </p>
                        </div>
                        <div className="cardTextBox">
                        <div className="traingleBox" />
                        <div className="circleHistoryContent" style={{ border: `6px solid ${portofolioColor}` }}/>
                        <div className="rowTitleBox">
                                <h2>Amazon</h2>
                                <p style = {{margin: '15px 0 10px 0'}}>{lang === "EN" ? "June 2017 - August 2018" : "Iunie 2017 - August 2018"}</p>
                            </div>
                            <p className="statusBox">Summer Internship</p>
                            <p className="bigTextBox">
                            {lang === "EN" ? "Worked with an Arduino board , writing the Arduino code in the IDE then uploads it to the microcontroller which executes the code, interacting with the inputs and outputs as sensors, motors and lights." : "Am lucrat cu o placă Arduino, scriind codul Arduino în IDE, apoi îl încărcam pe microcontrolerul care execută codul, interacționând cu intrările și ieșirile ca senzori, motoare și lumini." }
                            </p>
                        </div>
                    </div>
                    <div className="circleBar">
                        <div className="barMagic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History;
