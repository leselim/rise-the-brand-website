import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "../lib/router.jsx";
import { useCart } from "../lib/cart.jsx";
import { Check, ChevronRight, Minus, Plus, Mark } from "./Icons.jsx";
import { photoVersion } from "../data/store.js";

export function Logo({ className = "" }) {
  return <img className={"logo " + className} src="brand/rise-logo.svg" alt="Rise, elevate your clean" width="146" height="46" />;
}

export function Stepper({ value, min = 1, max = 99, onChange, size = "md", label = "Quantity" }) {
  return (
    <div className={"stepper stepper-" + size} role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(value - 1)} disabled={value <= min} aria-label="Decrease quantity">
        <Minus />
      </button>
      <output aria-live="polite">{value}</output>
      <button type="button" onClick={() => onChange(value + 1)} disabled={value >= max} aria-label="Increase quantity">
        <Plus />
      </button>
    </div>
  );
}

// A product photo standing on a soft floor shadow
export function Bottle({ product, className = "", eager = false, style, sizes = "(max-width: 900px) 32vw, 18vw" }) {
  const v = photoVersion ? `?v=${photoVersion}` : "";
  const imgSrc = product.image ? `${product.image}${v}` : undefined;
  const imgSet = product.imageSet ? product.imageSet.replace(/\.webp/g, `.webp${v}`) : undefined;
  return (
    <div className={"bottle " + className} style={{ "--scale": product.scale, ...style }}>
      <img
        src={imgSrc}
        srcSet={imgSet}
        sizes={sizes}
        alt={`${product.name}, ${product.size}`}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        draggable="false"
      />
      <span className="bottle-floor" aria-hidden="true" />
    </div>
  );
}

export function AddButton({ product, qty = 1, className = "btn btn-outline", label = "Add to cart", reveal = true }) {
  const { add } = useCart();
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setDone(false), 1600);
    return () => clearTimeout(t);
  }, [done]);
  return (
    <button
      type="button"
      className={className + (done ? " is-done" : "")}
      onClick={() => {
        add(product.id, qty, { reveal });
        setDone(true);
      }}
    >
      <span className="btn-swap">
        <span className="btn-label">{label}</span>
        <span className="btn-done" aria-hidden={!done}>
          <Check /> Added
        </span>
      </span>
    </button>
  );
}

export function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((it, i) =>
        it.to ? (
          <span key={i} className="crumb">
            <Link to={it.to} section={it.section}>{it.label}</Link>
            <ChevronRight />
          </span>
        ) : (
          <span key={i} aria-current="page">{it.label}</span>
        )
      )}
    </nav>
  );
}

// Tabs with an indicator that slides to the selected tab
export function Tabs({ tabs, label }) {
  const [active, setActive] = useState(0);
  const listRef = useRef(null);
  const [bar, setBar] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      const el = listRef.current?.children[active];
      if (el) setBar({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active, tabs.length]);

  const onKey = (e, i) => {
    const n = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!n) return;
    e.preventDefault();
    const next = (i + n + tabs.length) % tabs.length;
    setActive(next);
    listRef.current.children[next].focus();
  };

  return (
    <div className="tabs">
      <div className="tablist" role="tablist" aria-label={label} ref={listRef}>
        {tabs.map((t, i) => (
          <button
            key={t.label}
            type="button"
            role="tab"
            id={`tab-${i}`}
            aria-controls={`panel-${i}`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            className="tab"
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
          </button>
        ))}
        <span className="tab-bar" style={{ transform: `translateX(${bar.left}px)`, width: bar.width }} aria-hidden="true" />
      </div>
      <div className="tabpanel" role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`} key={active}>
        {tabs[active].body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={"acc-item" + (isOpen ? " is-open" : "")} key={it.q}>
            <h3>
              <button type="button" aria-expanded={isOpen} aria-controls={`acc-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                <span>{it.q}</span>
                <span className="acc-icon" aria-hidden="true"><Plus /></span>
              </button>
            </h3>
            <div className="acc-panel" id={`acc-${i}`} role="region" aria-hidden={!isOpen}>
              <div><p>{it.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Marquee({ items }) {
  const row = (hidden) => (
    <div className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <span className="marquee-item" key={i}>
          {t}
          <Mark className="marquee-mark" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

export function Band({ title, text, cta }) {
  return (
    <section className="band">
      <div className="wrap band-inner">
        <Mark className="band-mark" />
        <h2 className="band-title">{title}</h2>
        <div className="band-side">
          <p>{text}</p>
          {cta}
        </div>
      </div>
    </section>
  );
}
