import React from 'react';

import {
    AppBar,
    Button,
    Container,
    CssBaseline,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        paddingBottom: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const MainWrapper: React.FC<{}> = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Perx React App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md">{children}</Container>
        </div>
    );
};

export default MainWrapper;
