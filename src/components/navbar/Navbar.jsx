import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import MovingIcon from '@mui/icons-material/Moving';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {

    return (
        <Box sx={{ display: 'flex', backgroundColor: "red", }}>
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, color: "black", background: "white" }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        <span style={{ fontWeight: "700", fontSize: "24px", fontStyle: "normal" }}>Reports</span>
                    </Typography>
                    <Box sx={{ display: 'flex', }}>
                        <Typography variant="h6" noWrap component="div">

                            <span style={{ fontWeight: "400", marginLeft: "4vw", fontSize: "16px", fontStyle: "normal", color: "#1B59F8" }}>Overview</span>

                        </Typography>
                        <Typography variant="h6" noWrap component="div">
                            <span style={{ fontWeight: "400", marginLeft: "2vw", fontSize: "16px", fontStyle: "normal" }}>Product</span>

                        </Typography>
                        <Typography variant="h6" noWrap component="div">
                            <span style={{ fontWeight: "400", marginLeft: "2vw", fontSize: "16px", fontStyle: "normal" }}>Sales</span>

                        </Typography>
                        <Typography variant="h6" noWrap component="div">
                            <span style={{ fontWeight: "400", marginLeft: "2vw", fontSize: "16px", fontStyle: "normal" }}>Marketing</span>

                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>


            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        borderColor: "white"
                    },
                    borderColor: "white"
                }}
                variant="permanent"
                anchor="left"
            >
                <List>

                    <ListItem disablePadding style={{ marginLeft: "15%" }}>
                        <ListItemButton>
                            <img style={{ marginRight: "2vh" }} src="https://www.mingcute.com/static/images/logo.svg" />
                            <ListItemText primary={"MingCute"} />
                        </ListItemButton>
                    </ListItem>
                </List>


                <List>
                    {['Reports', 'Workspaces', 'Settings'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index == 0 && <MovingIcon color="primary" /> || index == 1 && <ViewModuleIcon htmlColor="black" /> || index == 2 && <SettingsIcon htmlColor="black" />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </Box>
    );
}