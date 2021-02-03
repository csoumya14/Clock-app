import React, { useContext } from 'react';
import styled from 'styled-components';
import arrow from '../assets/desktop/icon-arrow-up.svg';
import { Context } from '../Context';

const Wrapper = styled.div`
  width: 115px;
  margin-left: 16px;
  margin-top: 2rem;
  background: ${({ theme }) => theme.white};
  border-radius: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  .buttons {
    width: 32px;
    height: 32px;
  }
  .button-text {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 3.75px;
    text-transform: uppercase;
    text-align: center;
    margin-left: 17px;

    color: ${({ theme }) => theme.black};
  }
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    width: 146px;
    height: 56px;
    margin-top: 12rem;
    .button-text {
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 5px;
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    margin-top: 10rem;
  }
`;
const Button = styled.button`
  width: 32px;
  height: 32px;
  background-image: url(${arrow});
  background-size: cover;
  border: none;

  border-radius: 50%;
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
  transform: ${({ isOpen }) => (isOpen ? 'rotate(0)' : 'rotate(180deg)')};

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    width: 40px;
    height: 40px;
  }
`;

const DetailButton = () => {
  const { OpenDetails, isOpen } = useContext(Context);

  return (
    <Wrapper isOpen={isOpen}>
      {isOpen ? <p className="button-text">less</p> : <p className="button-text">more</p>}
      <Button isOpen={isOpen} onClick={OpenDetails}>
        <span className="visually-hidden">Click button to display details</span>
      </Button>
    </Wrapper>
  );
};
export default DetailButton;
