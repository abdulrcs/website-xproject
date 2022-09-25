import { Box } from '@chakra-ui/react';
import React from 'react';
import CompetitionInfo from '../components/CompetitionInfo';

import GuideCard from '../components/GuideCard';
import Timeline from '../components/Timeline';
import Page from './Page';

const CompetitionPage = ({
  title,
  img,
  desc,
  register,
  guidebook,
  type,
  level,
  htm,
  timelineData,
  uploadData,
}) => {
  return (
    <Page title={title}>
      <Box pt='100px'>
        <GuideCard
          title={title}
          img={img}
          desc={desc}
          register={register}
          guidebook={guidebook}
          uploadData={uploadData}
        />
        <Box mt='100px' />
        <CompetitionInfo type={type} level={level} htm={htm} />
        <Box mt='100px' />
        <Timeline timelines={timelineData} />
      </Box>
    </Page>
  );
};

export default CompetitionPage;
