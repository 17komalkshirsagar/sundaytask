import { AppBar, Box, Button, FormControl, IconButton, InputLabel, ListSubheader, MenuItem, Select, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
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

        {/* Second Box */}
        <Box sx={{ padding: '1rem 6rem', backgroundColor: 'black' }}>
            <Typography sx={{ display: 'flex', gap: 130 }}>
                <img
                    src="https://assets.maccarianagency.com/the-front/logos/logo-negative.svg"
                    alt=""
                    style={{ maxWidth: '6%', height: 'auto', marginTop: 1 }}
                />
                <AppBar position="static">
                    <Toolbar>


                        <FormControl sx={{ width: 120, }}>
                            <Select
                                displayEmpty
                                inputProps={{ 'aria-label': 'Select' }}
                                sx={{
                                    height: '40px', 
                                    backgroundColor: 'white', 
                                }}
                            >
                                <MenuItem >
                                    Home
                                </MenuItem>
                                <MenuItem value="option1">Option 1</MenuItem>
                                <MenuItem value="option2">Option 2</MenuItem>
                                <MenuItem value="option3">Option 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Toolbar>
                </AppBar>

            </Typography>
        </Box>
    </>
}

export default Navbar