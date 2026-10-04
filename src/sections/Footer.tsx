function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand" href="#main-content">Ismail Aminu Said</a>
      <div className="footer-links">
        <a href="mailto:ismailaminusaid1234@gmail.com">Email</a>
        <a href="https://github.com/Sinsydev" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/sinsy-dev" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://ismailaminusaid.netlify.app/" target="_blank" rel="noreferrer">Portfolio ↗</a>
      </div>
      <span>© {new Date().getFullYear()} Ismail Aminu Said</span>
      <a href="#main-content">Back to top ↑</a>
    </footer>
  )
}

export default Footer