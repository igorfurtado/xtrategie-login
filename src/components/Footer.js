import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
    return (
        <footer className='footer'>
            <Typography variant="body2" color="textSecondary" align="center">
                {'© Software Powered by Xtrategie'}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {'2009-2021'}
            </Typography>
        </footer>
    );
};
