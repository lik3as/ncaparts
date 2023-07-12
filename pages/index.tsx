import { FC } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Topbar from '../components/layouts/topbar';
import Sidebar from '../components/layouts/sidebar'
import Global from '../styles/global';
import GlobalThemes from '../styles/themes'

const Home: FC = () => (
  <>
    <Global />
    <GlobalThemes />

    <header>
      <Topbar />
    </header>

    <main>
      <Sidebar />

    </main>
  </>
);

export default Home;