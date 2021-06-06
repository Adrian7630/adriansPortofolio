import { useContext, useEffect } from 'react';
import SwiperCore, { Pagination, Scrollbar, Navigation } from 'swiper';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { projects } from '../Projects/text.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { GeneralContext } from "../../generalContext";
import { Link, useParams } from "react-router-dom";
import './projectDetails.css';
import { detailsProject } from './textScript.js';
import CountUp from 'react-countup';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const ProjectDetails = () => {

    const {setName, name, lang, portofolioColor } = useContext(GeneralContext);
    const { project } = useParams();

    let date1 = new Date(detailsProject[project].dateStart);
    let date2 = detailsProject[project].dateEnd === 'Present' ? new Date() : new Date(detailsProject[project].dateEnd) ;
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    useEffect(() => {
        setName(lang === "EN" ? 'Projects' : 'Proiecte');
      }, [setName, name, portofolioColor, lang])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [project])

    return (
        <div className="projectsContainer">
                <div className="projectsContent">
                <h1>{detailsProject[project].title} </h1>
                <div className="imageContent">
                    <img src={detailsProject[project].img} alt="project_photo"/>
                </div>
                <div className="showBlock">
                    <div>
                        <span style={{color: portofolioColor}}>                        
                        <CountUp  end ={Number(Math.round(Difference_In_Days))} /> +</span>
                        <p>{lang === "EN" ? "Days Worked" : "Zile Lucrate"}</p>
                    </div>
                    <div>
                        <span style={{color: portofolioColor}}>                        
                        <CountUp  end ={Number(detailsProject[project].techUsed)} /> +</span>
                        <p>{lang === "EN" ? "Tehnologies Used" : "Tehnologii Folosite"}</p>
                    </div>
                    <div>
                        <span style={{color: portofolioColor}}>                        
                        <CountUp  end ={Number(detailsProject[project].taskWork)} /> +</span>
                        <p>{lang === "EN" ? "Tasks" : "Sarcini"}</p>
                    </div>
                </div>
                <div className="mainBlockContainer">
                    <div className="detailBlockLeft">
                        <h3>
                        {detailsProject[project].headTitle}
                        </h3>
                        <p>
                        {detailsProject[project].subHeadTitle[lang]}
                        </p>
                        <div className="listBlock">
                            <h2>{lang === "EN" ? "Libraries used for creating the application:": "Bibliotecile utilizate pentru crearea aplicației:"}</h2>
                                {detailsProject[project].skillsFront.map((skill, index) => 
                                    <div key = {"skillFront_" + index }>
                                        <div className="circleDetails" style={{ border: `4px solid ${portofolioColor}`}}/>
                                        <h4>{skill}</h4>
                                    </div>
                                )}
                        </div>
                        <div className="listBlock">
                            <h2>{lang === "EN" ? "The server side was implemented by using:": "Partea server a fost implementată utilizând:"}</h2>
                                {detailsProject[project].skillsBack.map((skill, index) => 
                                    <div key = {"skillBack_" + index }>
                                        <div className="circleDetails" style={{ border: `4px solid ${portofolioColor}`}}/>
                                        <h4>{skill}</h4>
                                    </div>
                                )}
                        </div>
                        {
                            detailsProject[project].linkHead !== '' ?
                            <div className="linkBlock">
                            <p>
                            {lang === "EN" ? "Have a look of the application :" : "Aruncați o privire asupra aplicației: "}
                            </p>
                            <a href= {detailsProject[project].linkHead} style={{color: portofolioColor}}  target="_blank" rel="noreferrer">
                            {lang === "EN" ? "Live Application" : "Aplicație Live"}
                            </a>
                        </div> :
                        <></>
                        }
                    </div>
                    <div className="detailBlockRight">
                        <div>
                            <p>{lang === "EN" ? "Start Date:": "Dată Început:"}</p>
                            <p className="answer">{detailsProject[project].dateStart}</p>
                        </div>
                        <div>
                            <p>{lang === "EN" ? "End Date:": "Dată Sfârșit:"}</p>
                            <p className="answer">{detailsProject[project].dateEnd}</p>
                        </div>
                        <div>
                            <p>{lang === "EN" ? "Category:": "Categorie:"}</p>
                            <p className="answer">{detailsProject[project].category}</p>
                        </div>
                        <div>
                            <p>{lang === "EN" ? "Tehnology:": "Tehnologie:"}</p>
                            <p className="answer">{detailsProject[project].tehnology}</p>
                        </div>
                    </div>
                </div>
                <div className="btnProjectDetails">
                    <Link to='/projects' style={{textDecoration: 'none'}}>
                        <h1 style={{color: portofolioColor}}>{lang === "EN" ? "BACK TO PROJECTS" : "ÎNAPOI LA PROIECTE"}</h1>
                    </Link>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    scrollbar={{draggable: true}}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    style={{cursor: 'grab', padding: '0 50px 0 50px'}}
                    breakpoints={{
                        "1300": {
                            "slidesPerView": 2,
                          },
                          "1200": {
                            "slidesPerView": 1,
                          },
                        "1100": {
                          "slidesPerView": 1,
                        },
                        "620": {
                          "slidesPerView": 1,
                        },
                        "100": {
                          "slidesPerView": 1,
                        }}}
                    >
                        {projects.filter(itemName => project !== itemName.title).map((swipeItem, index) => 
                        <SwiperSlide key = {"SwipeProject_" + index} style={{marginTop: '50px', marginBottom: '60px'}}>
                            <div className="boxTest">
                                <img className="testImg" src={swipeItem.img} alt="portofolio" />
                                <div className="boxTextSwiper">
                                    <h4>
                                        {swipeItem.title}
                                    </h4>
                                    <p>
                                        {swipeItem.subTitle[lang]}
                                    </p>
                                    <Link to={swipeItem.linkProject} style={{ textDecoration: 'none', color: portofolioColor}}>
                                        <p>{lang === "EN" ? "FIND OUT MORE" : "AFLĂ MAI MULT"}</p> <span><ArrowForwardIosIcon/></span> 
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>        
                        )}          
                </Swiper>
                </div>
        </div>
    )
}

export default ProjectDetails;
