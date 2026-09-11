import { useEffect, useRef } from "react";
import { useCart } from "../lib/cart.jsx";
import { useLockBody } from "../lib/hooks.js";
import { Link, navigate, useRoute } from "../lib/router.jsx";
import { money } from "../data/store.js";
import { Close } from "./Icons.jsx";
import { Stepper } from "./ui.jsx";

export default function CartDrawer() {
  const { lines, count, subtotal, open, setOpen, setQty } = useCart();
  const { path } = useRoute();
  const panel = useRef(null);
  const closeBtn = useRef(null);
  const lastFocus = useRef(null);

  useLockBody(open);

  useEffect(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  useEffect(() => {
    if (open) {
      lastFocus.current = document.activeElement;
      const t = setTimeout(() => closeBtn.current?.focus(), 80);
      return () => clearTimeout(t);
    } else if (lastFocus.current) {
      lastFocus.current.focus?.();
      lastFocus.current = null;
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && panel.current) {
        const f = [...panel.current.querySelectorAll("a[href], button:not([disabled]), input")];
        if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) {
          e.preventDefault();
          f[f.length - 1].focus();
        } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) {
          e.preventDefault();
          f[0].focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  return (
    <div className={"drawer" + (open ? " is-open" : "")} aria-hidden={!open}>
      <div className="drawer-scrim" onClick={() => setOpen(false)} />
      <aside className="drawer-panel" role="dialog" aria-modal="true" aria-labelledby="cart-title" ref={panel}>
        <div className="drawer-head">
          <h2 id="cart-title">
            Your cart <span className="drawer-count">{count}</span>
          </h2>
          <button type="button" className="icon-button" onClick={() => setOpen(false)} aria-label="Close cart" ref={closeBtn} tabIndex={open ? 0 : -1}>
            <Close />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="drawer-empty">
            <p className="drawer-empty-title">Your cart is empty.</p>
            <p>Add a product and it will show up here.</p>
            <Link to="/" section="shop" className="btn btn-primary" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              Shop the range
            </Link>
          </div>
        ) : (
          <>
            <ul className="drawer-items">
              {lines.map(({ product: p, qty }) => (
                <li className="line-item" key={p.id}>
                  <Link to={`/product/${p.id}`} className="line-thumb" tabIndex={open ? 0 : -1}>
                    <img src={p.thumb} alt="" style={{ height: `${62 + 30 * p.scale}%` }} />
                  </Link>
                  <div className="line-info">
                    <Link to={`/product/${p.id}`} className="line-name" tabIndex={open ? 0 : -1}>{p.name}</Link>
                    <p className="line-size">{p.size}</p>
                    <div className="line-controls">
                      <Stepper value={qty} max={p.stock} min={0} size="sm" onChange={(q) => setQty(p.id, q)} />
                      <button type="button" className="line-remove" onClick={() => setQty(p.id, 0)} tabIndex={open ? 0 : -1}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="line-price">{money(p.price * qty)}</p>
                </li>
              ))}
            </ul>
            <div className="drawer-foot">
              <div className="subtotal">
                <span>Subtotal</span>
                <strong>{money(subtotal)}</strong>
              </div>
              <p className="drawer-note">Delivery is calculated at checkout.</p>
              <button type="button" className="btn btn-primary btn-block" onClick={() => navigate("/checkout")} tabIndex={open ? 0 : -1}>
                Checkout
              </button>
              <button type="button" className="text-button" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
