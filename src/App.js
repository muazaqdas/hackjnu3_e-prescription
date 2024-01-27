import {lazy, Suspense} from 'react'
import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes,useLocation } from 'react-router-dom';
import Error404 from './Error404';

const Layout = lazy( () => import('./components/Layout'));
const Login = lazy( () => import('./Login'));
const Loading = lazy( () => import('./components/Loading'));
const Signup = lazy( () => import('./Signup'));

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the route changes
  }, [location.pathname]);

  return null;
};

function App() {
  return (

      <BrowserRouter>
      <ScrollToTop/>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Login/>}/>
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path="404" element={ <Error404/>} />
            </Route>
            <Route path="*" element={ <Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
