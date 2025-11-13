import { Box, Stack, Typography } from "@mui/material"

export default function ProfileDetails() {
    return (
        <Stack spacing={6}>
          <Box>
              <Typography sx={{fontSize: 100, lineHeight: 1}}>Aspiring</Typography>
              <Typography sx={{fontSize: 100, lineHeight: 1}}>Software Engineer</Typography>
          </Box>
          <Box>
              <Typography sx={{fontSize: 50, lineHeight: 1}} >Education</Typography>
              <Typography sx={{fontSize: 50, lineHeight: 1}}>Virginia Tech, Class of 2026</Typography>
          </Box>
          <Box maxWidth={'83%'}>
              <Typography sx={{fontSize: 50, lineHeight: 1}}>What's my story?</Typography>
              <Typography sx={{fontSize: 40, lineHeight: 1}}>I started out in 2019 with Game Development, where I found a passion in creating products from the ground up teaching myself skills along the way. This passion has transferred over to Software Development where I’m excited to continuously learn new skills</Typography>
          </Box>
        </Stack>
    )
}