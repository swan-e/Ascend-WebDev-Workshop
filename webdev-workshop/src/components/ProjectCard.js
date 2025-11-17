import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

export default function ProjectCard({image, title, children, link}) {
    return (
        <Card sx={{ width: 345, borderRadius: '20px' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="project"
            />
            <CardContent>
                <Typography variant="h5" fontWeight={'bold'} sx={{color: 'primary.main'}} >
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                    {children}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton size="small" 
                    color= "primary"
                    sx={{bgcolor: 'background.main'}}
                    component="a" href={link} target="_blank" rel="noopener noreferrer">
                    <LanguageIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
