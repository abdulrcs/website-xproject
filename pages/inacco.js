import { Box } from '@chakra-ui/react';
import React from 'react';
import TitleImage from '../components/TitleImage';
import Page from '../layout/Page';

const Inacco = () => {
  return (
    <Page title='INACCO'>
      <Box py='150px'>
        <TitleImage
          title='INACCO'
          img='/assets/inacco.png'
          footer='COMING SOON'
        />
      </Box>
    </Page>
  );
};

export default Inacco;
