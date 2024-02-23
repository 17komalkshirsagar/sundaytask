import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import EastIcon from '@mui/icons-material/East';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import NorthWestIcon from '@mui/icons-material/NorthWest';

const Catogories = () => {

    return <>

        <Box sx={{ backgroundColor: 'black', paddingY: "3rem", marginTop: 3 }}>
            <Box>
                <Typography sx={{ justifyContent: 'center', alignContent: 'center', textAlign: 'center', color: 'yellow', marginTop: 3,variant:"h3" }}>
                    CATEGORIES
                </Typography>
                <Typography sx={{ marginTop: 3, fontSize: '2.6em', color: 'white', alignContent: 'center', textAlign: 'center' }}>
                    Choose your course by categories
                </Typography>
                <Typography sx={{ marginTop: 2, fontSize: '1.1em', color: 'white', alignContent: 'center', textAlign: 'center' }}>
                    The best way to learn is by using skills.
                </Typography>
                <Typography sx={{ marginTop: 2, fontSize: '1.1em', color: 'white', alignContent: 'center', textAlign: 'center' }}>
                    Browse the available course categories, choose your favourite one and start learning.
                </Typography>

                {/* /button */}

            </Box>
            {/* Grid start */}


            <Grid container spacing={3} mt={10} paddingX={3} >
                {/* 1 */}
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "2rem", backgroundColor: 'transparent', border: '1px solid #3f51b5', border: '1px solid #3f51b5', }} >

                        <IconButton style={{ backgroundColor: 'rgba(144, 238, 144, 0.5)', border: '1px solid #3f51b5', borderRadius: '10%' }}>
                            <ImportantDevicesIcon style={{ color: '#006400', borderRadius: '10px', padding: '10px', marginTop: 3 }} />
                        </IconButton>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5', marginTop: 10 }}>Web design</Typography>
                        <Typography variant="h4" style={{ fontSize: 20, padding: '2px', fontWeight: 'bold', color: "white", marginTop: 10 }}>Choose thousands of Web</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', color: "gray", marginTop: 10 }}>design online course.</Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 3 }}>
                            <Button variant="outlined">
                                Lead More <Typography sx={{ marginLeft: 1, gap: 1 }}><EastIcon /></Typography>
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                {/* 2 */}
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "2rem", backgroundColor: 'transparent', border: '1px solid #3f51b5', border: '1px solid #3f51b5', }} >

                        <IconButton style={{ backgroundColor: 'rgba(255, 182, 193, 0.5)', border: '1px solid #3f51b5', borderRadius: '10%' }}>
                            <ImportContactsIcon style={{ color: '#FF69B3', borderRadius: '10px', padding: '10px', marginTop: 3 }} />
                        </IconButton>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5', marginTop: 10 }}>Business analytics</Typography>
                        <Typography variant="h4" style={{ fontSize: 20, padding: '2px', fontWeight: 'bold', color: "white", marginTop: 10 }}>Choose thousands of Web</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', color: "gray", marginTop: 10 }}>design online course.</Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 3 }}>
                            <Button variant="outlined">
                                Lead More <Typography sx={{ marginLeft: 1, gap: 1 }}><EastIcon /></Typography>
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                {/* 3 */}
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "2rem", backgroundColor: 'transparent', border: '1px solid #3f51b5', border: '1px solid #3f51b5', }} >

                        <IconButton style={{backgroundColor: '#d4f19b', border: '1px solid #3f51b5', borderRadius: '10%', }}>
                            <VideoCameraBackIcon style={{Color: '#3d5afe',backgroundColor: '#d4f19b', borderRadius: '10px', padding: '10px', marginTop: 3 }} />
                        </IconButton>

                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5', marginTop: 10 }}>Video creating</Typography>
                        <Typography variant="h4" style={{ fontSize: 20, padding: '2px', fontWeight: 'bold', color: "white", marginTop: 10 }}>Choose thousands of Web</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', color: "gray", marginTop: 10 }}>design online course.</Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 3 }}>
                            <Button variant="outlined">
                                Lead More <Typography sx={{ marginLeft: 1, gap: 1 }}><EastIcon /></Typography>
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                {/* 4 */}
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "2rem", backgroundColor: 'transparent ', border: '1px solid #3f51b5', border: '1px solid #3f51b5', }} >

                        <IconButton style={{ backgroundColor: '#9771d5', border: '1px solid #3f51b5', borderRadius: '10%', }}>
                            <CameraAltIcon style={{ color: 'blue', backgroundColor: '#9771d5', borderRadius: '10px', padding: '10px', marginTop: 3 }} />
                        </IconButton>

                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5', marginTop: 10 }}>Photography</Typography>
                        <Typography variant="h4" style={{ fontSize: 20, padding: '2px', fontWeight: 'bold', color: "white", marginTop: 10 }}>Choose thousands of Web</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', color: "gray", marginTop: 10 }}>design online course.</Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 3 }}>
                            <Button variant="outlined">
                                Lead More <Typography sx={{ marginLeft: 1, gap: 1 }}><EastIcon /></Typography>
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                {/* 5 */}
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "2rem", backgroundColor: 'transparent ', border: '1px solid #3f51b5', border: '1px solid #3f51b5', }} >

                        <IconButton style={{ backgroundColor: '#f9fbe6', border: '1px solid #3f51b5', borderRadius: '10%', }}>
                            <FavoriteBorderIcon style={{ color: 'white', color: '#f44336', borderRadius: '10px', padding: '10px', marginTop: 3 }} />
                        </IconButton>

                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5', marginTop: 10 }}>Health & fitness</Typography>
                        <Typography variant="h4" style={{ fontSize: 20, padding: '2px', fontWeight: 'bold', color: "white", marginTop: 10 }}>Choose thousands of Web</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', color: "gray", marginTop: 10 }}>design online course.</Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 3 }}>
                            <Button variant="outlined">
                                Lead More <Typography sx={{ marginLeft: 1, gap: 1 }}><EastIcon /></Typography>
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                {/* 6 */}
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "2rem", backgroundColor: 'transparent', border: '1px solid #3f51b5', border: '1px solid #3f51b5', }} >

                        <IconButton style={{ backgroundColor: '#4dbb46', border: '1px solid #3f51b5', borderRadius: '10%', }}>
                            <ShutterSpeedIcon style={{ color: '#007d00', backgroundColor: '4dbb4', borderRadius: '10px', padding: '10px', marginTop: 3 }} />
                        </IconButton>

                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5', marginTop: 10 }}>Marketing</Typography>
                        <Typography variant="h4" style={{ fontSize: 20, padding: '2px', fontWeight: 'bold', color: "white", marginTop: 10 }}>Choose thousands of Web</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', color: "gray", marginTop: 10 }}>design online course.</Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 3 }}>
                            <Button variant="outlined">
                                Lead More <Typography sx={{ marginLeft: 1, gap: 1 }}><EastIcon /></Typography>
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                {/* 7 */}
               
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "2rem", backgroundColor: 'transparent', border: '1px solid #3f51b5', border: '1px solid #3f51b5', }} >

                        <IconButton style={{ backgroundColor: '#edb68f', border: '1px solid #3f51b5', borderRadius: '10%', }}>
                            <PriceChangeIcon style={{ color: '#a05810', backgroundColor: '#edb68f', borderRadius: '10px', padding: '10px', marginTop: 3 }} />
                        </IconButton>

                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5', marginTop: 10 }}>Web design</Typography>
                        <Typography variant="h4" style={{ fontSize: 20, padding: '2px', fontWeight: 'bold', color: "white", marginTop: 10 }}>Choose thousands of Web</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', color: "gray", marginTop: 10 }}>design online course.</Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 3 }}>
                            <Button variant="outlined">
                                Lead More <Typography sx={{ marginLeft: 1, gap: 1 }}><EastIcon /></Typography>
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "2rem", backgroundColor: 'transparent', border: '1px solid #3f51b5', border: '1px solid #3f51b5', }} >

                        <IconButton style={{ backgroundColor: '#6f84cb', border: '1px solid #3f51b5', borderRadius: '10%', }}>
                            <NorthWestIcon style={{ color: '#002280', backgroundColor: '#6f84cb', borderRadius: '10px', padding: '10px', marginTop: 3 }} />
                        </IconButton>

                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5', marginTop: 10 }}>Graphic design</Typography>
                        <Typography variant="h4" style={{ fontSize: 20, padding: '2px', fontWeight: 'bold', color: "white", marginTop: 10 }}>Choose thousands of Web</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', color: "gray", marginTop: 10 }}>design online course.</Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 3 }}>
                            <Button variant="outlined">
                                Lead More <Typography sx={{ marginLeft: 1, gap: 1 }}><EastIcon /></Typography>
                            </Button>
                        </Box>
                    </Paper>
                </Grid>


            </Grid>



        </Box>


    </>
}

export default Catogories
