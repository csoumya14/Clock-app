import React, { useContext } from 'react';
import styled from 'styled-components';
import Details from './Details';
import BigScreenDetails from './BigScreenDetails';
import Background from './BackgroundImage';
import Quotes from './Quotes';
import TimeAndPlace from './TimeAndPlace';
import { Context } from '../Context';

const Foreground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  backdrop-filter: contrast(0.7);
`;

const Main = () => {
  const breakpoint = 767;
  const { width } = useContext(Context);
  return (
    <Background>
      <Foreground></Foreground>
      <Quotes />
      <TimeAndPlace />
      {width > breakpoint ? <BigScreenDetails /> : <Details />}
    </Background>
  );
};
export default Main;
