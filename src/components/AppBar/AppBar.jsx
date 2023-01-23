import { NavLink } from 'react-router-dom';
import { Box } from '../Box/Box';
import styled from 'styled-components';
const navItems = [
  { href: '/', text: 'Homepage'},
  { href: 'movies', text: 'Movies'}
];

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

export const AppBar = () => {
  return (
    <Box as="header" p={4} borderRight="1px solid black">
      <Box as="nav" display="flex" justifyContent="center">
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
        
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};