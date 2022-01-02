import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Blog de</span>
              <span>Philderan</span>
            </h1>
            <h2>Otro capitulazo mas de...</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Lemi</p>
      </footer>
    </div>
  )
}