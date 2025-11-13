import '../../App.css';
import { Box, Stack } from '@mui/material';
import placeholderImg from '../../assets/placeholder.jpg';
import ProfileDetails from './ProfileDetails';

export default function ProfilePage() {
  return (

    <Stack marginTop={'10rem'} height={'100vh'} width={'100%'} direction={'row'} alignItems={'flex-start'} justifyContent={'center'}>
        {/* Left Side */}
        <Box maxWidth={'50%'}>
          <ProfileDetails/>
        </Box>
        

        {/* Right Side */}
        <Box width={'40%'}>
          <Box
            component="img"
            src={placeholderImg}
            alt="Placeholder"
            sx={{
              borderRadius: '44px',
              width: '100%',        // scaled a little smaller
              height: 'auto',      // maintain aspect ratio
              // maxWidth: '00px',   // optional, max size
            }}
          />
        </Box>
      </Stack>
  );
}