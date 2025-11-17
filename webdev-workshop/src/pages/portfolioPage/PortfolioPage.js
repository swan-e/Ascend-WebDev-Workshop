import '../../App.css';
import { Box, Button, Card, Typography } from '@mui/material';
import ProjectCard from '../../components/ProjectCard';
import PersonalProjects from './PersonalProjects.json';

export default function PortfolioPage() {
  return (
    <>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, pt: 3 }}>
            {PersonalProjects.map((project, index) => (
                <ProjectCard key={index} 
                    title={project.name} 
                    children={project.description} 
                    link={project.link}/>
                    
            ))}
        </Box>
    </>
  );
}