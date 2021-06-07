import { useState, useContext } from 'react'; 
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MyCV from '../CV/CV_Adrian_Prisacaru.pdf';
import SettingsIcon from '@material-ui/icons/Settings';
import DoneIcon from '@material-ui/icons/Done';
import GetAppIcon from '@material-ui/icons/GetApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CropFreeIcon from '@material-ui/icons/CropFree';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ProgressCircleBar from './progressBarContainer/progressCircle';
import ProgressBarContainer from './progressBarContainer/progressBarContainer';
import ResponsiveTypograpy from '../ResponsiveTypography/responsiveTypography';


import './menuProfileStyle.css';
import { GeneralContext } from '../../generalContext';

const useStyles = makeStyles({
  rowText:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '10px',
  },
  listProfile: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '10px',
  },
  downloadCvProfile: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '10px',
    paddingBottom: '20px',
  },
  settingsIcon: {
    fontSize: '40px',
    cursor: 'pointer',
    transition: 'transform .7s ease-in-out',
    marginRight: '10px',
    '&:hover': {
      transform: 'rotate(360deg)',
    },
  },
  linkCv: {
    cursor: 'pointer',
    textDecoration: 'none',

    '&:hover': {
      opacity: '70%',
    },
  },
  footerIcon: {
    fontSize: '33px',
    cursor: 'pointer',
    '&:hover': {
      opacity: '70%',
    },
  }
})

const englishTitle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}


