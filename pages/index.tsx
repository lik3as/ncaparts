import { FC } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../components/layouts/topbar';
import Navigator from '../components/layouts/sidebar'
import Global from '../styles/global';

const Home: FC = () => (
  <>
    <Global />

    <header>
      <Header />
    </header>

    <main>
      <Navigator />

    </main>

    <footer>Footer</footer>
  </>
);

export default Home;