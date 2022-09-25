import React from 'react';
import { Flex, Stack } from '@chakra-ui/react';

const CompetitionInfo = ({ type, level, htm }) => {
  const InfoBox = ({ text }) => (
    <Flex
      align='center'
      justify='center'
      borderRadius='15px'
      padding='18px 81px 18px 81px'
      background='linear-gradient(90deg, rgba(31, 224, 14, 0.43) -14.19%, rgba(40, 181, 190, 0.43) 123.78%)'
      fontWeight='bold'
      color='white'
    >
      {text}
    </Flex>
  );

  return (
    <Stack
      direction={{
        base: 'column',
        xl: 'row',
      }}
      px={{
        base: '5vw',
        xl: '15vw',
      }}
      justifyContent='space-around'
    >
      <InfoBox text={type} />
      <InfoBox text={level} />
      <InfoBox text={htm} />
    </Stack>
  );
};

export default CompetitionInfo;
