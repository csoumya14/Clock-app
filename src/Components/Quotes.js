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
  background-image: url(${refreshButton});
  border-radius: 50%;
  background-size: cover;
  background-color: hsla(0, 0%, 0%, 0.1);
  border: none;
  width: 32px;
  height: 32px;
  .visually-hidden {
    border: 0;
    padding: 0;
    margin: 0;
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(
      1px 1px 1px 1px
    ); /* IE6, IE7 - a 0 height clip, off to the bottom right of the visible 1px box */
    clip: rect(1px, 1px, 1px, 1px); /*maybe deprecated but we need to support legacy browsers */
    clip-path: inset(50%); /*modern browsers, clip-path works inwards from each corner*/
    white-space: nowrap; /* added line to stop words getting smushed together (as they go onto seperate lines and some screen readers do not understand line feeds as a space */
  }
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
      <Button onClick={getQuote}>
        <span className="visually-hidden">Click button to display new quote</span>
      </Button>
    </Container>
  );
};

export default Quotes;
