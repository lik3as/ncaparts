import { FC } from 'react';

import { Button, Image } from '../styles';
import account from '../../../../public/images/user.png';
import settings from '../../../../public/images/settings.png';

const Manage: FC = () => {
  return (
    <>
      <Button variant='secondary' href='/auth/sign'>
        <Image src={account.src}/>
        Conta
      </Button>
      <Button variant='secondary' href='#'>
        <Image src={settings.src}/> 
        Configurações
      </Button>
    </>
  )
};

export default Manage;