import { Box } from '@chakra-ui/react';
import AboutCard from '../components/AboutCard';
import Content from '../components/Content';
import Flare from '../components/Flare';
import { COMPETITIONS } from '../constants';
import Page from '../layout/Page';

export default function About() {
  return (
    <Page title='Championship'>
      <Content>
        <Flare type='greenTopLeft' />
        <Flare type='blue' top='200px' />
        <Box pt='100px' position='relative'>
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
          <Flare type='green' top='400px' zIndex={1} />
          <Flare type='blue' top='1000px' zIndex={1} />
        </Box>
      </Content>
    </Page>
  );
}
