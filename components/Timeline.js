import { Text } from '@chakra-ui/react';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = ({ timelines }) => {
  return (
    <VerticalTimeline lineColor='#4CC015'>
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
            textAlign: index % 2 === 0 ? 'right' : 'left',
          }}
          iconStyle={{
            background: '#4CC015',
            boxShadow: 'none',
            width: '20px',
            height: '20px',
            marginLeft: '-10px',
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
  );
};

export default Timeline;
