import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Box } from '../Box/Box';

export const Layout = () => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <AppBar />
      <Outlet />
    </Box>
  );
};
