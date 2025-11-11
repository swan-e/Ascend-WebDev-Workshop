import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

export default function ProjectCardBar(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={props.image}
                title="project"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {props.text}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton size="small" component="a" href={props.link}>
                    <LanguageIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
