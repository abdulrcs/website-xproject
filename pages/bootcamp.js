import { Box } from '@chakra-ui/react';
import React from 'react';
import TitleImage from '../components/TitleImage';
import Page from '../layout/Page';
import PosterPage from '../layout/PosterPage';

const Bootcamp = () => {
  return (
    <PosterPage
      title='Bootcamp'
      img='/assets/posterBootcamp.png'
      register='http://unesa.me/RegistrasiBootcampUIUXDesign'
    />

  );
};

export default Bootcamp;
