import {lazy, Suspense} from 'react'
import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes,useLocation } from 'react-router-dom';
import Error404 from './Error404';
import Home from './Home';

const Layout = lazy( () => import('./components/Layout'));

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
        <Suspense fallback={<div>
          ....loading
          {/* Will create a fallback loading page and import here */}
        </div>}>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="404" element={ <Error404/>} />
            </Route>
            <Route path="*" element={ <Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
