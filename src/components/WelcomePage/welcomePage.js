import {useContext} from 'react';
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { GeneralContext } from "../../generalContext";
import TypeWriterEffect from 'react-typewriter-effect';
import './welcomePage.css';
import CountUp from 'react-countup';

const useStyles = makeStyles({
    textNumber: {
        marginRight: '20px',
        fontSize: '30px',
    },
    textLetter: {
        fontSize: '20px',
    },
    titleService: {
        fontSize: '28px',
        marginBottom: '10px',
        fontWeight: 'bold',
    },
    textService: {
        fontSize: '20px',
        color: '#57575E',
        paddingRight: '40px',
    }
  })

const WelcomePage = () => {
    const classes = useStyles();
    const { lang, portofolioColor} = useContext(GeneralContext);

    return (
        <div className="mainContainerWelcome">
            <div className="welcomeSign">
                <p className="welcomeTitle">{lang === "EN" ? 'Discover my amazing projects !' : 'Descoperă proiectele mele uimitoare !' }</p>
                <div className="codeText">
                    &lt;<span style={{color: portofolioColor, fontWeight: 'bold'}}>code</span>&gt; 
                    <p className="codeTextTest">{lang === "EN" ? "I like playing with" : "Îmi place să învăț"} {' '}</p>
                    <TypeWriterEffect
                        textStyle={{
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        fontSize: '30px',
                        }}
                        startDelay={625}
                        cursorColor={portofolioColor}
                        multiText={[
                        'ReactJS',
                        'Animations',
                        'Material UI',
                        'Tailwind',
                        'Chakra UI?',
                        'SASS',
                        'Figma',
                        'Javascript',
                        'ReactJS',
                        ]}
                        loop={true}
                        nextTextDelay={425}
                        typeSpeed={30}
                    />
                    <p style ={{marginLeft: '15px'}} />&lt;/<span style={{color: portofolioColor, fontWeight: 'bold'}}>code</span>&gt;
                </div>
                    <Link to="/projects" style={{textDecoration: 'none'}}>
                        <button className="btnExplore" style={{backgroundColor: portofolioColor}}>{lang === "EN" ? "Explore now" : "Explorează"}</button>
                     </Link>
            </div>

            <div className="yearsContainer">
                <div className="boxYears">
                    <Typography className={classes.textNumber} style={{color: portofolioColor}}><CountUp end={1}/>+</Typography>
                    <Typography className={classes.textLetter}> {lang === "EN" ? "Years Experience" : "Ani Experiență" }</Typography>
                </div>
                <div className="boxYears">
                    <Typography className={classes.textNumber} style={{color: portofolioColor}}><CountUp end={14}/></Typography>
                    <Typography className={classes.textLetter}> {lang === "EN" ? "Completed Projects" : "Proiecte Terminate" }</Typography>
                </div>
                <div className="boxYears">
                    <Typography className={classes.textNumber} style={{color: portofolioColor}}><CountUp end={21}/></Typography>
                    <Typography className={classes.textLetter}> {lang === "EN" ? "Tehnologies Used" : "Tehnologii Utilizate" }</Typography>
                </div>
                <div className="boxYears">
                    <Typography className={classes.textNumber} style={{color: portofolioColor}}><CountUp end={4}/>+</Typography>
                    <Typography className={classes.textLetter}> {lang === "EN" ? "Completed Courses" : "Cursuri Terminate" }</Typography>
                </div>
            </div>
            <div className="columnService">
                <Typography style = {{color: '#FFFFFF', fontSize: '35px', fontWeight: 'bold'}}>{lang === "EN" ? "My Skills" : "Aptitudini" } </Typography>
                <div className="boxService">
                    <div className="boxRowService">
                        <Typography className={classes.titleService} style={{color: portofolioColor}}>Front-End Development</Typography>
                        <Typography className={classes.textService}>
                        {lang === "EN" ? "Started my career as a Junior Front-End Developer with the main focus on ReactJS, also learning new technologies like Material-UI and Redux." : "Mi-am început cariera ca Junior Front-End Developer cu accentul principal pe ReactJS, învățând și noi tehnologii precum Material-UI și Redux."}                        </Typography>
                    </div>
                    <div className="boxRowService">
                        <Typography className={classes.titleService} style={{color: portofolioColor}}>Back-End Development</Typography>
                        <Typography className={classes.textService}>
                        {lang === "EN" ? "Learning more about the Front-End section I took beginner courses for back-end to understand the workflow of an application, exercising with NodeJS and Express." : "Aflând mai multe despre secțiunea Front-End, am luat cursanți începători pentru back-end pentru a înțelege fluxul de lucru al unei aplicații, făcând exerciții cu NodeJS și Express."}
                        </Typography>
                    </div>
                    <div className="boxRowService">
                        <Typography className={classes.titleService} style={{color: portofolioColor}}>UI/UX Design</Typography>
                        <Typography className={classes.textService}>
                        {lang === "EN" ? "Used Adobe XD or Figma for creating templates after meeting with the clients and discussing the specification needed for the application." : "Am folosit Adobe XD sau Figma pentru crearea de șabloane după întâlnirea cu clienții și pentru a discuta specificațiile necesare pentru aplicație."}
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="footerWelcome">
                <p>&copy; 2021 Adrian's Portofolio </p>
                <p>{lang === "EN" ? "Creator":"Creat" }: Adrian Prisacaru</p>
            </div>
        </div>
    )
}

export default WelcomePage;
