import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './Components/Home/Home.jsx';
// import Login from './Components/Shared/Login.jsx';
// import AuthProvider from './Components/Auth/AuthProvider.jsx';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: '/login',
//     element: <Login />
//   }

// ]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider> */}
    <App />
  </StrictMode>,
)
