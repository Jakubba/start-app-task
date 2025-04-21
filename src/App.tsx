// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Hero from './components/Hero/Hero';
// import PricingTable from './components/PricingTable/PricingTable';
// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './routes/ProtectedRoute';
// import { Toaster } from 'react-hot-toast';
// import './styles/main.scss';

// const App: React.FC = () => {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Toaster
//           position="top-right"
//           toastOptions={{
//             duration: 3000,
//             style: {
//               background: '#333',
//               color: '#fff',
//             },
//           }}
//         />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Hero
//                 title="Generate Awesome Web Pages"
//                 description="The most important part of Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks."
//                 buttonText="Learn More"
//               />
//             }
//           />
//           <Route
//             path="/pricing"
//             element={
//               <ProtectedRoute>
//                 <PricingTable />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PricingTable from './components/PricingTable/PricingTable';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
        <Routes>
          <Route path="/" element={<PricingTable />} />
          <Route
            path="/pricing"
            element={
              <ProtectedRoute>
                <PricingTable />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