const MenuProfile = (props) => {
  const { setModal } = props;
  const { lang, portofolioColor, changeYellow, changeRed, changeBlue, changeGreen} = useContext(GeneralContext);
  const classes = useStyles();
  const [test, setTest] = useState(!false);

  return (
    <div className= {test ? "menuOn" : "menuOff"}>
      <div className="dotAppear">
        <MoreVertIcon className = "menuMobileDots" style={{fontSize: '50px', color: portofolioColor}} onClick={() => setTest(!test)} />
      </div>
      <div className= {test ? "menuProfileOn" : "menuProfileOff"}>
      <div className="avatarProfile">
        <div className = "imageAvatar">
          <div className = "cicle" style={{ background: portofolioColor }} >
            <div className = "textPulse">
              <div className = "textPulseContent">
                {lang === "EN" ? "I'm available for interviews." : "Sunt disponibil pentru interviuri." }
              </div>
            </div>
            <div className = "pulse" style={{ background: portofolioColor }} />
          </div>
          <div className="hoverImageContainer" onClick={() => setModal(true)}>
            <div className="hoverImageBox">
              <CropFreeIcon />
            </div>
          </div>
        </div>
        <ResponsiveTypograpy size = {6} textColor= '#FFFFFF'>
          Prisacaru Adrian
        </ResponsiveTypograpy>
        <ResponsiveTypograpy size = {3} textColor= '#58585E'>
          Front-end Developer
        </ResponsiveTypograpy>
        <div className="settingsContainer">
          <SettingsIcon className={classes.settingsIcon} style={{ color: portofolioColor}} />
          <div 
            style={{backgroundColor: '#FFD408', marginRight: '10px'}} 
            onClick = {() => changeYellow() } 
          />
          <div 
            style={{backgroundColor: '#F44336', marginRight: '10px'}} 
            onClick = {() => changeRed() } 
          />
          <div 
            style={{backgroundColor: '#54C158', marginRight: '10px'}} 
            onClick = {() => changeBlue() } 
          />
          <div 
            style={{backgroundColor: '#6EC7FF', marginRight: '10px'}} 
            onClick = {() => changeGreen() } 
          />
        </div>
      </div>
      <div className="hideScrollBar">
      <div className="contentProfile"> 
        <div className="emptyBox" />
        <Box>
            <Box className={classes.rowText}>
              <ResponsiveTypograpy size = {3} textColor= '#FFFFFF'>
              {lang === "EN" ? "Country" : "Țara"}:
              </ResponsiveTypograpy>
              <ResponsiveTypograpy size = {1} textColor= '#58585E'>
               România
              </ResponsiveTypograpy>
            </Box>
            <Box className={classes.rowText}>
            <ResponsiveTypograpy size = {3} textColor= '#FFFFFF'>
                {lang === "EN" ? "City" : "Oraș"}:
              </ResponsiveTypograpy>
              <ResponsiveTypograpy size = {1} textColor= '#58585E'>
               Botoșani
              </ResponsiveTypograpy>
            </Box>
            <Box className={classes.rowText}>
            <ResponsiveTypograpy size = {3} textColor= '#FFFFFF'>
            {lang === "EN" ? "Age" : "Vârstă"}:
              </ResponsiveTypograpy>
              <ResponsiveTypograpy size = {1} textColor= '#58585E'>
                26
              </ResponsiveTypograpy>
            </Box>
        </Box>
        <div className="lineMenu" />
        <ResponsiveTypograpy size = {6} textColor= '#FFFFFF' classText={englishTitle} >
        {lang === "EN" ? "English": "Engleză"}
        </ResponsiveTypograpy>
        <div className="circleContent">
          <ProgressCircleBar circleColor = {portofolioColor} circleCompleted = {88} />
          <ProgressCircleBar circleColor = {portofolioColor} circleCompleted = {83} />
          <ProgressCircleBar circleColor = {portofolioColor}  circleCompleted = {93} />
        </div>
        <div className="circleContainerBox">
        <ResponsiveTypograpy size = {5} textColor= '#FFFFFF'>
        {lang === "EN" ? "Writing": "Scris"}
              </ResponsiveTypograpy>
              <ResponsiveTypograpy size = {5} textColor= '#FFFFFF'>
              {lang === "EN" ? "Speaking": "Vorbit"}
              </ResponsiveTypograpy>
              <ResponsiveTypograpy size = {5} textColor= '#FFFFFF'>
              {lang === "EN" ? "Reading": "Citire"}
              </ResponsiveTypograpy>
        </div>
        <div className="lineMenu" />
          <ProgressBarContainer barColor = {portofolioColor} textProgress = {'HTML + CSS'} completed = {81} />
          <ProgressBarContainer barColor = {portofolioColor} textProgress = {'JS'} completed = {73} />
          <ProgressBarContainer barColor = {portofolioColor} textProgress = {'ReactJs'} completed = {79} />
          <ProgressBarContainer barColor = {portofolioColor} textProgress = {'NodeJs + Express'} completed = {27} />
        <div className="lineMenu" />
        <div>
          <Box className={classes.listProfile}>
              <DoneIcon style={{fontSize: '30px', color: portofolioColor, paddingRight: '10px'}} />
              <ResponsiveTypograpy size = {1} textColor= '#58585E'>
              ReactJS, Tailwind
              </ResponsiveTypograpy>
          </Box>
          <Box className={classes.listProfile}>
              <DoneIcon style={{fontSize: '30px', color: portofolioColor, paddingRight: '10px'}} />
              <ResponsiveTypograpy size = {1} textColor= '#58585E'>
              Material UI, SASS
              </ResponsiveTypograpy>
          </Box>
          <Box className={classes.listProfile}>
              <DoneIcon style={{fontSize: '30px', color: portofolioColor, paddingRight: '10px'}} />
              <ResponsiveTypograpy size = {1} textColor= '#58585E'>
              GIT, Heroku
              </ResponsiveTypograpy>
          </Box>
          <Box className={classes.listProfile}>
              <DoneIcon style={{fontSize: '30px', color: portofolioColor, paddingRight: '10px'}} />
              <ResponsiveTypograpy size = {1} textColor= '#58585E'>
              Style Components
              </ResponsiveTypograpy>
          </Box>
          <Box className={classes.listProfile}>
              <DoneIcon style={{fontSize: '30px', color: portofolioColor, paddingRight: '10px'}} />
              <ResponsiveTypograpy size = {1} textColor= '#58585E'>
              Figma, Adobe XD
              </ResponsiveTypograpy>
          </Box>
          <Box className={classes.listProfile}>
              <DoneIcon style={{fontSize: '30px', color: portofolioColor, paddingRight: '10px'}} />
              <ResponsiveTypograpy size = {1} textColor= '#58585E'>
              Postman, RESTful API
              </ResponsiveTypograpy>
          </Box>
        </div>
        <div className="lineMenu" />
        <Box>
          <Box className={classes.downloadCvProfile}>
            <GetAppIcon style={{fontSize: '30px' , color: portofolioColor, paddingRight: '10px'}} />
            <a href={MyCV} download="CV_Adrian_Prisacaru.pdf" className = {classes.linkCv} style = {{color: portofolioColor}}>
              {lang === "EN" ? "DOWNLOAD CV": "DESCARCĂ CV"}
            </a>
          </Box>
        </Box>
      </div>
      </div>
      <div className="linkProfile">
          <a href="https://www.linkedin.com/in/adrian-prisacaru-a9a45815b/" target="_blank" rel="noreferrer">
            <LinkedInIcon className = {classes.footerIcon} style = {{color: portofolioColor}} />
          </a>
          <a href="https://github.com/Adrian7630" target="_blank" rel="noreferrer">
            <GitHubIcon className = {classes.footerIcon} style = {{color: portofolioColor}} />
          </a>
      </div>
      </div>
    </div>
  );
}

export default MenuProfile;
