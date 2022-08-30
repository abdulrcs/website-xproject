import { Box } from '@chakra-ui/react';
import React from 'react';
import PosterImage from '../components/PosterImage';
import Page from './Page';

const PosterPage = ({ title, img, register, guidebook }) => {
  return (
    <Page title={title}>
      <Box
        py='150px'
        px={{
          base: '5vw',
          xl: '15vw',
        }}
      >
        <PosterImage
          title={title}
          img={img}
          register={register}
          guidebook={guidebook}
        />
      </Box>
    </Page>
  );
};

export default PosterPage;
