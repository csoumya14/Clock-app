import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';

const Table = styled.table`
  width: 100vw;
  height: 50%;
  margin-top: 1.9rem;

  background-color: hsl(0, 0%, 100%, 0.75);
  backdrop-filter: blur(40.7742px);
  border-collapse: collapse;
  table-layout: fixed;
  display: ${({ isOpen }) => (isOpen ? '' : 'none')};
  @media (min-width: ${({ theme }) => theme.mediaSize.s}) {
    margin-top: 0rem;
  }
  .table-rows:first-child td {
    padding-top: 48px;
  }
  .table-rows:last-child td {
    padding-bottom: 48px;
  }
  .heading-column {
    color: #303030;
    text-align: left;
    font-size: 10px;
    line-height: 28px;
    letter-spacing: 2px;
    padding-left: 26px;
    padding-top: 16px;
    text-transform: uppercase;
  }
  .value-column {
    text-align: right;
    padding-right: 26px;
    padding-top: 16px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    color: #303030;
  }
`;

const Details = () => {
  const { time, isOpen } = useContext(Context);
  return (
    <Table isOpen={isOpen}>
      <tbody className="table-body">
        <tr className="table-rows">
          <td className="heading-column">Current timezone</td>
          <td className="value-column">{time.timezone}</td>
        </tr>
        <tr className="table-rows">
          <td className="heading-column">Day of the year</td>
          <td className="value-column">{time.day_of_year}</td>
        </tr>
        <tr className="table-rows">
          <td className="heading-column">Day of the week</td>
          <td className="value-column">{time.day_of_year}</td>
        </tr>
        <tr className="table-rows">
          <td className="heading-column">Week number</td>
          <td className="value-column">{time.week_number}</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default Details;
