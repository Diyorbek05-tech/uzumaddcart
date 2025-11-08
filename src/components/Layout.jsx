import { Outlet } from 'react-router-dom';
import Header from '../pages/header/header';
import Footer from '../pages/footer/index';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;