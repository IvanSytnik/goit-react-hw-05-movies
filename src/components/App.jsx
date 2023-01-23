import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import TopMovies from './TopMovies/TopMovies'

export const App = () => {
  return (
    <>
    <Routes>

      <Route path="/" element={<Layout />}>
           
          <Route path="/" element={<TopMovies/>} > 
          {/* <Route path=":invoiceId" element={<InvoiceDetails />} /> */}
          </Route>
          <Route path="movies" element={<div>Dashboard</div>}/>
      </Route>
    </Routes>
    <GlobalStyle />
    </>
  );
};
