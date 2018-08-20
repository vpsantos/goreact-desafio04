import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.i`
  color: #999;
  font-size: 30px;
  animation: ${rotate360} 2s linear infinite;
`;
