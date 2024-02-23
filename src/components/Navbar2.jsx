import { Box, Button, FormControl, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';

const Navbar2 = () => {
    return <>

        <Box >

            <Grid container sx={{ height: "600px" }}>
                {/* First column */}
                <Grid item xs={12} md={6} sx={{ height: "100%" }}>
                    <Paper elevation={3} sx={{ height: "100%" }} >
                        <Box sx={{ backgroundColor: 'gray', textAlign: 'center', height: "100%" }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'blue', borderBottom: '3px solid black', display: 'inline-block', marginRight: 50 }}>
                                Learn new skills
                            </Typography>
                            <br />
                            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'white', display: 'inline-block', marginTop: 1, marginRight: 25 }}>
                                Gain more experience
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'white', display: 'block', marginTop: 2, marginRight: 3 }}>
                                Our mission is to spread education that is easily accessible, and everyone can learn.
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'white', display: 'block', marginTop: 2, marginRight: 38 }}>
                                Join over 5000 subscribers for our newsletter

                            </Typography>



                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
                                <TextField
                                    label="Enter your Email"
                                    placeholder="Enter your Email"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ height: '51px', width: '500px' }}
                                />
                                <Button variant="contained" style={{ marginLeft: 18, height: '52px', width: '130px' }}>
                                    Subscribe
                                </Button>
                                <br></br>
                            </Box>

                            <Typography sx={{ marginTop: 2, marginRight: 40 }}>TRUSTED BY INDUSTRY LEADING COMPANIES</Typography>

                            <Box sx={{ marginTop: 2, marginRight: "200px" }}>
                                <img
                                    src="https://assets.maccarianagency.com/svg/logos/airbnb-original.svg"
                                    alt=""
                                    style={{ width: '100px', height: '50px', marginRight: "20px" }}
                                />
                                <img src="https://assets.maccarianagency.com/svg/logos/amazon-original.svg" alt="" style={{ width: '100px', height: '50px', marginRight: "20px", marginTop: 3 }} />
                                <img src="https://assets.maccarianagency.com/svg/logos/fitbit-original.svg" alt="" style={{ width: '100px', height: '50px', marginRight: "20px" }} />
                                <img src="https://assets.maccarianagency.com/svg/logos/netflix-original.svg" alt="" style={{ width: '100px', height: '50px', marginRight: "20px" }} />
                                <br />
                                <Box sx={{ display: "flex", marginLeft: "60px", gap: 3 }}>
                                    <img src="https://assets.maccarianagency.com/svg/logos/google-original.svg" alt="" style={{ width: '100px', height: '50px', }} />
                                    <img src="https://assets.maccarianagency.com/svg/logos/paypal-original.svg" alt="" style={{ width: '100px', height: '50px', }} />

                                </Box>
                            </Box>
                        </Box>

                    </Paper>
                </Grid>

                {/* Second column */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ backgroundColor: "gray", height: "600px" }}>
                        <img
                            src="https://assets.maccarianagency.com/backgrounds/img2.jpg"
                            alt=""
                            style={{
                                width: '100%',
                                height: '100%',
                                clipPath: 'polygon(10% 0%, 100% 0%, 99% 100%, 0% 100%)',
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>

        </Box >
        {/* mla kahich nhi kraych ata man maz */}


    </>
}
export default Navbar2