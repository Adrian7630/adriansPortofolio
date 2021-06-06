import { Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import ResponsiveTypography from '../../ResponsiveTypography/responsiveTypography';

const ProgressBarContainer = (props) => 
{
    const { barColor, textProgress, completed } = props;
    const [calculation, setCalculation] = useState(0);

    const rowText = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '10px',
    }

    const textBarContainer = {
        height: '6px',
        borderRadius: '20px',
        backgroundColor: '#191923',
        marginTop: '10px',
      }

      const fillerStyles = {
        width: `${calculation}%`,
        height: '100%',
        backgroundColor: `${barColor}`,
        borderRadius: '20px',
        transition: 'width 1s ease-in-out',
        transitionDuration: '2s',
        transitionTimingFunction: 'linear',
      }

      useEffect(() => {
        if(calculation < completed)
        {
          setCalculation(calculation + 2.25);
        }
      }, [calculation, completed]);

    return (

    <div>
        <Box style={rowText}>
            <ResponsiveTypography size = {1} textColor= '#FFFFFF'>
              {textProgress}
            </ResponsiveTypography>
            <ResponsiveTypography size = {1} textColor= '#58585E'>
              <CountUp end={completed} duration={3}></CountUp>%
            </ResponsiveTypography>
        </Box>
        <div style={textBarContainer}>
            <div style={fillerStyles} />
        </div>
    </div>

  )
}

export default ProgressBarContainer;