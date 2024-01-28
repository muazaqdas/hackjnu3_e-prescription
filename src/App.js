import {lazy, Suspense, useContext} from 'react'
import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes,useLocation } from 'react-router-dom';
import Error404 from './Error404';
import Dashboard from './Dashboard';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import AuthContext, { AuthProvider } from './context/AuthContext';

const Layout = lazy( () => import('./components/Layout'));
const Login = lazy( () => import('./Login'));
const Loading = lazy( () => import('./components/Loading'));
const Signup = lazy( () => import('./Signup'));

// const auth = getAuth();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the route changes
  }, [location.pathname]);

  return null;
};



function App() {

  // const {setUser} = useContext(AuthContext);
  // useEffect(()=>{
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //         setUser(user);
  //         console.log('User is logged in',user);
  //       // ...
  //     } else {
  //       setUser('null')
  //       // ...
  //     }
  //   });
  // })
  return (
      // <AuthProvider>
        <BrowserRouter>
        <ScrollToTop/>
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<Login/>}/>
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path="404" element={ <Error404/>} />
                <Route path="/dashboard" element={ <Dashboard/>} />
              </Route>
              <Route path="*" element={ <Navigate to="/404" replace />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      // </AuthProvider>
  );
}

export default App;
