import { AppBar, Box, Button, SvgIcon, Toolbar, Typography } from "@mui/material";
import { ReactComponent as CustomSVG } from '../assets/icons/rocket.svg';

function ProfileIcon(props) {
    return <SvgIcon component={CustomSVG} inheritViewBox {...props} />;
}

export default function NavBar({ name, activeSection, setActiveSection}) {
    const navItems = [
        {id: "resume", label: "Resume"},
        {id: "portfolio", label: "Portfolio"},
        {id: "about", label: "About"},
    ];

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
                    <ProfileIcon fontSize="large" />
                    <Typography variant="h5" component="div">{name}</Typography>
                </Box>

                {/* MIDDLE SECTION */}
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center",}}>
                    {navItems.map((item) => (
                        <Button
                        key={item.id}
                        variant={activeSection === item.id ? "outlined" : "text"}
                        //onClick={() => handleScroll(item.id)}
                        // the sx allows for CSS styling 
                        sx={{
                            borderRadius: "20px",
                            color: "purple",
                            borderColor: "purple",
                            "&:hover": {
                            backgroundColor: "transparent",
                            },
                        }}
                        >
                        {item.label}
                        </Button>
                    ))}
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