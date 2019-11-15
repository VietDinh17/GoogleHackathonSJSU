import React from 'react';
import { Grid } from '@material-ui/core';

const Home = () => {
    return (
        <div>
            <Grid container direction="col" justify="flex-start" alignItems="center">
                <Grid container direction="row" justify="center" alignItems="fex-start">
                    <Grid item xs={2}>
                        <h1>#</h1>
                    </Grid>
                    <Grid item xs={8}>
                        <h1>Title</h1>
                    </Grid>
                    <Grid item xs={2}>
                        <h1>Difficulty</h1>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="fex-start">
                    <Grid item xs={2}>
                        <h2>112</h2>
                    </Grid>
                    <Grid item xs={8}>
                        <h2>Quick Sort Algorithm</h2>
                    </Grid>
                    <Grid item xs={2}>
                        <h2>Medium</h2>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;