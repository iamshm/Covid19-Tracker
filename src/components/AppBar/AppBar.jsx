import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import cx from 'classnames';
import styles from './AppBar.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    return (
        <div className={cx(classes.root, styles.container)}>
            <AppBar position="static" color="black" className={styles.appBar}>
                <Toolbar>

                    <Typography variant="h4" className={cx(classes.title, styles.name)}> Covid 19 Tracker </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}
