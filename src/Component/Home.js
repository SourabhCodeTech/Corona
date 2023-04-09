import React from 'react'
// import homebg from './image/homebg.jpg'
import './Home.css'
import help from './image/home-image.gif'

function Home() {
    return (
        <>
            <div className="outer">
                <div className="home">
                <p className="quotes">
                    Don't lose hope.
                    <br />
                
                   When the sun goes down, Stars come out!!
                </p>
                <br />
                    <h1 className="head-h">Stay Home, Stay Safe</h1>
                    <div className="p-home">
                     <p >
                     You don't need to be worry about this pandemic situation.
                     <br />
                     We are here to help you to recover from Covid-19.
                     <br />
                     Our aim is to speard awareness among the people about Corona.
                     <br />
                     We are trying to  help people by providing neccessary information as well as protection tools.
 
                     </p>
                     </div>
                     <div className="help">
                     <img src={help} alt="Help" />

                     </div>
                    
                </div>
            </div>


        </>
    )
}

export default Home
