import { FC } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Topbar from '../components/layouts/topbar';
import Sidebar from '../components/layouts/sidebar'
import Global from '../styles/global';

const Home: FC = () => (
  <>
    <Global />

    <header>
      <Topbar />
    </header>

    <main>
      <Sidebar />

    </main>

    <footer>Footer</footer>
  </>
);

export default Home;