import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  padding: 10px 15px;

  &.${({ activeClassName }) => activeClassName} {
    color: goldenrod;
  }
`;

NavItem.defaultProps = {
  activeClassName: 'active',
};