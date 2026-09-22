import { Link } from "../lib/router.jsx";
import { products, settings } from "../data/store.js";
import { Facebook, Instagram, TikTok } from "./Icons.jsx";
import { Logo } from "./ui.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <Link to="/" aria-label="Rise The Brand, home">
              <Logo />
            </Link>
            <p className="hours">
              <span>Opening hours</span>
              {settings.hours}
            </p>
            <div className="socials">
              <a href={settings.socials.instagram} aria-label="Rise on Instagram"><Instagram /></a>
              <a href={settings.socials.facebook} aria-label="Rise on Facebook"><Facebook /></a>
              <a href={settings.socials.tiktok} aria-label="Rise on TikTok"><TikTok /></a>
            </div>
          </div>

          <div className="footer-col">
            <h2>Shop</h2>
            <ul>
              {products.map((p) => (
                <li key={p.id}><Link to={`/product/${p.id}`}>{p.name}</Link></li>
              ))}
              <li><Link to="/" section="shop">All products</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h2>Help Desk</h2>
            <ul>
              <li><Link to="/help" section="faq">FAQ</Link></li>
              <li><Link to="/help" section="shipping">Shipping</Link></li>
              <li><Link to="/help" section="returns">Return Policy</Link></li>
              <li><Link to="/help" section="contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h2>Company</h2>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/about" section="believe">What we believe</Link></li>
              <li><Link to="/trade">Trade rates</Link></li>
              <li><Link to="/trade" section="apply">Become a distributor</Link></li>
            </ul>
          </div>

          <p className="footer-credit" aria-hidden="true">&copy; {year} Rise The Brand</p>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Rise The Brand. Proudly South African.</p>
          <ul>
            <li><Link to="/help" section="returns">Returns</Link></li>
            <li><Link to="/help" section="privacy">Privacy</Link></li>
            <li><Link to="/help" section="terms">Terms</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
