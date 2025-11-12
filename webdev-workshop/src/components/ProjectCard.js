import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

export default function ProjectCardBar({image, title, children, link}) {
    return (
        <Card sx={{ width: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="project"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {children}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton size="small" component="a" href={link}>
                    <LanguageIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
