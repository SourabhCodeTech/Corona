import { useEffect, useState } from 'react';
import './Covid.css';

function Covid() {

    const [data, setData] = useState([])

    const getCovidData = async () => {
        const response = await fetch('https://data.covid19india.org/data.json')
        const actualData = await response.json();
        console.log(actualData.statewise);
        setData(actualData.statewise)
    }


    // code for the time and date 
    let a;
    let date;
    let time;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setInterval(() => {
        a = new Date();
        date = a.toLocaleDateString(undefined, options);
        time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
        document.getElementById('time').innerHTML = time + "<br> " + date;
    }, 1000);

    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <section id="Covid">
            <br />
            <div className="mb-5">
                <h2 className="text-center">COVID-19 <span className="livesym">🔴</span>LIVE TRACKER</h2>
            </div>
            <p className="display-4 date">Time : <span id="time"></span></p>
            <br />
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>State Name</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated Time</th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                            data.map((curElem, index) => {
                                return (
                                    <tr key={index}>
                                        <td> {curElem.state} </td>
                                        <td> {curElem.confirmed} </td>
                                        <td> {curElem.recovered} </td>
                                        <td> {curElem.deaths} </td>
                                        <td> {curElem.active} </td>
                                        <td> {curElem.lastupdatedtime} </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </section>
    );
}

export default Covid;
