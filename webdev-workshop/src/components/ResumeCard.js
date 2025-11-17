import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function ResumeCard({ resumePdf }) {

    return (
        <Card sx={{ overflowY: 'auto'}}>
            {resumePdf ? (
                <>
                    <CardMedia component="img" image={resumePdf} alt="Resume preview" sx={{ width: "100%"}} />
                    <Button
                        variant="contained"
                        color="primary"
                        href={resumePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Download Resume
                    </Button>
                </>
            ) : (
                <CardContent>
                    <Typography variant="h6" align="center">
                        Please Provide resume PDF
                    </Typography>
                </CardContent>
            )}
        </Card>
    );
}