import { Avatar, AvatarGroup, Box, Button, FormControl, IconButton, InputAdornment, InputLabel, Paper, Stack, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import AddHomeIcon from '@mui/icons-material/AddHome';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import EastIcon from '@mui/icons-material/East';
import MessageIcon from '@mui/icons-material/Message';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const Star = () => {
    return <>

        <Box sx={{ backgroundColor: 'black', paddingY: "3rem", marginTop: 3 }}>
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>

                    <Box sx={{ color: 'yellow', }}>
                        <StarIcon />
                    </Box>
                    <Box sx={{ color: 'yellow', }}>
                        <StarIcon />
                    </Box>
                    <Box sx={{ color: 'yellow', }}>
                        <StarIcon />
                    </Box>
                    <Box sx={{ color: 'yellow', }}>
                        <StarIcon />
                    </Box>
                    <Box sx={{ color: 'yellow', }}>
                        <StarIcon />
                    </Box>
                    <Typography ml={1}>5.0</Typography>
                </Box>


                <Typography sx={{ marginTop: 3, fontSize: '2.6em', color: 'white', alignContent: 'center', textAlign: 'center' }}>
                    Rated 5 out of 5 stars by our customers!
                </Typography>
                <Typography sx={{ marginTop: 2, fontSize: '1.1em', color: 'white', alignContent: 'center', textAlign: 'center' }}>
                    Companies from across the globe have had fantastic experiences using theFront.
                </Typography>
                <Typography sx={{ marginTop: 2, fontSize: '1.1em', color: 'white', alignContent: 'center', textAlign: 'center' }}>
                    That's why every class has a project that lets you practice and get feedback.
                </Typography>
                <Typography sx={{ marginTop: 2, fontSize: '1.1em', color: 'white', alignContent: 'center', textAlign: 'center' }}>
                    Here’s what they have to say.
                </Typography>

                {/* /button */}

                <Stack direction="row" spacing={3} sx={{ justifyContent: 'center', marginTop: 3, textAlign: 'center' }}>
                    <Button variant="contained" sx={{ color: 'white', gap: 1 }}>
                        view all
                        <Box sx={{ gap: 3, justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 1.2 }}>  < ArrowForwardIcon /></Box>
                    </Button>



                </Stack>
            </Box>
            {/* Grid start */}


            <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, marginBottom: 10 }} container spacing={3} mt={10} paddingX={3} >
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "1rem", backgroundColor: 'transparent', border: '1px solid #3f51b5', textAlign: 'center' }}>
                        <IconButton style={{ backgroundColor: '#bbc6e8', border: '1px solid #3f51b5', borderRadius: '10%', }}>
                            <MessageIcon style={{ color: '#001e7e', backgroundColor: '#bbc6e8', borderRadius: '10px', padding: '10px', marginTop: 3 }} />
                        </IconButton>

                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5', marginTop: 10 }}>
                            Lorer fugiat? Eos cum tempora quam excepturi, molestias exerci quisquam recusandae quas!
                        </Typography>



                        <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Avatar sx={{ marginRight: 3, marginTop: "5px" }} alt="Cindy Baker" src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <Box sx={{ textAlign: "start" }}>
                                <Typography sx={{ color: '#3f51b5', marginTop: 1 }}>Clara Bertoletti</Typography>
                                <Typography sx={{ color: '#3f51b5' }}>MUI Lover</Typography>
                            </Box>
                        </Box>
                    </Paper>

                </Grid>


                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "1rem", backgroundColor: 'transparent', border: '1px solid #3f51b5', textAlign: 'center' }}>
                        <IconButton style={{ backgroundColor: '#bbc6e8', border: '1px solid #3f51b5', borderRadius: '10%', }}>
                            <MessageIcon style={{ color: '#001e7e', backgroundColor: '#bbc6e8', borderRadius: '10px', padding: '10px', marginTop: 3 }} />
                        </IconButton>

                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5', marginTop: 10 }}>
                            Lorer fugiat? Eos cum tempora quam excepturi, molestias exerci quisquam recusandae quas!
                        </Typography>



                        <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Avatar sx={{ marginRight: 3, marginTop: "5px" }} alt="Cindy Baker" src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <Box sx={{ textAlign: "start" }}>
                                <Typography sx={{ color: '#3f51b5', marginTop: 1 }}>Clara Bertoletti</Typography>
                                <Typography sx={{ color: '#3f51b5' }}>MUI Lover</Typography>
                            </Box>
                        </Box>
                    </Paper>

                </Grid>

                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ padding: "1rem", backgroundColor: 'transparent', border: '1px solid #3f51b5', textAlign: 'center' }}>
                        <IconButton style={{ backgroundColor: '#bbc6e8', border: '1px solid #3f51b5', borderRadius: '10%', }}>
                            <MessageIcon style={{ color: '#001e7e', backgroundColor: '#bbc6e8', borderRadius: '10px', padding: '10px', marginTop: 3 }} />
                        </IconButton>

                        <Typography variant="h5" style={{ fontSize: 20, padding: '2px', marginTop: '9px', color: '#3f51b5', marginTop: 10 }}>
                            Lorer fugiat? Eos cum tempora quam excepturi, molestias exerci quisquam recusandae quas!
                        </Typography>



                        <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Avatar sx={{ marginRight: 3, marginTop: "5px" }} alt="Cindy Baker" src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <Box sx={{ textAlign: "start" }}>
                                <Typography sx={{ color: '#3f51b5', marginTop: 1 }}>Clara Bertoletti</Typography>
                                <Typography sx={{ color: '#3f51b5' }}>MUI Lover</Typography>
                            </Box>
                        </Box>
                    </Paper>

                </Grid>



            </Grid>


        </Box>



        <Box sx={{ position: 'relative', backgroundColor: 'blue', padding: 2 }}>
            <Box
                sx={{
                    height: '30vh',
                    width: '60vw',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'gray',
                    padding: 2,
                    marginTop: -10,
                    marginLeft: "20%"
                }}
            >




                <Typography variant="h4" sx={{ fontWeight: "bold", color: "white", marginTop: 5 }}>Subscribe to our newsletter</Typography>
                <Typography variant="h6" sx={{ marginTop: 2, }}>
                    Don't lose a chance to be among the first to know about our upcoming news and updates.
                </Typography>
                {/* line-height: "1.5rem" */}
                <Box sx={{ display: "flex", marginTop: 5 }} >
                    <FormControl fullWidth variant="standard" sx={{ marginLeft: 2, marginRight: 2 }}>
                        <TextField
                            variant="outlined"

                            InputProps={{

                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <SearchRoundedIcon />
                                    </InputAdornment>
                                ),
                                sx: { border: "10%", height: 45, width: 400, display: "felx" }
                            }} />
                    </FormControl>


                    <Box sx={{ height: 150, width: 150, }}>
                        <Stack direction="row" spacing={1}  >
                            <Button variant="outlined" sx={{ height: "3rem", width: "8rem", gap: 1, backgroundColor: "primary", color: "darkwhite", fontWeight: "bold" }}>Subscribe <Box sx={{ gap: 1 }}><NotificationsActiveIcon /></Box></Button>

                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
}

export default Star