import Link from 'next/link'
import { GetStaticProps } from 'next';

const IndexPage = (props) => (
  <>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About Plus +</Link>
      <h2>Data: props.date</h2>
    </p>
  </>
)

export async function getStaticProps() {
  const staticDate = new Date()
  const staticDateString = staticDate.toDateString();

  return {
    props: {
      date: staticDateString
    }
  }

}

export default IndexPage;