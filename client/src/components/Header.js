import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	height: 70px;
	background-color: black;
	z-index: 1000
`;

export default function Header() {
	return (
		<Container>
        
			<Toolbar >
				<Grid container spacing={3} >
					<Grid item xs>
						<Link to="/" style={{ textDecoration: 'none' }}>
							<h3 style={{ color: 'white' }}>Algo-quiz</h3>
						</Link>

					</Grid>
					<Grid item xs={6}>
					</Grid>
					<Grid item xs container>

					</Grid>
				</Grid>
			</Toolbar>
		</Container>
	)
}