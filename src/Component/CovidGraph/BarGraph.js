import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(
    Tooltip, Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    BarElement
)

const BarGraph = ({ chartData }) => {
    const [chart, setChart] = useState([])

    let baseUrl = `https://data.covid19india.org/data.json`;

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(`${baseUrl}`)
            let json = await response.json()
            setChart(json.statewise)
        }
        fetchData()
    }, [baseUrl])

    var data = {
        labels: chart?.map(x => x.state),
        datasets: [
            {
                label: `Deaths`,
                data: chart?.map(x => x.deaths),
                borderWidth: 2,
                borderColor: 'red',
                backgroundColor: 'red'
            },
            {
                label: `Recovered`,
                data: chart?.map(x => x.recovered),
                borderWidth: 2,
                borderColor: 'green',
                backgroundColor: 'green'
            },
            {
                label: `Confirmed`,
                data: chart?.map(x => x.confirmed),
                borderWidth: 2,
                borderColor: 'blue',
                backgroundColor: 'blue'
            },
        ]
    }

    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontsize: 26
            }
        }
    }
    return (
        <div style={{ color: 'white', width: '90vw', margin: 'auto' }}>
            <Line data={data} style={{ color: 'white', height: 300, width: 1200 }} options={options} />
        </div>
    );
}

export default BarGraph;