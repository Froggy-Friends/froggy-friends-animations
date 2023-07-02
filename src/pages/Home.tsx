import { Avatar, IconButton } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export type FrogType = '2d' | '3d' | 'pixel';

export default function Home() {
  const baseUrl = 'https://froggyfriends.mypinata.cloud/ipfs';
  const { cid2d, cid3d, cidPixel } = useParams();
  const frog2dUrl = `${baseUrl}/${cid2d}`;
  const frog3dUrl = `${baseUrl}/${cid3d}`;
  const frogPixelUrl = `${baseUrl}/${cidPixel}`;
  const [type, setType] = useState<string>(frog2dUrl);


  return (
    <Stack>
      <Stack direction='row' justifyContent='center'>
        <IconButton onClick={() => setType(frog2dUrl)}><Avatar src={frog2dUrl}/></IconButton>
        <IconButton onClick={() => setType(frog3dUrl)}><Avatar src={frog3dUrl}/></IconButton>
        <IconButton onClick={() => setType(frogPixelUrl)}><Avatar src={frogPixelUrl}/></IconButton>
      </Stack>
      <img src={type}/>
    </Stack>
  )
}