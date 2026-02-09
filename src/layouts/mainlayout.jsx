import './mainlayout.css';
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Navbar from '../components/navbar/navbar'
import { Outlet } from 'react-router-dom';


function MainLayout() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default MainLayout;