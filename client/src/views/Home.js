import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import ProblemList from '../components/ProblemList';

const MainContainer = styled.div`
    width:800px; 
    margin:0 auto; 
`;

const Home = () => {
    return (
        <div>
            <MainContainer>
                <Grid container direction="column" justify="flex-start" alignItems="center">
                    <Grid container direction="row" justify="center" alignItems="flex-start">
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
                    <ProblemList/>
                </Grid>
            </MainContainer>
        </div>
    )
}

export default Home;