
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import PageNotFound from './ui/Page-not-found'
import AppLayout from './ui/AppLayout'
import Users from './pages/Users'
import Dashboad from './pages/Dashboard'
import User from './pages/User'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboad />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<User />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
