import AboutCard from '../components/AboutCard';
import Bootcamp from '../components/Bootcamp';
import Content from '../components/Content';
import Flare from '../components/Flare';
import HeroImage from '../components/HeroImage';
import Media from '../components/Media';
import TitleImage from '../components/TitleImage';
import { COMPETITIONS } from '../constants';
import Page from '../layout/Page';

export default function Home() {
  return (
    <Page title='X-Project'>
      <HeroImage />
      <Content>
        <Flare type='blue' />
        <AboutCard
          img='/assets/maskot.png'
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
      <Content spacing='100px' disableAnimation>
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
      <Content>
        <TitleImage title='INACCO' img='/assets/inacco.png' />
      </Content>
      <Content pt='100px'>
        <Bootcamp />
      </Content>
      <Content pt='100px'>
        <Media title='Media Partner' />
      </Content>
    </Page>
  );
}
