import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px 0;
  display: flex;
  flex-shrink: 0;

  ${props => props.loading
    && css`
      justify-content: center;
      align-items: center;
    `};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-right: 30px;
  padding: 50px;
  border: 1px solid #eee;
  border-radius: 3px;

  img {
    height: 298px;
  }

  @media (max-width: 600px) {
    margin: 0 0 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  strong {
    margin-top: 5px;
    font-size: 33px;
    color: #333;
  }

  small {
    margin-top: 5px;
    font-size: 18px;
    color: #c0c0c0;
    letter-spacing: 0.4px;
  }

  span {
    margin-top: 56px;
    font-size: 32px;
    font-weight: bold;
    color: #37bea9;
    letter-spacing: 1px;
  }
`;

export const Button = styled(Link)`
  height: 50px;
  margin-top: 16px;
  display: flex;
  background: #37bea9;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: -0.2px;

  &:hover {
    opacity: 0.6;
  }
`;
