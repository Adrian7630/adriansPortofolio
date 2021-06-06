
import { Typography } from '@material-ui/core';

const ResponsiveTypograpy = (props) => {
  const {size, textColor, classText} = props;

  const styleText = {
    color: `${textColor}`,
    fontSize: `calc(${size}px + (14) * ((100rem) / (100vw)))`,
   }
  
  return (
    <div style = {classText}>
      <Typography style={styleText}>
          {props.children}
      </Typography>
    </div>
  );
}

export default ResponsiveTypograpy;
