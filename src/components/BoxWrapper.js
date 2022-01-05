import React from 'react';
import Box from '@material-ui/core/Box';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

export default function BoxWrapper() {
    return (
        <Box component="article" className='box' sx={{ flexDirection: { xs: "column", md: "row" } }}>
            <LeftSection />
            <Box className='verticalDivider' sx={{ display: { xs: "none", md: "flex" } }}></Box>
            <RightSection />
        </Box>
    );
};
