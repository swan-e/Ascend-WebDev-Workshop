import { AppBar, Box, Button, IconButton, SvgIcon, Toolbar, Typography } from "@mui/material";
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
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar 
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>

                {/* LEFT SECTION */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton
                        component={Link}
                        to="/">
                        <ProfileIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h5" component="div">{name}</Typography>
                </Box>

                {/* MIDDLE SECTION */}
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center",}}>
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
                    
                        
                        
                        
                </Box>

                {/* RIGHT SECTION */}
                <Box>
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