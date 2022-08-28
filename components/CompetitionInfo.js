import React from 'react';
import { Box, HStack } from '@chakra-ui/react';

const CompetitionInfo = ({ type, level, prize }) => {
  const InfoBox = ({ text }) => (
    <Box
      borderRadius='15px'
      padding='18px 81px 18px 81px'
      background='linear-gradient(90deg, rgba(31, 224, 14, 0.43) -14.19%, rgba(40, 181, 190, 0.43) 123.78%)'
      fontWeight='bold'
      color='white'
    >
      {text}
    </Box>
  );
  return (
    <HStack justifyContent='space-around' mx='15vw'>
      <InfoBox text={type} />
      <InfoBox text={level} />
      <InfoBox text={prize} />
    </HStack>
  );
};

export default CompetitionInfo;
