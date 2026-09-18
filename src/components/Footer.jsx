export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <span>
          © {new Date().getFullYear()} Sushmita Naik. Built with React &amp; Vite.
        </span>

        <a href="#top">
          Back to top ↑
        </a>

      </div>
    </footer>
  );
}