import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const Message = styled.span`
  font-size: 15px;
  color: #c0c0c0;
  text-align: center;
`;

export const ListContainer = styled.div`
  display: flex;
  padding: 20px 30px 30px;
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 3px;
`;

export const List = styled.table`
  th {
    padding-bottom: 5px;
    color: #999;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
    font-size: 15px;
    letter-spacing: -0.6px;
  }

  td {
    padding: 15px 0;
    border-bottom: 1px solid #eee;
  }

  tr:last-child td {
    border: 0;
    padding-bottom: 0;
  }

  img {
    height: 60px;
    display: flex;
    object-fit: contain;
  }

  strong {
    display: flex;
    font-size: 16px;
    color: #333;
    line-height: 23px;
    letter-spacing: 0.25px;
  }

  small {
    margin-top: 3px;
    display: flex;
    font-size: 12px;
    color: #c0c0c0;
    letter-spacing: 0.8px;
  }

  span {
    font-size: 22px;
    font-weight: bold;
    color: #37bea9;
    letter-spacing: 0.3px;
  }

  input {
    width: 40px;
    height: 27px;
    padding-left: 10px;
    font-size: 12px;
    color: #999;
    border: 1px solid #eee;
    border-radius: 3px;
  }

  button {
    font-size: 16px;
    border: 0;
    background: transparent;
    color: #999;

    &:hover {
      opacity: 0.6;
    }
`;

export const Total = styled.div`
  margin: 25px 70px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  strong {
    color: #999;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
  }

  span {
    display: flex;
    margin-left: 15px;
    font-size: 27px;
    font-weight: bold;
    color: #37bea9;
    letter-spacing: 0.6px;
  }
`;
