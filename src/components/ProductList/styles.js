import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const Product = styled(Link)`
  display: flex;
  padding: 30px;
  flex-direction: column;
  text-decoration: none;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 3px;

  img {
    height: 180px;
    object-fit: contain;
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
