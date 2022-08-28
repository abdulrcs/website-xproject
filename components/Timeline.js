import { Box, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = ({ timelines }) => {
  const [isDesktop, setIsDesktop] = useMediaQuery('(min-width: 1300px)');

  return (
    <Box px={{ base: '20px', md: '0' }}>
      <VerticalTimeline lineColor='#4CC015' animate={isDesktop}>
        {timelines.map((data, index) => (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--work'
            date={''}
            contentStyle={{
              color: '#fff',
              background: 'transparent',
              padding: '0',
              boxShadow: 'none',
              textAlign: isDesktop && index % 2 === 0 ? 'right' : 'left',
            }}
            iconStyle={{
              background: '#4CC015',
              boxShadow: 'none',
              width: isDesktop && '20px',
              height: isDesktop && '20px',
              marginLeft: isDesktop && '-10px',
            }}
            contentArrowStyle={{
              display: 'none',
            }}
          >
            <Text color='white' margin='0 !important'>
              {data.title}
              <br />
              {data.date}
            </Text>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default Timeline;
