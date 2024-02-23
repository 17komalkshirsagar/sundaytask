import { Toys } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return <>
        <Box sx={{ backgroundColor: "black", display: "flex" }}>
            <Box sx={{ padding: '1rem 6rem', }}>
                <Typography sx={{ display: "flex", gap: 130 }}>
                    <img
                        src="https://assets.maccarianagency.com/the-front/logos/logo-negative.svg"
                        alt=""
                        style={{ maxWidth: '6%', height: 'auto', marginTop: 1 }}
                    />
                    <Box sx={{ display: "flex", gap: 2, marginTop: 3 }}>
                        <Typography sx={{ color: "white", marginTop: 1 }}>Home</Typography>
                        <Typography sx={{ color: "white", marginTop: 1 }}>Documentation</Typography>
                        <Stack spacing={2} direction="row" sx={{ padding: '0.1rem 0.1rem' }}>
                            <Button variant="outlined" sx={{ width: '150px', height: '50px', justifyContent: "center", alignItems: "center" }}>
                                Purchase Now
                            </Button>
                        </Stack>
                    </Box>
                    
                </Typography>
                <Box>
                        <Typography sx={{ color: "white" ,textAlign:"center",marginTop:2}}>
                            © theFront. 2021, Maccarian. All rights reserved
                        </Typography>
                        <Typography sx={{ color: "white" ,textAlign:"center",marginTop:1}}>When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</Typography>
                    </Box>
            </Box>
        </Box>
    </>
}

export default Footer