import { Navigate, Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Store from './pages/Store'
import StoreOwner from './pages/StoreOwner'
import OrderDetails from './pages/OrderDetails'
import Login from './pages/Login'
import { useState } from 'react'

function App() {

  /* ============== outlet ============== */
  const Layout = () => {
  const Navigate = useNavigate()
  const [logoutPop, setLogoutPop] = useState(false)
    const handleLogoutNo = ()=>{
      setLogoutPop(false)
    }
    const handleLogoutYes=()=>{
      localStorage.setItem('auth', JSON.stringify(false))
      Navigate('/')
      window.location.reload();
      setLogoutPop(false);
    }
    return (
      <>
        <div style={{ display: `${logoutPop === true ? "" : "none"}` }} className='logoutPop' >
          <div>
            <p>Do you want logout?</p>
            <div>
              <button className='Btn1' onClick={handleLogoutYes} >Yes</button>
              <button className='Btn2' onClick={handleLogoutNo} >No</button>
            </div>
          </div>
        </div>
        <main style={{ display: 'flex' }} >
          <Sidebar setLogoutPop={setLogoutPop} />
          <div style={{ padding: "20px", width: "100%" }}>
            {/* <Navbar /> */}
            <Outlet />
          </div>
        </main>
      </>


    )
  }

  /* ============== protect route ============== */
  const localStorageValue = JSON.parse(localStorage.getItem("auth"));
  const ProtectedRoute = ({ children }) => {
    if (!localStorageValue) {
      return <Navigate to='/login' />
    }
    return children;
  }

  /* ============== create Route ============== */
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute>
        <Layout />
      </ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path: '/store',
          element: <Store />
        },
        // {
        //   path: '/maps',
        //   element: <Maps />
        // },
        {
          path: '/storeOwner',
          element: <StoreOwner />
        },
        {
          path: '/orderDetails',
          element: <OrderDetails />
        },
        // {
        //   path: '/contacts',
        //   element: <Contacts />
        // },
      ]

    },
    {
      path: '/login',
      element: <Login />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
