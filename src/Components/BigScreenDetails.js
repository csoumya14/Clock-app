import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';

const TableContainer = styled.div`
  background-color: hsl(0, 0%, 100%, 0.75);
  backdrop-filter: blur(40.7742px);
  width: 100vw;
  height: 50%;
  margin-top: 1.9rem;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  width: 80vw;
  height: 140px;

  border-collapse: collapse;
  table-layout: fixed;

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
    font-style: normal;
  }
  .column-values {
    text-align: left;

    font-size: 40px;

    font-weight: 700;
    color: #303030;
  }
`;

const BigScreenTable = () => {
  const { time, isOpen } = useContext(Context);
  return (
    <TableContainer isOpen={isOpen}>
      <Table>
        <thead className="header">
          <tr className="upper-row">
            <th scope="col" className="table-heading">
              Current timezone
            </th>
            <th scope="col" className="table-heading">
              Day of the year
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="upper-row">
            <td className="column-values">{time.timezone}</td>
            <td className="column-values">{time.day_of_year}</td>
          </tr>
        </tbody>
        <thead>
          <tr className="lower-row">
            <th scope="col" className="table-heading">
              Day of the week
            </th>
            <th scope="col" className="table-heading">
              Week number
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="lower-row">
            <td className="column-values">{time.day_of_year}</td>
            <td className="column-values">{time.week_number}</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
};
export default BigScreenTable;
