import { useEffect, useState } from "react";
import { Link } from "../lib/router.jsx";
import { useCart } from "../lib/cart.jsx";
import { useInView, usePassed } from "../lib/hooks.js";
import { products, findProduct, money, returnPolicy, settings } from "../data/store.js";
import { Arrow, Bookmark, Stars, Tag } from "../components/Icons.jsx";
import { AddButton, Band, Breadcrumb, Bottle, Stepper, Tabs } from "../components/ui.jsx";
import NotFound from "./NotFound.jsx";

function ZoomImage({ product }) {
  const [zoom, setZoom] = useState(null);
  const onMove = (e) => {
    if (e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };
  return (
    <div
      className={"pd-tile" + (zoom ? " is-zoomed" : "")}
      onPointerMove={onMove}
      onPointerLeave={() => setZoom(null)}
      style={zoom ? { "--zx": `${zoom.x}%`, "--zy": `${zoom.y}%` } : undefined}
    >
      <div className="pd-zoom">
        <Bottle product={product} eager sizes="(max-width: 900px) 48vw, 40vw" />
      </div>
      <span className="pd-zoom-hint" aria-hidden="true">Hover to zoom</span>
    </div>
  );
}

export default function Product({ id }) {
  const p = findProduct(id);
  const { add, favourites, toggleFavourite } = useCart();
  const [qty, setQty] = useState(1);
  const [buyRef, buyPassed] = usePassed();
  const [footRef, footInView] = useInView({ threshold: 0 });

  useEffect(() => {
    setQty(1);
    if (p) {
      document.title = `${p.name} | Rise The Brand`;
      document.querySelector('meta[name="description"]')?.setAttribute("content", p.summary);
    }
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!p) return <NotFound title="We could not find that product." />;

  const isFav = favourites.includes(p.id);
  const others = products.filter((x) => x.id !== p.id).slice(0, 2);
  const tabs = [
    { label: "How to use", body: p.howToUse },
    { label: "Benefit", body: p.benefit },
    { label: "Ingredients", body: p.ingredients },
    { label: "Return Policy", body: returnPolicy },
  ];

  return (
    <>
      <div className="wrap">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Shop", to: "/", section: "shop" }, { label: p.name }]} />

        <div className="product" key={p.id}>
          <div className="pd-media">
            <div className="frame">
              <ZoomImage product={p} />
            </div>
          </div>

          <div className="pd">
            <div className="pd-head">
              <h1 className="pd-title">{p.name}</h1>
              {p.badge && <span className="badge">{p.badge}</span>}
            </div>
            <div className="meta">
              <span>{p.category}</span>
              <span>Size: {p.size}</span>
              {p.rating != null && <Stars rating={p.rating} />}
            </div>

            <div className="pd-price">
              <span className="price-lg">{money(p.price)}</span>
              {settings.installments > 0 && (
                <span className="price-note">
                  Or {settings.installments} easy payments of {money(Math.round((p.price / settings.installments) * 100) / 100)}
                </span>
              )}
            </div>

            {p.purchased ? (
              <p className="chip">
                <Tag /> {p.purchased} people have purchased this product
              </p>
            ) : null}

            <p className="pd-label">Amount &amp; Method</p>
            <div className="qty-row">
              <Stepper value={qty} max={p.stock} onChange={(q) => setQty(Math.max(1, Math.min(p.stock, q)))} />
              <span className="stock">Current stock: {p.stock}</span>
            </div>

            <label className="option">
              <span className="option-label">
                <input type="radio" name="purchase" defaultChecked /> One time purchase
              </span>
              <span className="option-price">{money(p.price * qty)}</span>
            </label>

            <div className="pd-actions" ref={buyRef}>
              <button type="button" className="btn btn-primary btn-block btn-lg" onClick={() => add(p.id, qty)}>
                Add to cart
              </button>
              <button
                type="button"
                className={"btn btn-outline btn-block btn-lg fav" + (isFav ? " is-on" : "")}
                aria-pressed={isFav}
                onClick={() => toggleFavourite(p.id)}
              >
                {isFav ? "Saved to favourites" : "Favourite"} <Bookmark filled={isFav} />
              </button>
            </div>

            <Tabs tabs={tabs} label="Product information" key={p.id} />
          </div>
        </div>
      </div>

      {others.length > 0 && (
        <section className="section" aria-labelledby="related-title">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title" id="related-title">You might also like</h2>
            </div>
            {others.map((o) => (
              <article className="feature" key={o.id}>
                <Link to={`/product/${o.id}`} className="feature-media" tabIndex={-1} aria-hidden="true">
                  <Bottle product={o} />
                </Link>
                <div className="feature-body">
                  {o.badge && <span className="badge">{o.badge}</span>}
                  <h3 className="feature-name">
                    <Link to={`/product/${o.id}`}>{o.name}</Link>
                  </h3>
                  <div className="meta">
                    <span>{o.category}</span>
                    <span>Size: {o.size}</span>
                  </div>
                  <p className="feature-price">{money(o.price)}</p>
                  <Stars rating={o.rating} />
                  <p className="feature-text">{o.summary}</p>
                  <div className="feature-actions">
                    <Link to={`/product/${o.id}`} className="btn btn-outline">View product</Link>
                    <AddButton product={o} className="btn btn-primary" />
                  </div>
                </div>
              </article>
            ))}
            <div className="center-row">
              <Link to="/" section="shop" className="btn btn-outline">
                View the range <Arrow />
              </Link>
            </div>
          </div>
        </section>
      )}

      <div ref={footRef}>
        <Band
          title="Proudly South African, made for everyday homes."
          text="Hardworking cleaning products for busy kitchens, family bathrooms and every pair of shoes in between."
          cta={<Link to="/about" className="btn btn-ghost-light">Read our story</Link>}
        />
      </div>

      <div className={"buy-bar" + (buyPassed && !footInView ? " is-visible" : "")} aria-hidden={!buyPassed || footInView}>
        <div className="buy-bar-info">
          <span className="buy-bar-name">{p.name}</span>
          <span className="buy-bar-price">{money(p.price * qty)}</span>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => add(p.id, qty)} tabIndex={buyPassed && !footInView ? 0 : -1}>
          Add to cart
        </button>
      </div>
    </>
  );
}
