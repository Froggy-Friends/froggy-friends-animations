import { Avatar, IconButton } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Metadata } from '../models/Metadata';

export type FrogType = '2d' | '3d' | 'pixel';

export default function Home() {
  const metadataUrl = `${process.env.REACT_APP_METADATA_URL}`;
  const { frogId } = useParams();
  const [metadata, setMetadata] = useState<Metadata>();
  const [frogType, setFrogType] = useState<FrogType>('3d');

  useEffect(() => {
    if (frogId) {
      getFrog(frogId);
    } else {
      // error handle no frog id
    }
  }, []);

  const getFrog = async (frogId: string) => {
    const response = await axios.get<Metadata>(`${metadataUrl}/${frogId}`);
    setMetadata(response.data);
  }

  const getBorder = (t: FrogType) => {
    return t === frogType ? `2px solid black` : '2px solid white'
  }

  const getBgImage = (frogType: FrogType) => {
    switch (frogType) {
      case '2d':
        return metadata?.image;
    
      case '3d':
        return metadata?.image3d;

      case 'pixel':
        return metadata?.imagePixel;
      
      default:
        return metadata?.image;
    }
  }

  return (
    <>
    <img src={getBgImage(frogType)} alt={metadata?.image} width='100%'/>
    <Stack direction='row' justifyContent='center'>
      <IconButton onClick={() => setFrogType('2d')}>
        <Avatar src={metadata?.image} sx={{border: getBorder('2d'), height: 50, width: 50}}/>
      </IconButton>
      <IconButton onClick={() => setFrogType('3d')}>
        <Avatar src={metadata?.image3d} sx={{border: getBorder('3d'), height: 50, width: 50}}/>
        </IconButton>
      <IconButton onClick={() => setFrogType('pixel')}>
        <Avatar src={metadata?.imagePixel} sx={{border: getBorder('pixel'), height: 50, width: 50}}/>
      </IconButton>
    </Stack>
    </>
  )
}