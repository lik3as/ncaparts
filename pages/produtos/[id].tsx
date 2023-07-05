import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const id = context.query.id;
  return {
    props: {
      id: id
    }
  }
}

const Produtos = (props) => {
   return <div>Id do produto: {props.id}</div>
}

export default Produtos;