import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';
import refreshButton from '../assets/desktop/icon-refresh.svg';

const Container = styled.div`
  width: calc(100% - 50px);
  display: flex;
  flex-direction: row;
  height: 97px;
  margin-top: 31.67px;
  margin-left: 26px;
  align-items: flex-start;

  transform: ${({ isOpen }) => (isOpen ? 'translateY(-200%)' : '')};
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
`;
const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Quotes = () => {
  const { quote, getQuote, isOpen } = useContext(Context);
  return (
    <Container isOpen={isOpen}>
      <Figure>
        <blockquote className="quote">"{quote.content}"</blockquote>
        <figcaption className="caption">{quote.author}</figcaption>
      </Figure>
      <Button>
        <img src={refreshButton} alt="" role="button" onClick={getQuote} />
      </Button>
    </Container>
  );
};

export default Quotes;
