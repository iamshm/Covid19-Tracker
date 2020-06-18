import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'
const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        console.log(dailyData);
        fetchAPI();
    }, [dailyData]);
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

    return (
        <div className={styles.container} xs={12}>
            {lineChart}
        </div>
    )
}

export default Chart;