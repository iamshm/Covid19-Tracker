import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'
import { Grid } from '@material-ui/core';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        console.log(dailyData);
        fetchAPI();
    }, []);
    const lineChart = (
        dailyData.length
            ?
            <Line

                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Positive',
                        borderColor: '#FAD458',
                        fill: true,
                    }, {

                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: '#F5885D',
                        backgroundColor: '#F5885D',
                        fill: true,
                    }]
                }}
            /> : null
    );
    const barChart = (

        confirmed ?
            (<Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ["#FAD458", "#4DFA6C", "#F5885D"],
                            data: [
                                confirmed.value, recovered.value, deaths.value
                            ]
                        }]

                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state of ${country}` },
                }}
            />) : null
    );
    return (
        <div className={styles.container} >
            <Grid container justify="center"><Grid item xs={0} md={12} lg={12}>
                {country ? barChart : lineChart}
            </Grid>

            </Grid>

        </div>
    )
}

export default Chart;