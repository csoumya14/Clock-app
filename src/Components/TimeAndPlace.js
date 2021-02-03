import React, { useContext } from 'react';
import { Context } from '../Context';
import sunIcon from '../assets/desktop/icon-sun.svg';
import moonIcon from '../assets/desktop/icon-moon.svg';
import styled from 'styled-components';
import DetailButton from './DetailButton';

const Section = styled.section`
  width: calc(100% - 90px);
  height: 285px;
  margin-top: ${({ isOpen }) => (isOpen ? '100px' : '210px')};
  transition: margin-top 0.5s;

  margin-left: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
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
  @media (min-width: ${({ theme }) => theme.mediaSize.s}) {
    height: 185px;
  }
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-top: ${({ isOpen }) => (isOpen ? '250px' : '250px')};
    height: 257px;

    margin-left: 64px;
    .sun-and-greetings span {
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 3.6px;
    }
    .heading {
      font-size: 175px;
      line-height: 175px;
      letter-spacing: -4.375px;
    }
    .heading span {
      font-weight: 300;
      font-size: 32px;

      line-height: 28px;
    }
    .city-and-country {
      margin-top: -9rem;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 3.6px;
    }
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    margin-top: ${({ isOpen }) => (isOpen ? '150px' : '250px')};
    height: 257px;
    margin-left: 155px;
    .sun-and-greetings span {
      font-size: 20px;
      letter-spacing: 4px;
    }
    .heading {
      font-size: 200px;
      line-height: 200px;
      letter-spacing: -5px;
    }
    .heading span {
      font-weight: 300;
      font-size: 40px;

      line-height: 28px;
    }
    .city-and-country {
      margin-top: -9rem;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 4.8px;
    }
  }
`;

const TimeAndPlace = () => {
  const { time, isDay, greeting, isOpen } = useContext(Context);

  return (
    <Section isOpen={isOpen}>
      <div>
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
      </div>
      <DetailButton />
    </Section>
  );
};
export default TimeAndPlace;
