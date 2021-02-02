import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';
import QuotesData from './QuotesData';
import refreshButton from '../assets/desktop/icon-refresh.svg';

const Container = styled.div`
  width: calc(100% - 50px);
  display: flex;
  flex-direction: row;
  height: 97px;
  margin-top: 31.67px;
  margin-left: 26px;
  align-items: flex-start;
  display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    width: 573px;
    margin-top: 80px;
    margin-left: 64px;
  }
  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    width: 573px;
    margin-top: 56px;
    margin-left: 165px;
    justify-content: center;
  }
`;

const Figure = styled.figure`
  width: 100%;
  margin-left: 0px;
  margin-top: 0px;
  color: ${({ theme }) => theme.white};
  .quote {
    width: 100%;
    margin-left: 0px;
    margin-top: 0px;
    font-size: 12px;
    line-height: 22px;
  }
  .caption {
    font-weight: 700;
    font-size: 12px;
    line-height: 22px;
  }
  @media (min-width: ${({ theme }) => theme.mediaSize.s}) {
    .quote {
      font-size: 18px;
      line-height: 28px;
    }
    .caption {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;
const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Quotes = () => {
  const [quo, setQuo] = useState([]);
  const [count, setCount] = useState(0);
  const getQuote = () => {
    let randomNumber = Math.floor(Math.random() * 15);
    setCount(randomNumber);
  };
  useEffect(() => setQuo(QuotesData[count]), [count]);

  const { isOpen } = useContext(Context);
  return (
    <Container isOpen={isOpen}>
      <Figure>
        <blockquote className="quote">{quo.text}</blockquote>
        <figcaption className="caption">{quo.author}</figcaption>
      </Figure>
      <Button>
        <input type="image" src={refreshButton} alt="" onClick={getQuote} />
      </Button>
    </Container>
  );
};

export default Quotes;
