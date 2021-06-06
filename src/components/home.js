
import { useState, useEffect, useContext } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { Zoom } from '@material-ui/core';
import MenuProfile from './menuProfile/menuProfile.js';
import CancelIcon from '@material-ui/icons/Cancel';
import WelcomePage from './WelcomePage/welcomePage.js';
import Projects from './Projects/projects.js';
import History from './History/history.js';
import Contacts from './Contacts/contacts.js';
import ProjectDetails from './ProjectDetails/projectDetails.js';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import './home.css';
import { GeneralContext } from '../generalContext.js';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles({
  modalSuccess: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: "#2D2D39",
    color: '#FFFFFF',
    top: '50%',
    left: '50%',
    padding: '40px',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    borderRadius: '20px',
  },
  clickMenu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    color: '#58585E',
    cursor: 'pointer',
    fontSize: '1.8rem',
    '&:hover': {
      backgroundColor: '#1b1b2463',
      color: 'white',
    }
  },
  langBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    backgroundColor: '#22222E',
    cursor: 'pointer',
    width: '50px',
    height: '50px',
    '&:hover': {
      opacity: '70%',
    }
  },
  langBoxOn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    backgroundColor: '#22222E',
    cursor: 'pointer',
    width: '50px',
    height: '50px',
    '&:hover': {
      opacity: '70%',
    }
  }
})

const Home = () => {
  const {setModalMail, modalMail, name, setName, lang, portofolioColor, changeLang} = useContext(GeneralContext);
  const classes = useStyles();

  const [modal, setModal] = useState(false);
  const [btnMenu, setBtnMenu] = useState(false);

  useEffect(() => {
    localStorage.setItem('portofolioColor', portofolioColor);
    localStorage.setItem('lang', lang);
    setName(lang === "EN" ? 'Home' : 'Acasă');
  }, [setName, portofolioColor, lang])

  const iconImage = {
    fontSize: '40px',
    color: portofolioColor,
    marginRight: '25px',
    cursor: 'pointer',
  }

  return (
    <Router>
    <div className="global">
    {
      modal &&        
      <div className = "modalImage">
        <div className = "modalMenuContent">
          <div className = "modalMenuImage">
            <CancelIcon className = "iconHover" style = {iconImage} onClick={() => setModal(false)} /> 
          </div>
          <div className = "biggerImage">
            <div className = "biggerImageContent" />
          </div>
        </div>
      </div>
    }
        <MenuProfile setModal = {setModal} />
        <div className="mainBlock">
          <div className="bigContent">
          <Modal
              open={modalMail}
              onClose={() => setModalMail(false)}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
                <div className={classes.modalSuccess}>
                <button className="btnModalClose" style={{backgroundColor: portofolioColor}} onClick={() => setModalMail(false)}>X</button>
                <CheckCircleOutlineIcon style={{color: portofolioColor, fontSize: '40px', marginRight: '30px'}} />
                <h2 className="modalTextForm">
                    Email sent successfully ! 
                </h2>
                </div>
            </Modal>
            <div className="emptyContainerMenu" />
            <div className="homeContent">
              <Switch>
                <Route path="/" exact component={WelcomePage} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/history" exact component={History} />
                <Route path="/contacts" exact component={Contacts} />
                <Route path="/projects/:project" children={<ProjectDetails />} />
              </Switch>
            </div>
          </div>
        </div>
          <div className= { btnMenu ? "btnMenuContainerActive" : "btnMenuContainer"}>
            <div className="topMenuColor" />
            <div className= {btnMenu ? "btnMenuOn" : "btnMenu"}>
              <Hamburger rounded  duration={0.8} size={40} color={portofolioColor}toggled={btnMenu} onToggle = {() => setBtnMenu(!btnMenu)} />
            </div>
            {btnMenu ?             
              <div className = "middleMenuActive" >
                <div className="middleMenuContent">
                  <Link to="/" 
                    style={{width: '100%', height: '100%', textDecoration: 'none'}} 
                    onClick={() => {setName(lang === "EN" ? 'Home' : 'Acasă'); setBtnMenu(!btnMenu)}}
                    >
                    <Zoom in={btnMenu} style={{ transitionDelay:  '525ms' }}>
                      <Typography className={classes.clickMenu}
                      >
                        {lang === "EN" ? 'Home' : 'Acasă'}
                      </Typography>
                    </Zoom>
                  </Link>
                  <Link to="/projects"
                    style={{width: '100%', height: '100%', textDecoration: 'none'}}  
                    onClick={() =>{ setName(lang === "EN" ? 'Projects' : 'Proiecte'); setBtnMenu(!btnMenu)}}
                    >
                    <Zoom in={btnMenu} style={{ transitionDelay:  '575ms' }}>
                      <Typography className={classes.clickMenu}>
                        {lang === "EN" ? 'Projects' : 'Proiecte'}
                      </Typography>
                    </Zoom>
                  </Link>
                  <Link to="/history" 
                    style={{width: '100%', height: '100%', textDecoration: 'none'}}  
                    onClick={() =>{  setName(lang === "EN" ? 'History' : 'Istoric'); setBtnMenu(!btnMenu)}}
                    >
                    <Zoom in={btnMenu} style={{ transitionDelay:  '625ms' }}>
                      <Typography className={classes.clickMenu}>
                        {lang === "EN" ? 'History' : 'Istoric'}
                      </Typography>
                    </Zoom>
                  </Link> 
                  <Link to="/contacts" 
                    style={{width: '100%', height: '100%', textDecoration: 'none'}}  
                    onClick={() =>{  setName(lang === "EN" ? 'Contacts' : 'Contact'); setBtnMenu(!btnMenu)}}
                    >
                    <Zoom in={btnMenu} style={{ transitionDelay:  '675ms' }}>
                      <Typography className={classes.clickMenu}>
                        {lang === "EN" ? 'Contacts' : 'Contact'}
                      </Typography>
                    </Zoom>
                  </Link>
                </div>
              </div> 
              : 
              <div className="middleMenuOff" >
                <Typography style = {{ letterSpacing: '8px', color: portofolioColor, fontSize: '30px'}}> {name} </Typography>
              </div>
            }

            <div className={btnMenu ? "bottomMenuActive": "bottomMenu"}>
              <Box className={classes.langBox} style={{border: `1px solid ${portofolioColor}`}} onClick={() => changeLang()}>
                <Typography style={{color: portofolioColor, fontWeight: 'bold'}}>{lang}</Typography>
              </Box>
            </div>
          </div>
      </div>
      </Router>
  );
}

export default Home;
