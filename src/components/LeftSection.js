import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function LeftSection() {
    return (
        <Grid item md={6} component="section">
            <div className="logo">
                <img src="./assets/logo_xtrategie.png" alt='Logo Xtrategie'></img>
            </div>
        </Grid>
    );
};
