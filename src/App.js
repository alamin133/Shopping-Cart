

import classes from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import InputField from './components/serachBar/InputField';
import Main from './components/MainFiled/Main';


function App() {
  return (
    <div className={classes.App}>
    
  <Navbar title="DEVFINDER" text="LIGHT"/>
  <InputField text="Search"type="search fro github user"/>
  <Main />
      
    </div> 
  );
}

export default App;
