import Head from 'next/head';
import AboutCard from '../components/AboutCard';
import HeroImage from '../components/HeroImage';
import Content from '../components/Content';
import Navbar from '../components/Navbar';
import Flare from '../components/Flare';
import INNACO from '../components/INNACO';
import Bootcamp from '../components/Bootcamp';
import Media from '../components/Media';
import Footer from '../components/Footer';

export default function Home() {
  let competitions = [
    {
      title: 'UI/UX Competition',
      desc:
        'Kompetisi Desain UI/UX merupakan sebuah kompetisi desain antarmuka dari suatu sistem/produk yang berorientasi pada kenyamanan dan kemudahan pengguna dalam menggunakan sistem/produk tersebut. Tujuannya adalah untuk membuat interaksi pengguna sesederhana dan seefisien mungkin serta memberikan pengalaman yang menyeluruh bagi pengguna ketika sedang menggunakan suatu sistem/produk.',
      img: '/assets/comp_uiux.png',
      link: '/competition/uiux',
    },
    {
      title: 'LKTIN',
      desc:
        'LKTIN (Lomba Karya Tulis Ilmiah Nasional) merupakan sebuah kompetisi yang ditujukan kepada siswa dan siswi SMA/SMK atau sederajat untuk meningkatkan kreativitas dan inovasi dengan cara berkompetisi menuangkan ide atau gagasan mengenai tema tertentu yang berbasis ilmiah. Karya tersebut akan dituangkan dalam suatu tulisan yang diperkuat dengan studi literatur atau pun penelitian.',
      img: '/assets/comp_lktin.png',
      link: '/competition/lktin',
    },
    {
      title: 'IDP',
      desc:
        'International Digital Poster (IDP) merupakan kompetisi di bidang desain grafis tingkat internasional, kompetisi ini untuk meningkatkan kreativitas dan juga inovasi dalam desain grafis. Desain pada poster ini mengarah ke bidang teknologi informasi yang mengarah ke masa depan',
      img: '/assets/comp_idp.png',
      link: '/competition/idp',
    },
  ];
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
        <Content spacing='100px'>
          <Flare type='green' />
          <Flare type='blue' />
          {competitions.map((item) => (
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
          <INNACO />
        </Content>
        <Content pt='100px'>
          <Bootcamp />
        </Content>
        <Content pt='100px'>
          <Media title='Media Partner' />
        </Content>
        <Content pt='100px'>
          <Footer />
        </Content>
      </main>
    </div>
  );
}
