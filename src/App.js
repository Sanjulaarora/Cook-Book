import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

const Main = lazy(() => import('./components/Main'));
const Login = lazy(() => import('./components/Login'));
const SignUp = lazy(() => import('./components/SignUp'));
const IngredientsPage = lazy(() => import('./components/IngredientsPage'));
const Saved = lazy(() => import('./components/Saved'));

function App() {
  return (
    <div className='max-w-full mx-4'>
      <AppProvider>
        <Header />
        <Suspense fallback={<div className='font-Dancing text-xl text-center'>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/sign-up' element={<SignUp />}/>
            <Route path='/saved' element={<Saved />}/>
            <Route path='/ingredients-page/:id' element={<IngredientsPage />}/>
          </Routes>
        </Suspense>
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;
