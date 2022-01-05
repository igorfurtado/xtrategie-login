import React from 'react';
import Grid from '@material-ui/core/Grid';
import Form from './Form';
import Title from './Title';

export default function RightSection() {
    return (
        <Grid item md={6} elevation={6} className='info-side' component="section">
            <Title />
            <Form />
        </Grid>
    );
};
