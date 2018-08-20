import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 20px 0;
  display: flex;

  ${props => props.loading
    && css`
      justify-content: center;
      align-items: center;
    `};
`;
