
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Avatar, AvatarGroup, Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import EastIcon from '@mui/icons-material/East';
const Popular = () => {
    return <>
        <Box sx={{ backgroundColor: 'black', paddingY: "3rem", marginTop: 3 }}>
            <Box>
                <Typography sx={{ justifyContent: 'center', alignContent: 'center', textAlign: 'center', color: 'yellow', marginTop: 3 }}>
                    POPULAR COURSES
                </Typography>
                <Typography sx={{ marginTop: 3, fontSize: '2.6em', color: 'white', alignContent: 'center', textAlign: 'center' }}>
                    Browse our popular courses
                </Typography>
                <Typography sx={{ marginTop: 2, fontSize: '1.1em', color: 'white', alignContent: 'center', textAlign: 'center' }}>
                    Here are our popular course you might want to learn from your tutor.
                </Typography>


                {/* /button */}
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', marginTop: 3, textAlign: 'center' }}>
                    <Button variant="contained" sx={{ color: 'white' }}>
                        view all
                        <Box sx={{ gap: 6, justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 1.2 }}>  < ArrowForwardIcon /></Box>
                    </Button>

                    <Button variant="contained" sx={{ backgroundColor: 'transparent', color: 'dark', marginTop: 1.2 }}>
                        Explore More
                    </Button>

                </Stack>

                {/* causol images */}
                <Box sx={{ textAlign: 'center', margin: 'auto', marginTop: '50vh', transform: 'translateY(-50%)' }}>
                    <Card sx={{ maxWidth: 400, padding: 1, backgroundColor: "gray", position: "relative" }}>
                        {/*  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%); */}
                        <CardMedia
                            sx={{ border: '3px solid gray', height: 320, clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
                            image="https://images.unsplash.com/photo-1603503364272-6e28e046b37a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmludG5lc3N8ZW58MHx8MHx8fDA%3D"
                            title="green iguana"
                        />
                        <hr />

                        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', marginTop: 3, textAlign: 'center', position: "absolute", top: "43%", justifyContent: "space-evenly", gap: 24, paddingRight: 4 }}>
                            <Typography sx={{ borderRadius: "10%", backgroundColor: 'black', display: 'inline-block', variant: "body1", color: 'white', padding: 1 }}>$49/Month</Typography>
                            <Button variant="contained" sx={{ color: 'white', gap: 1 }}>
                                <Box sx={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 1.2 }}>  < FavoriteBorderIcon /></Box>
                                Save
                            </Button>



                        </Stack>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Graphic Design of Begginer
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', gap: 2 }}>
                                <SchoolIcon /> <Typography >John Simth</Typography>
                            </Typography>
                        </CardContent>


                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <AvatarGroup max={4}>
                                <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1701318227062-b7b76c82ca45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" />
                                <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1651951438758-5e41c8f79696?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1594672830234-ba4cfe1202dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" />
                                <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1696416748833-0407ebea6047?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" />
                            </AvatarGroup>

                            <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                <Box sx={{ color: 'yellow', p: 1, borderRadius: 1, padding: 1 }}>
                                    <StarIcon />
                                </Box>
                                <Typography ml={1}>5.0</Typography>
                            </Box>
                        </Box>


                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: 3 }}>
                            <Button variant="outlined">
                                Lead More <Typography sx={{ marginLeft: 1, gap: 1 }}><EastIcon /></Typography>
                            </Button>
                        </Box>
                    </Card>

                </Box>





            </Box>
        </Box>

    </>
}

export default Popular