import React from 'react';
import { List, Grid } from '@material-ui/core';
import styled from 'styled-components';
import { problems } from '../constants/mockdata';
import { Link } from 'react-router-dom'

const Button = styled.div`
    :hover{
        background-color: yellow
    }
`;

const CustomList = styled(List)`
    width: 100%;
    max-width: 800;
`

const ProblemList = () => {

    const handleClick = value => {
        console.log(value.id);
    };



    return (
        <CustomList>
            {problems.map(value => {
                return (
                    <Link to={{pathname: '/test',
                        state:{
                        id: value.id
                    }}} key={value.id} style={{ textDecoration: 'none' }}>
                        <Button >
                            <Grid container direction="row" justify="center" alignItems="flex-start">
                                <Grid item xs={2}>
                                    <h2>{value.id}</h2>
                                </Grid>
                                <Grid item xs={8}>
                                    <h2>{value.title}</h2>
                                </Grid>
                                <Grid item xs={2}>
                                    <h2>{value.difficulty}</h2>
                                </Grid>
                            </Grid>
                        </Button>
                    </Link>

                );
            })}
        </CustomList>
    )
}

export default ProblemList;