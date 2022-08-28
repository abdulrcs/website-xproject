import Head from 'next/head';
import Content from '../components/Content';
import Footer from '../components/Footer';
import DesktopNavbar from '../components/DesktopNavbar';
import MobileNavbar from '../components/MobileNavbar';
import { useMediaQuery } from '@chakra-ui/react';

export default function Page({ title, metaDesc, children, usePadding }) {
  const [isDesktop] = useMediaQuery('(min-width: 1300px)');
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={
            metaDesc
              ? metaDesc
              : 'X-Project merupakan sebuah kompetisi tingkat nasional di bidang Teknologi Informasi. Event ini bertujuan untuk mengeksplorasi dan mengedukasi publik mengenai berbagai macam elemen di bidang teknologi informasi.'
          }
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
        {children}
        <Content pt='100px' disableAnimation>
          <Footer />
        </Content>
      </main>
    </div>
  );
}
