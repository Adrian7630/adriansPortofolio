import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import CircularProgress from '@material-ui/core/CircularProgress';
import ResponsiveTypography from '../../ResponsiveTypography/responsiveTypography';

const ProgressCircleBar = (props) => 
{
    const { circleColor, circleCompleted } = props;
    const [circleCalc, setCircleCalc] = useState(0);

    const container = {
        display: 'inline-flex',
        position: 'relative',
        transition: 'width 1s ease-in-out',
        transitionDuration: '2s',
        transitionTimingFunction: 'linear',
    }

    const circleContainer = {
         display: 'flex', 
         justifyContent: 'center',
         alignItems: 'center',
         width: '65px', 
         color: `${circleColor}`,
         transitionDuration: '2s',
    }

    const showText = {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

      useEffect(() => {
            const timer = setInterval(() => {
                if(circleCalc < circleCompleted)
                {
                  setCircleCalc(circleCalc + 5.25);
                }
              }, 120);
            return () => {
                clearInterval(timer);
            };
      }, [circleCalc, circleCompleted]);

    return (
            <div style = {container} >
                <CircularProgress variant="determinate" value={circleCalc} style={circleContainer} />
                <ResponsiveTypography size = {5} textColor= '#58585E' classText= {showText} >
                <CountUp end={circleCompleted} duration={3}></CountUp>%
                </ResponsiveTypography>
            </div>
  )
}

export default ProgressCircleBar;