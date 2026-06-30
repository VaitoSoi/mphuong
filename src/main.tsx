import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import AnimatedRoutes from './AnimateRoute';
import './index.css';
import ScrollToTop from './assets/ScrollToTop';

// const Achievement = () => <div style={tempStyle}><h2>Achievement</h2>(Đang xây dựng)</div>;
// const Extracurricular = () => <div style={tempStyle}><h2>Extracurricular</h2>(Đang xây dựng)</div>;
// const FuturePlan = () => <div style={tempStyle}><h2>My Future Plan</h2>(Đang xây dựng)</div>;
// const ThankYou = () => <div style={tempStyle}><h2>Thank You</h2>(Đang xây dựng)</div>;

// // CSS tạm
// const tempStyle = {
//   padding: '100px 20px',
//   textAlign: 'center' as const,
//   backgroundColor: '#f2ede4',
//   minHeight: '100vh',
//   fontFamily: 'sans-serif'
// };
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop /> 
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>
);