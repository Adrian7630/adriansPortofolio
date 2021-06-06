
import './globalStyle.css';
import Home from './components/home.js';
import { GeneralContextProvider } from './generalContext';

const RenderElement = () => <GeneralContextProvider> <Home/> </GeneralContextProvider>

export default RenderElement;
