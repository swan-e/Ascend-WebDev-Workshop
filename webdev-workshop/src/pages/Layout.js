import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.js';

export default function Layout() {
  return (
    <>
      <NavBar name="User"/>
      {/* Outlet is where child routes get rendered */}
      <Outlet />
    </>
  );
}