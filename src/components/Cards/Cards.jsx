import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return "Loading!....";
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={10} justify="center">
                <Grid item component={Card} xs={10} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography gutterBottom className={cx(styles.title)} > Infected  </Typography>
                        <Typography variant="h5" className={cx(styles.count)}>
                            <CountUp start={0} end={confirmed.value} duration={2} separator="," />
                        </Typography>
                        <Typography className={cx(styles.lastUp)} > {new Date(lastUpdate).toDateString()}  </Typography>
                        <Typography variant="caption" >Number of active cases of Covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={10} md={3} className={cx(styles.card, styles.recovered)} >
                    <CardContent>
                        <Typography gutterBottom className={cx(styles.title)} > Recovered  </Typography>
                        <Typography variant="h5" className={cx(styles.count)}>
                            <CountUp start={0} end={recovered.value} duration={2} separator="," />
                        </Typography>
                        <Typography className={cx(styles.lastUp)} > {new Date(lastUpdate).toDateString()}  </Typography>
                        <Typography variant="caption">Number of recovered from Covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={10} md={3} className={cx(styles.card, styles.deaths)} >
                    <CardContent>
                        <Typography gutterBottom className={cx(styles.title)} > Death  </Typography>
                        <Typography variant="h5" className={cx(styles.count)} >
                            <CountUp start={0} end={deaths.value} duration={2} separator="," />
                        </Typography>
                        <Typography className={cx(styles.lastUp)} > {new Date(lastUpdate).toDateString()}  </Typography>
                        <Typography variant="caption">No of died from Covid19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div >
    )
}

export default Cards;