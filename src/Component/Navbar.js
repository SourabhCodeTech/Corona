import React from 'react'
import '../Component/Navbar.css'
// import covidlogo from './image/covid-logo.png'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand covid-logo-hover" href="/"><span id="covid_logo"><span id="blue">C</span>OVID-19</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" style={{alignItem: "center"}}>
            <li className="nav-item" style={{padding: '0px 10px'}}>
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item" style={{padding: '0px 10px'}}>
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item" style={{padding: '0px 10px'}}>
              <a className="nav-link" href="/about#symptoms">Symptoms</a>
            </li>
            <li className="nav-item" style={{padding: '0px 10px'}}>
              <a className="nav-link" href="/about#protect">Precaustions</a>
            </li>
            <li className="nav-item" style={{padding: '0px 10px'}}>
              <a className="nav-link" href="/about#vaccine">Vaccination</a>
            </li>
            <li className="nav-item" style={{padding: '0px 10px'}}>
              <a className="nav-link" href="/about#pandemic">Pandamic</a>
            </li>
            
            <li className="nav-item" style={{padding: '0px 10px'}}>
              <a className="nav-link" href="/covidGraph">Covid Graph</a>
            </li>
            <div class="btn-group">
              <button class="btn btn-pimary btn-sm dropdown-toggle" style={{backgroundColor: '#007bff'}} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Covid Tackers
              </button>
  <div class="dropdown-menu" style={{backgroundColor: '#dc3545'}}>
    <li className="nav-item">
              <a className="nav-link" href="/covid">Covid-19 Tracker</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/covidTrackerCountryWise">Country Wise Tracker</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/worldMapTracker">WorldTracker</a>
            </li>
  </div>
</div>
            
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar
