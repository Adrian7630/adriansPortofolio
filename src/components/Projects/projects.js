import { useContext, useState, useEffect } from 'react';
import { GeneralContext } from "../../generalContext";
import './projects.css';
import { projects, newer, older, working } from './text.js';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Zoom } from '@material-ui/core';
import { Link } from "react-router-dom";


const Projects = () => {
    const {setName, name, lang, portofolioColor} = useContext(GeneralContext);
    const [color, setColor] = useState(1);
    useEffect(() => {
        setName(lang === "EN" ? 'Projects' : 'Proiecte');
      }, [setName, name, portofolioColor, lang])

    return (
        <div className="projectsContainer">
                <div className="projectsContent">
                <h1>{ lang === "EN" ? "My Projects" : "Proiecte"}</h1>
                    <div className="menuProjects">
                        <button className="btnProject" onClick={() => setColor(1)} style={color === 1 ?  {color: portofolioColor, opacity: '100%'} :  {color: '#FFFFFF'}}>{ lang === "EN" ? "All Projects" : "Toate Proiectele" }</button>
                        <button className="btnProject"  onClick={() => setColor(2)} style={color === 2 ?  {color: portofolioColor, opacity: '100%'} :  {color: '#FFFFFF'}}>{ lang === "EN" ? "Newer Projects" : "Proiecte Noi" }</button>
                        <button className="btnProject"  onClick={() => setColor(3)} style={color === 3 ?  {color: portofolioColor, opacity: '100%'} :  {color: '#FFFFFF'}}>{ lang === "EN" ? "Working Projects" : "Proiecte în Lucru" }</button>
                        <button className="btnProject"  onClick={() => setColor(4)} style={color === 4 ?  {color: portofolioColor, opacity: '100%'} :  {color: '#FFFFFF'}}>{ lang === "EN" ? "Older Projects" : "Proiecte Vechi" }</button>
                    </div>
                    <div className="gridContainer">
                        {color === 1 && projects.map((item, index) =>              
                        <Zoom in={color  === 1 ? true : false} style={{ transitionDelay:  item.time }} key={"projectKey_All" + index}>      
                            <div className="boxPortofolio">
                                <img className="testImg" src={item.img} alt="portofolio" />
                                <div className="slideBox">
                                    <h3 style={{color: portofolioColor}}>
                                    {item.title}
                                    </h3>
                                    <p>
                                    {item.subTitle[lang]}
                                    </p>
                                    <Link to={item.linkProject} style = {{color: portofolioColor}} ><p>{lang === "EN" ? "READ MORE" : "AFLĂ MAI MULT"}</p> <span><ArrowForwardIosIcon/></span></Link>
                                </div>
                            </div>
                            </Zoom>
                        )}
                                            {color === 2 && newer.map((item, index) =>              
                        <Zoom in={color === 2 ? true : false} style={{ transitionDelay:  item.time }} key={"projectKey_Newer" + index}>      
                            <div className="boxPortofolio">
                                <img className="testImg" src={item.img} alt="portofolio" />
                                <div className="slideBox">
                                    <h3 style={{color: portofolioColor}}>
                                    {item.title}
                                    </h3>
                                    <p>
                                    {item.subTitle[lang]}
                                    </p>
                                    <Link to={item.linkProject} style = {{color: portofolioColor}} ><p>{lang === "EN" ? "READ MORE" : "AFLĂ MAI MULT"}</p> <span><ArrowForwardIosIcon/></span></Link>
                                </div>
                            </div>
                            </Zoom>
                        )}
                         {color === 3 && working.map((item, index) =>              
                        <Zoom in={color  === 3 ? true : false} style={{ transitionDelay:  item.time }} key={"projectKey_Working" + index}>      
                            <div className="boxPortofolio">
                                <img className="testImg" src={item.img} alt="portofolio" />
                                <div className="slideBox">
                                    <h3 style={{color: portofolioColor}}>
                                    {item.title}
                                    </h3>
                                    <p>
                                    {item.subTitle[lang]}
                                    </p>
                                    <Link to={item.linkProject} style = {{color: portofolioColor}} ><p>{lang === "EN" ? "READ MORE" : "AFLĂ MAI MULT"}</p> <span><ArrowForwardIosIcon/></span></Link>
                                </div>
                            </div>
                            </Zoom>
                        )}
                         {color === 4 && older.map((item, index) =>              
                        <Zoom in={color  === 4 ? true : false} style={{ transitionDelay:  item.time }} key={"projectKey_Older" + index}>      
                            <div className="boxPortofolio">
                                <img className="testImg" src={item.img} alt="portofolio" />
                                <div className="slideBox">
                                    <h3 style={{color: portofolioColor}}>
                                    {item.title}
                                    </h3>
                                    <p>
                                    {item.subTitle[lang]}
                                    </p>
                                    <Link to={item.linkProject} style = {{color: portofolioColor}}  ><p>{lang === "EN" ? "READ MORE" : "AFLĂ MAI MULT"}</p> <span><ArrowForwardIosIcon/></span></Link>
                                </div>
                            </div>
                            </Zoom>
                        )}
                    </div>
                </div>
        </div>
    )
}

export default Projects;
