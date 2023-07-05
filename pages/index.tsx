import React, { FC, useState } from 'react'

const Home: FC = () => {
  return (
    <>
        <h1>Página Inicial</h1>
    </>
  );
}

const Contador: FC = () =>  {
  const [contador, setContador] = useState(1);


  function adicionarContador() {
    setContador(contador + 1);
  } 

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
}

export default Home;