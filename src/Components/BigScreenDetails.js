import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';

const TableContainer = styled.div`
  background-color: hsl(0, 0%, 100%, 0.75);
  backdrop-filter: blur(40.7742px);
  width: 100vw;
  height: 50%;
  margin-top: 5rem;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    height: 50%;
    margin-top: 5rem;
  }
`;

const Table = styled.table`
  width: 100vw;
  height: 140px;

  border-collapse: collapse;
  table-layout: fixed;
  margin-left: 160px;
  .upper-row {
    height: 50px;
  }
  .upper-row th {
    padding-top: 2rem;
  }
  .lower-row {
    height: 50px;
  }
  .lower-row th {
    padding-top: 2rem;
  }
  .table-heading {
    color: #303030;
    text-align: left;
    font-size: 13px;
    letter-spacing: 2.6px;
    text-transform: uppercase;
    font-weight: 300;
  }
  .column-values {
    text-align: left;
    font-size: 40px;
    font-weight: 700;
    color: #303030;
  }
  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    width: 90vw;
  }
`;

const BigScreenTable = () => {
  const { time, isOpen } = useContext(Context);
  return (
    <TableContainer isOpen={isOpen}>
      <Table>
        <tbody>
          <tr className="upper-row">
            <th id="co1" headers="blank" className="table-heading">
              Current timezone
            </th>
            <th id="co2" headers="blank" className="table-heading">
              Day of the year
            </th>
          </tr>
          <tr className="upper-row">
            <td headers="co1 v1" className="column-values">
              {time.timezone}
            </td>
            <td headers="co2 v1" className="column-values">
              {time.day_of_year}
            </td>
          </tr>
          <tr className="lower-row">
            <th id="co3" headers="blank" className="table-heading">
              Day of the week
            </th>
            <th id="co4" headers="blank" className="table-heading">
              Week number
            </th>
          </tr>
          <tr className="lower-row">
            <td headers="co3 v1" className="column-values">
              {time.day_of_year}
            </td>
            <td headers="co4 v1" className="column-values">
              {time.week_number}
            </td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
};
export default BigScreenTable;
