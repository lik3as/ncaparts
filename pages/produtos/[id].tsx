export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        sku: '1'
      }
    }, {
      params: {
        sku: '2'
      }
    }],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  await delay(5000);
  const sku = context.params.id;

  return {
    props: {
      sku: sku
    }
  }
}

const Produtos = (props) => {
   return <div>SKU do produto: {props.sku}</div>
}

export default Produtos;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}