import { FC } from 'react';

import { Image } from '../styles';
import Button from '../../../helpers/ItemButton';
import account from '../../../../public/images/user.png';
import settings from '../../../../public/images/settings.png';

const Manage: FC = () => {
  return (
    <>
      <Button variant='secondary' href='/auth'>
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