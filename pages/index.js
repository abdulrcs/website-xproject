import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import AboutCard from '../components/AboutCard';
import Bootcamp from '../components/Bootcamp';
import Content from '../components/Content';
import Flare from '../components/Flare';
import HeroImage from '../components/HeroImage';
import Media from '../components/Media';
import { COMPETITIONS } from '../constants';
import HOME_IMAGES from '../constants/homeImages';
import MEDIA_PARTNERS from '../constants/mediaPartners';
import Page from '../layout/Page';

export default function Home() {
  const ImageSlider = dynamic(() => import('../components/ImageSlider'), {
    ssr: false,
  });

  return (
    <Page title='X-Project'>
      <HeroImage />
      <Content>
        <Flare type='blue' />
        <Box pt="150px"/>
        <AboutCard
          img='/assets/logoFull.png'
          title='About X-Project'
          desc='
            X-Project merupakan sebuah kompetisi tingkat nasional di bidang
            Teknologi Informasi. Event ini bertujuan untuk mengeksplorasi dan
            mengedukasi publik mengenai berbagai macam elemen di bidang teknologi
            informasi.
          '
          link='/about'
        />
      </Content>
      <Content pt='150px'>
        <ImageSlider
          title='Informatic Championship'
          subtitle='National Informatic Technology Championship'
          slides={HOME_IMAGES}
        />
      </Content>
      <Content pt='100px' spacing='100px' disableAnimation>
        <Flare type='green' />
        <Flare type='blue' />
        {COMPETITIONS.map((item) => (
          <AboutCard
            key={item.title}
            img={item.img}
            title={item.title}
            desc={item.desc}
            link={item.link}
            pb='100px'
          />
        ))}
      </Content>
      <Content pt='100px'>
        <Bootcamp />
      </Content>
      <Content pt='100px'>
        <Media title='Media Partner' images={MEDIA_PARTNERS} />
      </Content>
    </Page>
  );
}
