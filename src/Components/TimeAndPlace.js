import React, { useContext } from 'react';
import { Context } from '../Context';
import sunIcon from '../assets/desktop/icon-sun.svg';
import moonIcon from '../assets/desktop/icon-moon.svg';
import styled from 'styled-components';

const Section = styled.section`
  width: calc(100% - 90px);
  height: 185px;
  position: absolute;
  margin-top: 250px;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(-150%)' : '')};
  margin-left: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #ffffff;
  .sun-and-greetings span {
    font-size: 15px;
    line-height: 25px;
    position: absolute;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-left: 16px;
  }
  .heading {
    margin-top: 1rem;
    font-size: 100px;
    line-height: 100px;
    letter-spacing: -2.5px;
  }
  .heading span {
    font-weight: 300;
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 25px;
    margin-left: 1rem;
  }
  .city-and-country {
    margin-top: -5rem;
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
`;

const TimeAndPlace = () => {
  const { time, isDay, greeting, isOpen } = useContext(Context);

  return (
    <Section isOpen={isOpen}>
      <div className="sun-and-greetings">
        {isDay ? <img src={sunIcon} alt="" /> : <img src={moonIcon} alt="" />}
        <span>{greeting}</span>
      </div>
      <h1 className="heading">
        {new Date(time.datetime).toTimeString().slice(0, 5)}
        <span>{time.abbreviation}</span>
      </h1>
      <p className="city-and-country">
        In {time.city} ,{time.country_code}
      </p>
    </Section>
  );
};
export default TimeAndPlace;
/*
{time.datetime.getHours()}:{time.datetime.getMinutes()}
*/
