import '../App.css';
import { Box, Typography } from '@mui/material';
import placeholderImg from '../assets/placeholder.jpg';

export default function ProfilePage() {
  return (
    <Box
        display="flex"
        height="100vh"
      >
        {/* Left Side */}
        <Box
          flex={1}
          paddingLeft={8}
          paddingTop={3}
          sx = {{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h1" sx={{mb: 2}}>Aspiring Software Engineer</Typography>
          <Typography variant="h2" >Education</Typography>
          <Typography variant="h3" sx={{mb: 2}}>Virginia Tech, Class of 2026</Typography>
          <Typography variant="h2">What's my story?</Typography>
          <Typography variant="p">I started out in 2019 with Game Development, where I found a passion in creating products from the ground up teaching myself skills along the way. This passion has transferred over to Software Development where I’m excited to continuously learn new skills</Typography>
        </Box>

        {/* Right Side */}
        <Box
          flex={1}
          paddingRight={2}
          paddingTop={3}
          sx = {{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={placeholderImg}
            alt="Placeholder"
            sx={{
              borderRadius: '10px',
              width: '90%',        // scaled a little smaller
              height: 'auto',      // maintain aspect ratio
              maxWidth: '400px',   // optional, max size
            }}
          />
        </Box>
      </Box>
  );
}