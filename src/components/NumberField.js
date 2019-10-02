import React from 'react'
import {
    Box,
    Paper
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
}));

const NumberField = ({ displayed }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Box fontSize={500}>
                {displayed}
            </Box>
        </Paper>
    );
}

export default NumberField