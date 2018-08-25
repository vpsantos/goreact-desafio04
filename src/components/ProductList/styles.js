import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Product = styled(Link)`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 3px;

  img {
    height: 180px;
  }

  strong {
    margin-top: 18px;
    font-size: 16px;
    color: #333;
    letter-spacing: 0.25px;
  }

  small {
    margin-top: 6px;
    font-size: 12px;
    color: #c0c0c0;
    letter-spacing: 0.8px;
  }

  span {
    margin-top: 16px;
    font-size: 22px;
    font-weight: bold;
    color: #37bea9;
    letter-spacing: 0.3px;
  }

  &:hover {
    opacity: 0.6;
  }
`;
