import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Box } from '../Box/Box';
import { Suspense } from "react";


export const Layout = () => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
      <Outlet />

      </Suspense>
    </Box>
  );
};
