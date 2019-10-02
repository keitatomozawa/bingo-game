import React from 'react';
import {
    Grid,
    Paper,
    Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
}));

const HistoryView = ({ history }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} xs={12}>
            {history.slice(0, 12).concat(Array(12).fill("　")).slice(0, 12).map((num, idx) => (
                <Grid key={idx} item xs={1}>
                    <Paper className={classes.paper} >
                        <Box fontSize={32}>{num}</Box>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    )
};


export default HistoryView