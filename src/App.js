import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Component/Mediaquery.css'
import Navbar from './Component/Navbar';
import Home from './Component/Home'
import About from './Component/About'
import Footer from './Component/Footer';
import Covid from './Component/Covid';
import CovidGraph from './Component/CovidGraph';
import CovidTrakerCountryWise from './Component/CovidTrakerCountryWise'
import WorldTracker from './Component/WorldMapTracker/components/Covid19'

function App() {
  return (
    <>
    <div style={{paddingBottom: '65px'}}>
    <Navbar />
    </div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/covid" component={Covid} />
        <Route exact path="/covidGraph" component={CovidGraph} />
        <Route exact path="/covidTrackerCountryWise" component={CovidTrakerCountryWise} />
        <Route exact path="/worldMapTracker" component={WorldTracker} />
      </Switch>
    </Router>
    <Footer />

    </>
  );
}

export default App;
