import { useEffect, useState } from "react";
import { Link, useRoute } from "../lib/router.jsx";
import { useCart } from "../lib/cart.jsx";
import { products, comingSoon, money, provinces, returnPolicy, settings } from "../data/store.js";
import { Check } from "../components/Icons.jsx";
import { Accordion, Band, Bottle, Breadcrumb } from "../components/ui.jsx";

const useTitle = (t) =>
  useEffect(() => {
    document.title = t;
  }, [t]);

/* About */
export function About() {
  useTitle("About us | Rise The Brand");
  return (
    <>
      <div className="wrap">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "About us" }]} />
        <section className="page-intro">
          <h1 className="page-title">Cleaning that lifts the whole home.</h1>
          <p className="lead">
            Rise The Brand is a South African company making cleaning products for everyday homes. Our line says it simply: elevate your clean. Better results, fewer bottles and less time spent scrubbing.
          </p>
        </section>

        <div className="about-stage">
          <div className="about-stage-inner">
            {products.map((p) => (
              <Bottle key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      <section className="section no-rule" aria-labelledby="story-title">
        <div className="wrap split">
          <h2 className="section-title" id="story-title">Why we started small.</h2>
          <div className="prose">
            <p>A cleaning cupboard fills up fast. A spray for this, a liquid for that, and a few half used bottles nobody remembers buying. We wanted to change that.</p>
            <p>So the range stays tight. A Multi Purpose Cleaner for surfaces all around the house, a Pine Gel for floors, a Dishwashing Liquid for the sink, and a Footwear Cleaner that brings tired sneakers back to life. Four products that cover most of what a household actually cleans.</p>
            <p>When a new product joins the range, it will be because it genuinely makes cleaning at home easier.</p>
          </div>
        </div>
      </section>

      <section className="section" id="believe" aria-labelledby="believe-title">
        <div className="wrap">
          <div className="section-head">
            <h2 className="section-title" id="believe-title">What we believe</h2>
          </div>
          <div className="values values-flush">
            <div className="value">
              <h3>Proudly local</h3>
              <p>We are a South African brand, building products around the way South Africans actually live and clean.</p>
            </div>
            <div className="value">
              <h3>Honest value</h3>
              <p>Good cleaning should not be a luxury. We price our products so they earn a permanent spot in your home.</p>
            </div>
            <div className="value">
              <h3>Clear and simple</h3>
              <p>No confusing claims. Straightforward directions and products that do what the label says.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="coming" aria-labelledby="coming-title">
        <div className="wrap split">
          <div>
            <h2 className="section-title" id="coming-title">Coming to the range</h2>
            <p className="prose section-sub">A few more essentials are in the works.</p>
          </div>
          <ul className="coming">
            {comingSoon.map((name) => (
              <li key={name}>
                <span className="coming-name">{name}</span>
                <span className="coming-status">Coming soon</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Band
        title="Four essentials, made properly."
        text="Everything a household cleans most, without a cupboard full of bottles."
        cta={<Link to="/" section="shop" className="btn btn-ghost-light">Shop the range</Link>}
      />
    </>
  );
}

/* Help */
const FAQ = [
  { q: "Where do you deliver?", a: "We deliver to addresses across South Africa. Delivery costs are confirmed before you pay." },
  { q: "How long does delivery take?", a: "Most orders arrive within 3 to 5 working days in main centres, and within 5 to 7 working days in outlying areas." },
  { q: "Can I use the Footwear Cleaner on any shoe?", a: "It is made for sneakers and everyday shoes. On suede, nubuck or delicate materials, test a small hidden area first." },
  { q: "Are your products safe around children and pets?", a: "Use every product as directed on the label and store it out of reach of children and pets. Keep them away from surfaces until they are dry." },
  { q: "Can I order in bulk for my business?", a: "Yes. Our reseller and distributor rates are on the Trade rates page, along with the form to apply." },
  { q: "Do I need an account to order?", a: "No. Add products to your cart and check out. Your cart is saved on your device while you shop." },
  { q: "How do I become a distributor or reseller?", a: "Fill in the form on the Trade rates page. We come back to you within one working day with stock availability and payment details." },
];

const HELP_SECTIONS = [
  ["faq", "FAQ"],
  ["shipping", "Shipping"],
  ["returns", "Return Policy"],
  ["contact", "Contact"],
  ["privacy", "Privacy"],
  ["terms", "Terms"],
];

export function Help() {
  useTitle("Help Desk | Rise The Brand");
  const [current, setCurrent] = useState("faq");

  useEffect(() => {
    const els = HELP_SECTIONS.map(([id]) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setCurrent(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="wrap">
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Help Desk" }]} />
      <section className="page-intro">
        <h1 className="page-title">Help Desk</h1>
        <p className="lead">Answers to the questions we hear most. If yours is not here, get in touch and we will help.</p>
      </section>

      <div className="help">
        <nav className="help-nav" aria-label="Help topics">
          {HELP_SECTIONS.map(([id, label]) => (
            <Link key={id} to="/help" section={id} aria-current={current === id ? "true" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="help-body">
          <section className="help-section" id="faq">
            <h2>FAQ</h2>
            <Accordion items={FAQ} />
          </section>
          <section className="help-section prose" id="shipping">
            <h2>Shipping</h2>
            <p>Orders are packed and dispatched within 2 working days. You will receive an email when your order is on its way.</p>
            <p>Delivery fees depend on your location and the size of your order.</p>
          </section>
          <section className="help-section prose" id="returns">
            <h2>Return Policy</h2>
            {returnPolicy.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </section>
          <section className="help-section" id="contact">
            <h2>Contact</h2>
            <dl className="contact-list">
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${settings.orderEmail}`}>{settings.orderEmail}</a></dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>{settings.hours}</dd>
              </div>
              <div>
                <dt>Stockists and bulk orders</dt>
                <dd>See the <Link to="/trade">trade rates</Link>, or apply using the form on that page.</dd>
              </div>
            </dl>
          </section>
          <section className="help-section prose" id="privacy">
            <h2>Privacy</h2>
            <p>We only collect the details we need to process and deliver your order. We never sell your information, and we handle personal information in line with the Protection of Personal Information Act.</p>
          </section>
          <section className="help-section prose" id="terms">
            <h2>Terms</h2>
            <p>Prices are shown in South African rand and include VAT where applicable. Product availability and prices may change without notice. By placing an order, you agree to these terms and our return policy.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

/* Checkout */
const FIELDS = [
  { name: "name", label: "Full name", autoComplete: "name", required: true },
  { name: "email", label: "Email address", type: "email", autoComplete: "email", required: true },
  { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel", required: true },
  { name: "address", label: "Street address", autoComplete: "street-address", required: true, wide: true },
  { name: "suburb", label: "Suburb", autoComplete: "address-level3" },
  { name: "city", label: "City or town", autoComplete: "address-level2", required: true },
  { name: "province", label: "Province", select: provinces, required: true },
  { name: "postal", label: "Postal code", autoComplete: "postal-code", required: true, inputMode: "numeric" },
  { name: "notes", label: "Delivery notes", textarea: true, wide: true },
];

export function Checkout() {
  useTitle("Checkout | Rise The Brand");
  const { lines, subtotal, clear } = useCart();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    FIELDS.forEach((f) => {
      const v = (form[f.name] || "").trim();
      if (f.required && !v) e[f.name] = `Enter your ${f.label.toLowerCase()}.`;
    });
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter an email address like name@example.com.";
    if (form.phone && form.phone.replace(/\D/g, "").length < 9) e.phone = "Enter a phone number with at least 9 digits.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      document.getElementById(`co-${Object.keys(e)[0]}`)?.focus();
      return;
    }
    if (settings.checkoutUrl) {
      window.location.href = settings.checkoutUrl;
      return;
    }
    const body = [
      "Hello Rise,",
      "",
      "I would like to place this order:",
      "",
      ...lines.map((l) => `${l.qty} x ${l.product.name} (${l.product.size})   ${money(l.qty * l.product.price)}`),
      "",
      `Subtotal: ${money(subtotal)}`,
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Address: ${[form.address, form.suburb, form.city, form.province, form.postal].filter(Boolean).join(", ")}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ].join("\n");
    const mail = `mailto:${settings.orderEmail}?subject=${encodeURIComponent("New order from " + form.name)}&body=${encodeURIComponent(body)}`;
    window.location.href = mail;
    setSent(mail);
    clear();
  };

  if (sent) {
    return (
      <div className="wrap">
        <section className="done">
          <span className="done-icon"><Check /></span>
          <h1 className="page-title">Your order is ready to send.</h1>
          <p className="lead">
            Your email app should have opened with the order filled in. Press send and we will contact you to confirm delivery and payment. If nothing opened, email us at <a href={`mailto:${settings.orderEmail}`}>{settings.orderEmail}</a>.
          </p>
          <div className="done-actions">
            <a href={sent} className="btn btn-primary">Open the email again</a>
            <Link to="/" className="btn btn-outline">Back to home</Link>
          </div>
        </section>
      </div>
    );
  }

  if (!lines.length) {
    return (
      <div className="wrap">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Checkout" }]} />
        <section className="done">
          <h1 className="page-title">Your cart is empty.</h1>
          <p className="lead">Add a product to your cart and you can check out here.</p>
          <Link to="/" section="shop" className="btn btn-primary">Shop the range</Link>
        </section>
      </div>
    );
  }

  return (
    <div className="wrap">
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Checkout" }]} />
      <div className="checkout">
        <form className="checkout-form" onSubmit={submit} noValidate>
          <h1 className="page-title page-title-sm">Checkout</h1>
          <p className="lead">Enter your delivery details. We will confirm your order and payment by email.</p>
          <div className="form-grid">
            {FIELDS.map((f) => {
              const id = `co-${f.name}`;
              const common = {
                id,
                name: f.name,
                value: form[f.name] || "",
                onChange: (e) => set(f.name, e.target.value),
                "aria-invalid": errors[f.name] ? true : undefined,
                "aria-describedby": errors[f.name] ? `${id}-err` : undefined,
              };
              return (
                <div className={"field" + (f.wide ? " field-wide" : "") + (errors[f.name] ? " has-error" : "")} key={f.name}>
                  <label htmlFor={id}>
                    {f.label}
                    {!f.required && <span className="optional"> (optional)</span>}
                  </label>
                  {f.select ? (
                    <select {...common}>
                      <option value="">Choose a province</option>
                      {f.select.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  ) : f.textarea ? (
                    <textarea rows={3} {...common} />
                  ) : (
                    <input type={f.type || "text"} autoComplete={f.autoComplete} inputMode={f.inputMode} {...common} />
                  )}
                  {errors[f.name] && <p className="field-error" id={`${id}-err`}>{errors[f.name]}</p>}
                </div>
              );
            })}
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Send order</button>
        </form>

        <aside className="summary" aria-labelledby="summary-title">
          <h2 id="summary-title">Order summary</h2>
          <ul>
            {lines.map(({ product: p, qty }) => (
              <li key={p.id}>
                <span className="summary-thumb">
                  <img src={p.thumb} alt="" style={{ height: `${62 + 30 * p.scale}%` }} />
                  <span className="summary-qty">{qty}</span>
                </span>
                <span className="summary-name">
                  {p.name}
                  <small>{p.size}</small>
                </span>
                <span className="summary-price">{money(p.price * qty)}</span>
              </li>
            ))}
          </ul>
          <div className="summary-row"><span>Subtotal</span><span>{money(subtotal)}</span></div>
          <div className="summary-row"><span>Delivery</span><span>Confirmed by email</span></div>
          <div className="summary-row summary-total"><span>Total before delivery</span><span>{money(subtotal)}</span></div>
        </aside>
      </div>
    </div>
  );
}

/* Not found */
export function NotFoundPage({ title = "We could not find that page." }) {
  const { path } = useRoute();
  useTitle("Not found | Rise The Brand");
  return (
    <div className="wrap">
      <section className="done" data-path={path}>
        <h1 className="page-title">{title}</h1>
        <p className="lead">The link may be incomplete or the page may have moved. Everything we sell is on the home page.</p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </section>
    </div>
  );
}
