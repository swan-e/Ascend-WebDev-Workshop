import '../App.css';
import { Box, Button, Card, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard'

export default function PortfolioPage() {
  return (
    <>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, pt: 3 }}>
            <ProjectCard title="Project1" link="https://github.com/swan-e/Ascend-WebDev-Workshop/tree/main/webdev-workshop">Blah Blah Blah Blah Blah Blah </ProjectCard>
            <ProjectCard title="Project2" link="https://github.com/swan-e/Ascend-WebDev-Workshop/tree/main/webdev-workshop">Second Project Card with description</ProjectCard>
            <ProjectCard title="Project3" link="https://github.com/swan-e/Ascend-WebDev-Workshop/tree/main/webdev-workshop">Third Project Card with description</ProjectCard>
            <ProjectCard title="Project4" link="https://github.com/swan-e/Ascend-WebDev-Workshop/tree/main/webdev-workshop">Fourth Project Card with description</ProjectCard>
            <ProjectCard title="Project5" link="https://github.com/swan-e/Ascend-WebDev-Workshop/tree/main/webdev-workshop">Fifth Project Card with description</ProjectCard>
            <ProjectCard title="Project6" link="https://github.com/swan-e/Ascend-WebDev-Workshop/tree/main/webdev-workshop">Sixth Project Card with description</ProjectCard>
        </Box>
    </>
  );
}