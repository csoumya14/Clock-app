import React, { useContext } from 'react';
import styled from 'styled-components';
import arrow from '../assets/desktop/icon-arrow-up.svg';
import { Context } from '../Context';

const Wrapper = styled.div`
  width: 115px;
  margin-left: 26px;
  margin-top: 460px;
  background: ${({ theme }) => theme.white};
  border-radius: 28px;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(-650%)' : '')};
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
`;
const ButtonElement = styled.img`
  width: 32px;
  height: 32px;

  transform: ${({ isOpen }) => (isOpen ? 'rotate(0)' : 'rotate(180deg)')};
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
