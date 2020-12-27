import logo from './logo.svg';
import './App.css';
import DemoHookUseState from './Hook/DemoHookUseState';
import DemoUseEffect from './Hook/DemoUseEffect';
import DemoJss from './JSS_StyledComponent/DemoJss/DemoJss';
import DemoTheme from './JSS_StyledComponent/ThemeComponent/DemoTheme';
import DemoHookUseCallback from './Hook/DemoHookUseCallback';
import DemoHookUseMemo from './Hook/DemoHookUseMemo';
import DemoUseRef from './Hook/DemoUseRef';
import DemoUseReducer from './Hook/DemoUseReducer';



function App() {
  return (
    <div className="App">
      {/* <DemoHookUseState></DemoHookUseState> */}
      {/* <DemoUseEffect></DemoUseEffect> */}
      {/* <DemoJss></DemoJss> */}
     {/* <DemoTheme></DemoTheme> */}
     {/* <DemoHookUseCallback></DemoHookUseCallback> */}
     {/* <DemoHookUseMemo></DemoHookUseMemo> */}
     {/* <DemoUseRef></DemoUseRef> */}
     <DemoUseReducer></DemoUseReducer>
    </div>
  );
}

export default App;
