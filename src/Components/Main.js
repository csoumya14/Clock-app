import React from 'react';
import styled from 'styled-components';
import DetailButton from './DetailButton';
import Background from './BackgroundImage';
import Quotes from './Quotes';
import TimeAndPlace from './TimeAndPlace';

const Foreground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  backdrop-filter: contrast(0.6);
`;

const Main = () => {
  return (
    <Background>
      <Foreground></Foreground>
      <Quotes />
      <TimeAndPlace />
      <DetailButton />
    </Background>
  );
};
export default Main;
