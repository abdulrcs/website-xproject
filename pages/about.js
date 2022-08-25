import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import AboutCard from '../components/AboutCard';
import Content from '../components/Content';
import Flare from '../components/Flare';
import Footer from '../components/Footer';
import Media from '../components/Media';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div>
      <Head>
        <title>About X-Project</title>
        <meta
          name='description'
          content='
            X-Project merupakan sebuah kompetisi tingkat nasional di bidang
            Teknologi Informasi. Event ini bertujuan untuk mengeksplorasi dan
            mengedukasi publik mengenai berbagai macam elemen di bidang teknologi
            informasi.
        '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Navbar />
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
          <Media title='Media Gallery' />
        </Content>
        <Content pt='100px'>
          <Footer />
        </Content>
      </main>
    </div>
  );
}
