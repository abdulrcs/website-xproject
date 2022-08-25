import { Box } from '@chakra-ui/react';
import React from 'react';
import TitleImage from '../components/TitleImage';
import Page from '../layout/Page';

const Bootcamp = () => {
  return (
    <Page title='Bootcamp'>
      <Box py='150px'>
        <TitleImage
          title='Bootcamp'
          img='/assets/bootcamp_vector.png'
          footer='COMING SOON'
        />
      </Box>
    </Page>
  );
};

export default Bootcamp;
