import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Curasol from './components/Curasol';
import Footer from './components/Footer';
import Roadmap from './components/Roadmap';
import Starter from './components/Starter';
import Teams from './components/Teams';
import Timer from './components/Timer';
import FAQ from './components/FAQ';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Timer'>
            <Timer/>
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Teams">
            <Teams />
          </Route>
          <Route path="/FAQ">
            <FAQ />
          </Route>
          <Route path="/Mint">
            <Starter />
          </Route>
          <Route path="/Roadmap">
            <Roadmap />
          </Route>
        </Switch>
      </Router>
      
      <Timer />
      <hr />
      <Starter />
      <hr />
      <About />
      <hr />
      <Curasol />
      <hr />
      <Roadmap />
      <hr />
      <FAQ />
      <hr />
      <Teams />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
