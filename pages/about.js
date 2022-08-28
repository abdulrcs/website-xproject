import { Box } from '@chakra-ui/react';
import AboutCard from '../components/AboutCard';
import Content from '../components/Content';
import Flare from '../components/Flare';
import Media from '../components/Media';
import Page from '../layout/Page';
import ABOUT_IMAGES from '../constants/aboutImages';

export default function About() {
  return (
    <Page title='About X-Project'>
      <Content>
        <Flare type='greenTopLeft' zIndex={0} />
        <Flare type='blue' zIndex={1} top={20} />
        <Box pt='100px'>
          <AboutCard
            img='/assets/maskot.png'
            title='About X-Project'
            desc='
              X-Project merupakan sebuah event tahunan yang
              diselenggarakan oleh HIMTI UNESA yang bertujuan untuk
              mengembangkan dan memberi wadah bagi masyarakat luas  di tengah
              era revolusi 5.0 dimana terdapat beberapa acara diantaranya
              bootcamp dan lomba-lomba seperti UI/UX Competition, Hackathon,
              LKTI dan E-sport.
            '
          />
        </Box>
      </Content>
      <Content pt='100px'>
        <Flare type='green' zIndex={1} top={0} />
        <Media title='Media Gallery' images={ABOUT_IMAGES} />
      </Content>
    </Page>
  );
}
