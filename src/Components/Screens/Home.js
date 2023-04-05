import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { Button, ButtonGroup } from '@mui/material';
import MiddleBox from './MiddleBox';


function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function BackToTop(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar>
                <Toolbar style={{ backgroundColor: "#8e44ad" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': { m: 2, }, }} >
                        <ButtonGroup variant="text" aria-label="text button group" sx={{ marginX: 10 }} >
                            <Button style={{ color: "white" }}>About</Button>
                            <Button style={{ color: "white" }}>Pricing</Button>
                            <Button style={{ color: "white" }}>Learn</Button>
                        </ButtonGroup>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <Container>
                <Box sx={{ my: 2 }}>

                </Box>
            </Container>
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top" style={{ backgroundColor: "#8e44ad" }}>
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}



function Home(props) {
    return (
        <div style={{ width: '70%', height: 400 }}>
            <BackToTop />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '35vh' }}>
                <MiddleBox />
            </div>
        </div>
    );
}

export default Home;



