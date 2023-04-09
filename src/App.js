import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './Component/Mediaquery.css'
import Navbar from './Component/Navbar';
import Home from './Component/Home'
import About from './Component/About'
import Footer from './Component/Footer';
import Covid from './Component/Covid';
import CovidGraph from './Component/CovidGraph';
import CovidTrakerCountryWise from './Component/CovidTrakerCountryWise'

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/covid" component={Covid} />
        <Route exact path="/covidGraph" component={CovidGraph} />
        <Route exact path="/covidTrackerCountryWise" component={CovidTrakerCountryWise} />
      </Switch>
    </Router>
    <Footer />

    </>
  );
}

export default App;
