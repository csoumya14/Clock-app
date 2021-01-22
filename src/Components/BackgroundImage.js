import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';
import mobileDayImg from '../assets/mobile/bg-image-daytime.jpg';
import mobileNightImg from '../assets/mobile/bg-image-nighttime.jpg';
//import tabDayImg from '../assets/tablet/bg-image-daytime.jpg';
//import tabNightImg from '../assets/tablet/bg-image-nigttime.jpg';
//import desktopDayImg from '../assets/desktop/bg-image-daytime.jpg';
//import desktopNightImg from '../assets/desktop/bg-image-nigttime.jpg';

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
  background-image: url(${({ isDay }) => (isDay ? mobileDayImg : mobileNightImg)});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const Background = ({ children }) => {
  const { isDay } = useContext(Context);

  return <Container isDay={isDay}>{children}</Container>;
};

export default Background;
