import Link from 'next/link'
const index = function Index() {

  return (
      <>
        <Link href="/api/login">
          <button>ログイン</button>
        </Link>
      </>
  )
}

export default index;