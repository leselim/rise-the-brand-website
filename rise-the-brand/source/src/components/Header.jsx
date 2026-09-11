import { useEffect, useRef, useState } from "react";
import { Link, useRoute } from "../lib/router.jsx";
import { useCart } from "../lib/cart.jsx";
import { useLockBody } from "../lib/hooks.js";
import { products, money } from "../data/store.js";
import { ChevronDown, Bag } from "./Icons.jsx";
import { Logo } from "./ui.jsx";

export default function Header() {
  const { path } = useRoute();
  const { count, setOpen, bump } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const shopRef = useRef(null);
  const timer = useRef(0);

  useLockBody(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setShopOpen(false);
    setMenuOpen(false);
  }, [path]);

  useEffect(() => {
    if (!bump) return;
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 600);
    return () => clearTimeout(t);
  }, [bump]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setShopOpen(false);
        setMenuOpen(false);
      }
    };
    const onClick = (e) => {
      if (shopRef.current && !shopRef.current.contains(e.target)) setShopOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const hover = window.matchMedia && window.matchMedia("(hover: hover)").matches;
  const enter = () => {
    if (!hover) return;
    clearTimeout(timer.current);
    setShopOpen(true);
  };
  const leave = () => {
    if (!hover) return;
    timer.current = setTimeout(() => setShopOpen(false), 160);
  };

  const current = (p) => (path === p ? "page" : undefined);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "") + (menuOpen ? " menu-open" : "")}>
      <div className="wrap header-inner">
        <Link to="/" className="brand" aria-label="Rise The Brand, home">
          <Logo />
        </Link>

        <nav className="nav" aria-label="Main">
          <div className="nav-shop" ref={shopRef} onMouseEnter={enter} onMouseLeave={leave}>
            <button
              type="button"
              className="nav-link"
              aria-expanded={shopOpen}
              aria-controls="shop-menu"
              onClick={() => setShopOpen((o) => !o)}
            >
              Shop <ChevronDown />
            </button>
            <div className={"shop-menu" + (shopOpen ? " is-open" : "")} id="shop-menu" aria-hidden={!shopOpen} onClick={(e) => e.target.closest("a") && setShopOpen(false)}>
              {products.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="shop-menu-item" tabIndex={shopOpen ? 0 : -1}>
                  <span className="shop-menu-thumb">
                    <img src={p.thumb} alt="" style={{ height: `${70 + 20 * p.scale}%` }} />
                  </span>
                  <span className="shop-menu-text">
                    <span className="shop-menu-name">{p.name}</span>
                    <span className="shop-menu-meta">
                      {p.size}, {money(p.price)}
                    </span>
                  </span>
                </Link>
              ))}
              <Link to="/" section="shop" className="shop-menu-all" tabIndex={shopOpen ? 0 : -1}>
                View the full range
              </Link>
            </div>
          </div>
          <Link to="/about" className="nav-link" aria-current={current("/about")}>About</Link>
          <Link to="/help" className="nav-link" aria-current={current("/help")}>Help</Link>
        </nav>

        <div className="header-actions">
          <Link to="/login" className="nav-link nav-login" aria-current={current("/login")}>Login</Link>
          <button type="button" className={"cart-button" + (pulse ? " is-pulse" : "")} onClick={() => setOpen(true)} aria-label={`Open cart, ${count} items`}>
            <Bag />
            <span className="cart-label">Cart</span>
            <span className="cart-count">{count}</span>
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={"mobile-menu" + (menuOpen ? " is-open" : "")} id="mobile-menu" aria-hidden={!menuOpen}>
        <nav className="wrap mobile-menu-inner" aria-label="Mobile" onClick={(e) => e.target.closest("a") && setMenuOpen(false)}>
          <Link to="/" tabIndex={menuOpen ? 0 : -1}>Home</Link>
          {products.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} tabIndex={menuOpen ? 0 : -1}>
              {p.name}
            </Link>
          ))}
          <Link to="/about" tabIndex={menuOpen ? 0 : -1}>About</Link>
          <Link to="/help" tabIndex={menuOpen ? 0 : -1}>Help Desk</Link>
          <Link to="/login" tabIndex={menuOpen ? 0 : -1}>Login</Link>
        </nav>
      </div>
    </header>
  );
}
