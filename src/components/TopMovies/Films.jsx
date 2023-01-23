
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  border-radius: 8px;

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`; 
 
 const Films = ({films}) => {
   return( <ul className="sad"> 
        {films.map(({id, title}) => (
            <NavItem key={id} to={`${id}`}>
            {title}
          </NavItem>
            
            
        ))}
       </ul>)
}

export default Films