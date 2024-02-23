import { Box, Button, IconButton, Paper, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import AddHomeIcon from '@mui/icons-material/AddHome';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const Number = () => {
    return <>

        <Box sx={{ backgroundColor: 'black', paddingY: "3rem", marginTop: 3 }}>
            <Box>
                <Typography sx={{ justifyContent: 'center', alignContent: 'center', textAlign: 'center', color: 'yellow', marginTop: 3 }}>
                    NUMBERS
                </Typography>
                <Typography sx={{ marginTop: 3, fontSize: '2.6em', color: 'white', alignContent: 'center', textAlign: 'center' }}>
                    Our global class is open for all
                </Typography>
                <Typography sx={{ marginTop: 2, fontSize: '1.1em', color: 'white', alignContent: 'center', textAlign: 'center' }}>
                    The best way to learn is by using skills.
                </Typography>
                <Typography sx={{ marginTop: 2, fontSize: '1.1em', color: 'white', alignContent: 'center', textAlign: 'center' }}>
                    That's why every class has a project that lets you practice and get feedback.
                </Typography>

                {/* /button */}
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', marginTop: 3, textAlign: 'center' }}>
                    <Button variant="contained" sx={{ color: 'white' }}>
                        Contained
                    </Button>

                    <Button variant="contained" sx={{ color: 'white' }}>
                        Contained
                    </Button>
                </Stack>
            </Box>
            {/* Grid start */}


            <Grid container spacing={3} mt={10} paddingX={3} >
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "2rem", backgroundColor: 'transparent', border: '1px solid #3f51b5', border: '1px solid #3f51b5',  }} >
                        <IconButton style={{ backgroundColor: '#3f51b5', borderRadius: '51%', padding: '15px' }}>
                            <AddHomeIcon style={{ color: 'white' }} />
                        </IconButton>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5' }}>1000+</Typography>
                        <Typography variant="h4" style={{ fontSize: 20, padding: '2px', fontWeight: 'bold', color: "white" }}>Online courses</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', color: "gray" }}>Choose from over 1000+</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginBottom: "30px", color: "gray" }}>online video courses.</Typography>
                    </Paper>
                </Grid>

                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "2rem",   backgroundColor: 'transparent', border: '1px solid #3f51b5', border: '1px solid #3f51b5', 
        borderRadius: '10px', }} >
                        <IconButton style={{ backgroundColor: '#3f51b5', borderRadius: '51%', padding: '15px' }}>
                            <AddHomeIcon style={{ color: 'white' }} />
                        </IconButton>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5' }}>800+</Typography>
                        <Typography variant="h4" style={{ fontSize: 20, padding: '2px', fontWeight: 'bold', color: "white" }}>Online courses</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', color: "gray" }}>Choose from over 1000+</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginBottom: "30px", color: "gray" }}>online video courses.</Typography>
                    </Paper>
                </Grid>

                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "2rem",  backgroundColor: 'transparent', border: '1px solid #3f51b5', border: '1px solid #3f51b5',  }} >
                        <IconButton style={{ backgroundColor: '#3f51b5', borderRadius: '51%', padding: '15px' }}>
                            <SchoolIcon style={{ color: 'white' }} />
                        </IconButton>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5' }}>100k+</Typography>
                        <Typography variant="h4" style={{ fontSize: 20, padding: '2px', fontWeight: 'bold', color: "white" }}>Online courses</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', color: "gray" }}>Choose from over 1000+</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginBottom: "30px", color: "gray" }}>online video courses.</Typography>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "2rem",  backgroundColor: 'transparent', border: '1px solid #3f51b5', border: '1px solid #3f51b5',  }} >
                        <IconButton style={{ backgroundColor: '#3f51b5', borderRadius: '51%', padding: '15px' }}>
                            <ImportContactsIcon style={{ color: 'white' }} />
                        </IconButton>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5' }}>400</Typography>
                        <Typography variant="h4" style={{ fontSize: 20, padding: '2px', fontWeight: 'bold', color: "white" }}>Online courses</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', color: "gray" }}>Choose from over 1000+</Typography>
                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginBottom: "30px", color: "gray" }}>online video courses.</Typography>
                    </Paper>
                </Grid>


            </Grid>



        </Box>




    </>
}

export default Number