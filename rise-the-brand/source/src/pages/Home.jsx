import { useEffect, useRef, useState } from "react";
import { Link } from "../lib/router.jsx";
import { useReducedMotion, useScrollProgress } from "../lib/hooks.js";
import { products, money } from "../data/store.js";
import { ArrowUpRight, ARROWS_PATH, Stars } from "../components/Icons.jsx";
import { AddButton, Bottle, Marquee } from "../components/ui.jsx";

const SLIDE_MS = 6500;

function StagePattern() {
  return (
    <svg className="stage-pattern" aria-hidden="true">
      <defs>
        <pattern id="rise-arrows" width="84" height="84" patternUnits="userSpaceOnUse">
          <g transform="translate(24 24) scale(0.56) translate(-92 -222)">
            <path d={ARROWS_PATH} fill="currentColor" fillRule="evenodd" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#rise-arrows)" />
    </svg>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null);
  const [auto, setAuto] = useState(true);
  const visual = useRef(null);
  const p = products[index];

  const go = (i) => {
    if (i === index) return;
    setPrev(index);
    setIndex(i);
  };

  useEffect(() => {
    if (!auto || reduce) return;
    const t = setTimeout(() => go((index + 1) % products.length), SLIDE_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, auto, reduce]);

  const onMove = (e) => {
    if (reduce || e.pointerType === "touch" || !visual.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    visual.current.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    visual.current.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };
  const onLeave = () => {
    visual.current?.style.setProperty("--mx", 0);
    visual.current?.style.setProperty("--my", 0);
  };

  return (
    <section className="hero">
      <div className="wrap">
        <div className="stage" onPointerMove={onMove} onPointerLeave={onLeave}>
          <StagePattern />

          <div className="stage-copy">
            <h1 className="stage-title">
              <span className="line"><span>Elevate</span></span>
              <span className="line"><span>your</span></span>
              <span className="line"><span>clean.</span></span>
            </h1>
            <p className="stage-text">
              Hardworking cleaning products for South African homes. Surfaces, floors, dishes and the shoes at the door.
            </p>
            <div className="stage-actions">
              <Link to="/" section="shop" className="btn btn-primary">Shop the range</Link>
              <Link to="/about" className="btn btn-ghost-light">Our story</Link>
            </div>

            <div
              className={"selector" + (products.length > 2 ? " selector-compact" : "")}
              role="tablist"
              aria-label="Featured product"
              style={{ "--sel-count": products.length }}
            >
              {products.map((q, i) => (
                <button
                  key={q.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  className={"selector-item" + (i === index ? " is-active" : "")}
                  onClick={() => {
                    setAuto(false);
                    go(i);
                  }}
                >
                  <span className="selector-thumb">
                    <img src={q.thumb} alt="" style={{ height: `${60 + 30 * q.scale}%` }} />
                  </span>
                  <span className="selector-text">
                    <span className="selector-name">{q.shortName || q.name}</span>
                    <span className="selector-meta">{q.size}, {money(q.price)}</span>
                  </span>
                  <span className="selector-progress" aria-hidden="true">
                    <span
                      key={`${index}-${auto}`}
                      className={i === index ? (auto && !reduce ? "is-running" : "is-full") : ""}
                      style={{ animationDuration: `${SLIDE_MS}ms` }}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="stage-visual" ref={visual}>
            <div className="stage-ghost" aria-hidden="true">
              {products.map((q, i) => (
                <span key={q.id} className={i === index ? "is-active" : i === prev ? "is-leaving" : ""}>
                  {q.ghost}
                </span>
              ))}
            </div>
            <div className="stage-light" aria-hidden="true" />
            {products.map((q, i) => (
              <div
                key={q.id}
                className={"stage-bottle" + (i === index ? " is-active" : i === prev ? " is-leaving" : "")}
                aria-hidden={i !== index}
              >
                <Bottle product={q} eager />
              </div>
            ))}
            <Link to={`/product/${p.id}`} className="stage-link">
              <span>
                <span className="stage-link-label">{p.badge || p.category}</span>
                <span className="stage-link-name">View {p.name}</span>
              </span>
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ product: p }) {
  return (
    <article className="card">
      <Link to={`/product/${p.id}`} className="card-media" aria-label={`View ${p.name}`}>
        <span className="card-tag">{p.category}</span>
        {p.badge && <span className="badge">{p.badge}</span>}
        <Bottle product={p} />
      </Link>
      <div className="card-body">
        <div>
          <h3 className="card-name">
            <Link to={`/product/${p.id}`}>{p.name}</Link>
          </h3>
          <p className="card-summary">{p.summary}</p>
          <div className="card-meta">
            <span>{p.size}</span>
            <Stars rating={p.rating} />
          </div>
        </div>
        <div className="card-buy">
          <p className="card-price">{money(p.price)}</p>
          <AddButton product={p} className="btn btn-dark btn-sm" />
        </div>
      </div>
    </article>
  );
}

function Range() {
  return (
    <section className="section" id="shop" aria-labelledby="shop-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title" id="shop-title">Shop the range</h2>
          <p className="section-aside">
            Four essentials for the whole house. Shops and distributors can order the wider range at{" "}
            <Link to="/trade" className="text-link">trade rates</Link>.
          </p>
        </div>
        <div className="cards">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const [active, setActive] = useState(0);
  const p = products[active];
  return (
    <section className="section how" aria-labelledby="how-title">
      <div className="wrap how-grid">
        <div className="how-media">
          <div className="how-tile">
            {products.map((q, i) => (
              <div key={q.id} className={"how-bottle" + (i === active ? " is-active" : "")} aria-hidden={i !== active}>
                <Bottle product={q} />
              </div>
            ))}
          </div>
        </div>
        <div className="how-copy">
          <h2 className="section-title" id="how-title">Three steps to a better clean.</h2>
          <div
            className="segmented segmented-many"
            role="tablist"
            aria-label="Choose a product"
            style={{ "--seg-count": products.length }}
          >
            {products.map((q, i) => (
              <button key={q.id} type="button" role="tab" aria-selected={i === active} onClick={() => setActive(i)}>
                {q.shortName || q.name}
              </button>
            ))}
            <span className="segmented-thumb" style={{ transform: `translateX(${active * 100}%)` }} aria-hidden="true" />
          </div>
          <ol className="steps" key={p.id}>
            {p.steps.map((s, i) => (
              <li key={s.title} style={{ "--i": i }}>
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="how-actions">
            <Link to={`/product/${p.id}`} className="btn btn-outline">View {p.name}</Link>
            <AddButton product={p} className="btn btn-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

const STATEMENT =
  "Rise is a proudly South African brand. We make cleaning products for homes that are lived in, and we keep the range tight so every bottle earns its place.";

function AboutTeaser() {
  const [ref, progress] = useScrollProgress();
  const words = STATEMENT.split(" ");
  const lit = progress * words.length * 1.15;
  return (
    <section className="section about-teaser" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <h2 className="visually-hidden" id="about-title">About Rise</h2>
        <p className="statement" ref={ref}>
          {words.map((w, i) => (
            <span key={i} style={{ opacity: Math.max(0.18, Math.min(1, lit - i)) }}>
              {w}{" "}
            </span>
          ))}
        </p>
        <div className="values">
          <div className="value">
            <h3>Proudly local</h3>
            <p>Made with South African homes and routines in mind.</p>
          </div>
          <div className="value">
            <h3>Fewer, better</h3>
            <p>We would rather make four products you trust than twenty you forget.</p>
          </div>
          <div className="value">
            <h3>Simple to use</h3>
            <p>Clear directions on every bottle, so you always get the best clean.</p>
          </div>
        </div>
        <Link to="/about" className="text-link">Read our story</Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={["Multi Purpose Cleaner", "Pine Gel", "Dishwashing Liquid", "Footwear Cleaner", "Proudly South African", "elevate your clean"]} />
      <Range />
      <HowItWorks />
      <AboutTeaser />
    </>
  );
}
