import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Page({ title, metaDesc, children, usePadding }) {
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
        <Navbar />
        {children}
        <Content pt='100px' disableAnimation>
          <Footer />
        </Content>
      </main>
    </div>
  );
}
