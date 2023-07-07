import Link from 'next/link'

const IndexPage = (props) => (
  <>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About Plus +</Link>
      <h2>Data: {props.date}</h2>
    </p>
  </>
)

export default IndexPage;