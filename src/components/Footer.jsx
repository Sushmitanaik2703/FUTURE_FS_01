import { profile } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
