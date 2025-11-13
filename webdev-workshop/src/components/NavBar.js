import { AppBar, Box, Button, IconButton, Stack, SvgIcon, Toolbar, Typography } from "@mui/material";
import { ReactComponent as CustomSVG } from '../assets/icons/rocket.svg';
import { Link, useLocation } from 'react-router-dom';

function ProfileIcon(props) {
    return <SvgIcon component={CustomSVG} inheritViewBox {...props} />;
}

export default function NavBar({ name, activeSection, setActiveSection}) {
    const navItems = [
        {id: "resume", label: "Resume", path: "/resume"},
        {id: "portfolio", label: "Portfolio", path: "/portfolio"},
        {id: "about", label: "About", path: "/about"},
    ];

    const location = useLocation();

    return (
        <AppBar position="static" color="transparent" elevation={0} >
            <Toolbar 
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: '10px'
                }}>

                {/* LEFT SECTION */}
                <Stack direction="row" spacing={2} sx={{ flex: 1, justifyContent: 'flex-start', alignItems: "center"}}>
                    <IconButton
                        component={Link}
                        to="/">
                        <ProfileIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h4" component="div">{name}</Typography>
                </Stack>

                {/* MIDDLE SECTION */}
                <Stack direction={'row'} sx={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Button
                                key={item.id}
                                component={Link}
                                to={item.path}
                                //variant={location.pathname === item.path ? "outlined" : "text"}
                                //variant={isActive ? "outlined" : "text"}
                                sx={{
                                    borderRadius: "20px",
                                    color: isActive ? "purple" : "grey",
                                    borderColor: isActive ? "purple" : "transparent",
                                    "&:hover": {
                                        backgroundColor: "transparent",
                                        color: "purple",
                                    },
                                }}
                                >
                                {item.label}
                                </Button>
                        )
                    })}
                </Stack>

                {/* RIGHT SECTION */}
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        key="contact"
                        sx={{
                            borderRadius: "20px",
                            color: "white",
                            borderColor: "purple",
                            backgroundColor: "purple",
                        }}
                        >
                        Contact Me
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}