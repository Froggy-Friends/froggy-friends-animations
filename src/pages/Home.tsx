import { Avatar, IconButton, useTheme  } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Home() {
  const theme = useTheme();
  const baseUrl = `${process.env.REACT_APP_BASE_URL}`;
  const { cid2d, cid3d, cidPixel } = useParams();
  const frog2dUrl = `${baseUrl}/${cid2d}`;
  const frog3dUrl = `${baseUrl}/${cid3d}`;
  const frogPixelUrl = `${baseUrl}/${cidPixel}`;
  const [type, setType] = useState<string>(frog2dUrl);

  const getBorder = (url: string) => {
    return url === type ? `3px solid ${theme.palette.primary.main}` : 'none'
  }

  return (
    <Stack height='100%' width='100%' 
      sx={{
        backgroundImage: `url(${type})`, 
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center'
      }}>
      <Stack direction='row' justifyContent='center'>
        <IconButton size='large' onClick={() => setType(frog2dUrl)}>
          <Avatar src={frog2dUrl} sx={{border: getBorder(frog2dUrl), height: 50, width: 50}}/>
        </IconButton>
        <IconButton onClick={() => setType(frog3dUrl)}>
          <Avatar src={frog3dUrl} sx={{border: getBorder(frog3dUrl), height: 50, width: 50}}/>
          </IconButton>
        <IconButton onClick={() => setType(frogPixelUrl)}>
          <Avatar src={frogPixelUrl} sx={{border: getBorder(frogPixelUrl), height: 50, width: 50}}/>
        </IconButton>
      </Stack>
    </Stack>
  )
}