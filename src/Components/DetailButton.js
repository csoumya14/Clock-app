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

  .button-text {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 3.75px;
    text-transform: uppercase;
    text-align: center;
    margin-left: 17px;
    opacity: 0.5;
    color: ${({ theme }) => theme.black};
  }
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    width: 146px;
    height: 56px;
    .button-text {
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 5px;
      opacity: 0.5;
      color: ${({ theme }) => theme.black};
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    margin-top: 15rem;
  }
`;
const ButtonElement = styled.img`
  width: 32px;
  height: 32px;

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

      <ButtonElement
        isOpen={isOpen}
        role="button"
        aria-expanded="false"
        className="button-element"
        aria-haspopup="true"
        src={arrow}
        alt=""
        onClick={OpenDetails}
      />
    </Wrapper>
  );
};
export default DetailButton;
