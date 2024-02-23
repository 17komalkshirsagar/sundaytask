import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
const Navbarfinal = () => {
    return <>
        <Box sx={{ backgroundColor: 'black', display: 'flex', justifyContent: 'flex-end' }}>
            {/* First Box */}
            <Typography sx={{ color: 'white', marginTop: 4, marginRight: 18, padding: '15px', fontSize: '20px' }}>
                Demos
                <Button variant="outlined" sx={{ fontSize: '10px', height: '22px', width: '5px', borderRadius: 1, backgroundColor: 'blue', color: 'white' }}>
                    New
                </Button>
                new Components Docs
                <IconButton sx={{ backgroundColor: 'transparent', borderRadius: '12%', border: '1px solid yellow' }}>
                    <LightModeIcon sx={{ color: 'white' }} />
                </IconButton>
            </Typography>
        </Box>
        <Box sx={{ padding: '1rem 6rem', backgroundColor: 'black' }}>
            <Typography sx={{ display: 'flex', gap: 130 }}>
                <img
                    src="https://assets.maccarianagency.com/the-front/logos/logo-negative.svg"
                    alt=""
                    style={{ maxWidth: '8%', height: 'auto', marginTop: 1 }}
                />  </Typography>
        </Box>

        <Menu
            id="basic-menu"
            // anchorEl={e => setShow(true)}
            open={show}
            onClose={e => setShow(false)}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={e => setShow(false)}>
                <IconButton >
                    <EmojiEmotionsIcon />
                </IconButton>
            </MenuItem>
            <MenuItem onClick={e => setShow(false)}>My account</MenuItem>
            <MenuItem onClick={e => setShow(false)}>Add another account</MenuItem>
            <MenuItem onClick={e => setShow(false)}>Setting</MenuItem>
            <MenuItem onClick={e => setShow(false)}>Logout</MenuItem>
        </Menu>
    </>
}

export default Navbarfinal