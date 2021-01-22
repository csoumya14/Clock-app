import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/desktop/icon-arrow-up.svg';

const Wrapper = styled.div`
  width: 115px;
  margin-left: 26px;
  margin-top: 48px;
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
  .button-element {
    width: 32px;
    height: 32px;
  }
`;

const DetailButton = () => {
  return (
    <Wrapper>
      <p className="button-text">more</p>
      <img
        role="button"
        aria-expanded="false"
        className="button-element"
        aria-haspopup="true"
        src={arrow}
        alt=""
      />
    </Wrapper>
  );
};
export default DetailButton;
