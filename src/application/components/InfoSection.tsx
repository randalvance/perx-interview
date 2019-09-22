import React from 'react';

import { times } from 'lodash';

import { makeStyles, Paper, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    infoSection: {
        padding: theme.spacing(3),
    },
    emptyText: {
        marginTop: theme.spacing(1),
    },
}));

const InfoSection: React.FC<{
    title: string;
    isLoading: boolean;
    isEmpty: boolean;
    emptyText: string;
}> = ({ children, title, isLoading, isEmpty, emptyText }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.infoSection}>
            <Typography variant="h5" component="h2">
                {title}
            </Typography>
            {isEmpty && (
                <Typography
                    className={classes.emptyText}
                    variant="body1"
                    component="p"
                >
                    {emptyText}
                </Typography>
            )}
            {isLoading
                ? times(10).map(id => <Skeleton key={id} variant="text" />)
                : children}
        </Paper>
    );
};

export default InfoSection;
