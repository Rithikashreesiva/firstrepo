import './App.css';
import { Home } from './Components/Home';
import HomeClass from './Components/HomeClass';
import About from './Components/About';
import AboutClass from './Components/AboutClass';
import LifeCycleComponent from './Components/LifeCycleComponent';
import RenderingComponent from './Components/RenderingComponent';
import DesignComponent from './Components/DesignComponent';

function App() {
  return (
    <>
      <About name="App component" work="parent component" />
      <AboutClass name="About class component" work="parent component" />
      <LifeCycleComponent name="Example" />
      <RenderingComponent name="rendering component" />
      <DesignComponent/>
    </>
  );
}

export default App;

