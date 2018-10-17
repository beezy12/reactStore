import Link from 'next/link';

const Nav = () => (
  <div>
      <Link href="/sell">
        <a>SELL YO</a>
      </Link>
      <Link href="/">
        <a>Homey</a>
      </Link>
  </div>
)

export default Nav;