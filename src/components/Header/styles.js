import styled from 'styled-components';

import { Link, NavLink } from 'react-router-dom';

export const Container = styled.header`
  padding-top: 59px;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    font-size: 14px;
    color: #c0c0c0;
    letter-spacing: 0.4px;
    text-decoration: none;

    &:hover {
      opacity: 0.6;
    }

    i {
      margin-right: 10px;
      color: #999;
      font-size: 20px;
    }
  }
`;

export const Title = styled(Link)`
  font-size: 37px;
  font-weight: bold;
  color: #ff9696;
  text-decoration: none;
  letter-spacing: -0.5px;
`;

export const Nav = styled.nav`
  height: 54px;
  padding: 0 30px;
  margin-top: 22px;
  display: flex;
  align-items: center;
  background: #ff9696;
  border-radius: 3px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;

    li {
      margin-right: 22px;

      &:last-child {
        margin: 0;
      }
    }
  }
`;

export const LinkItem = styled(NavLink)`
  font-size: 15px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  opacity: ${props => (props.active ? 1 : 0.6)};
  letter-spacing: -0.9px;

  &:hover { {
    opacity: 1;
  }
`;
