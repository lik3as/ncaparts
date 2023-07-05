import { useRouter } from 'next/router';

const Produtos = () => {
   const router = useRouter();
   const id = router.query.id;

   return <div>Id do produto: {id}</div>
}

export default Produtos;