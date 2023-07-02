import Carousel from 'react-material-ui-carousel';
import { useParams } from 'react-router-dom';

export default function Home() {
  const baseUrl = `${process.env.REACT_APP_IPFS}`;
  const { cid2d, cid3d, cidPixel } = useParams();
  const frog2dUrl = `${baseUrl}/${cid2d}`;
  const frog3dUrl = `${baseUrl}/${cid3d}`;
  const frogPixelUrl = `${baseUrl}/${cidPixel}`;

  return (
    <Carousel height={window.innerHeight}>
      <img src={frog2dUrl} height={'100%'} width={'100%'}/>
      <img src={frog3dUrl} height={'100%'} width={'100%'}/>
      <img src={frogPixelUrl} height={'100%'} width={'100%'}/>
    </Carousel>
  )
}