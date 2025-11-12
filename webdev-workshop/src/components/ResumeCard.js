import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import resumePreview from '../assets/resume.jpg';

export default function ResumeCard() {
    return (
        <Card sx={{ overflowY: 'auto'}}>
            <CardMedia component="img" image={resumePreview} alt="Resume preview" sx={{ width: "100%"}} />
            <Button
                variant="contained"
                color="primary"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >
                Download Resume
            </Button>
        </Card>
    );
}