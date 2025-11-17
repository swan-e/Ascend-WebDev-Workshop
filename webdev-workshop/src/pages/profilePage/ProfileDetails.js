import { Box, Stack, Typography } from "@mui/material"

export default function ProfileDetails() {
    return (
        <Stack spacing={6}>
          <Box>
              <Typography sx={{fontSize: 100, lineHeight: 1, color: 'primary.main'}}>Aspiring</Typography>
              <Typography sx={{fontSize: 100, lineHeight: 1, color: 'tertiary.main'}}>--Enter position--</Typography>
          </Box>
          <Box>
              <Typography sx={{fontSize: 50, lineHeight: 1, fontWeight: 'bold',color: 'primary.main'}} >Education</Typography>
              <Typography sx={{fontSize: 50, lineHeight: 1, color: 'primary.main'}}>Virginia Tech, Class of --Enter Graduation Year--</Typography>
          </Box>
          <Box maxWidth={'83%'}>
              <Typography sx={{fontSize: 50, lineHeight: 1, color: 'primary.main'}}>What's my story?</Typography>
              <Typography sx={{fontSize: 40, lineHeight: 1, color: 'secondary.main'}}>--Enter in your story--</Typography>
          </Box>
        </Stack>
    )
}