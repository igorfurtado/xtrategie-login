import React from 'react';
import Footer from './components/Footer';
import Grid from '@material-ui/core/Grid';
import './CSS/index.css';
import BoxWrapper from './components/BoxWrapper';

function App() {
    return (
        <Grid container component="main" className='container'>
            <BoxWrapper />
            <Footer />
        </Grid>
    );
};

export default App;
