import React from 'react';

import { Cards, Chart, CountryPicker, ButtonAppBar } from './components'
import styles from './App.module.css'

import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });

    }
    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <ButtonAppBar />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}
export default App;