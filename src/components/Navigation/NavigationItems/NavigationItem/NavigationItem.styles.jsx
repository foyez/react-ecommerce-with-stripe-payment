import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavItemStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const NavItemDiv = styled.div`
  ${NavItemStyles}
`;

export const NavItem = styled(NavLink)`
  ${NavItemStyles}

  &.${({ activeClassName }) => activeClassName} {
    color: goldenrod;
  }
`;

NavItem.defaultProps = {
  activeClassName: 'active',
};