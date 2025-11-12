import '../App.css';
import { Box, Button, Card, Typography } from '@mui/material';
import ResumeCard from "../components/ResumeCard"

export default function ResumePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <ResumeCard />
    </Box>
  );
}