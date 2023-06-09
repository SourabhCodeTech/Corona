import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { NavLink } from 'react-router-dom'

import "./countryDetails.css"


export default function countryDetails(props) {
    return (
        <div className="countryDetails">
            <div className="country-icon">
                
            <ReactCountryFlag
                className="country-flag"
                countryCode={props.countryCode}
                svg
                style={{
                    width: '3.5em',
                    height: '3.5m',
                }}
                title={props.countryCode}
            />
            <p style={{margin: '0px'}}><small>{props.Country}</small></p>

            </div>

            <div className="cases-details">
                <div className="cases-box Cases">
                    <NavLink to="#">{props.totalCase}</NavLink>
                    <p className="yesterday">Last 24 hours: <strong>{props.newCase}</strong></p>
                </div>
                <div className="cases-box Deaths">
                <NavLink to="#">{props.totalDeaths}</NavLink>
                    <p className="yesterday">Last 24 hours: <strong>{props.newDeaths}</strong></p>
                </div>
            </div>
                        
        </div>
    )
}
