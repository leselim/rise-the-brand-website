import { useEffect, useState } from "react";
import { Link } from "../lib/router.jsx";
import { money, provinces, settings, tradeRates, tradeTypes } from "../data/store.js";
import { Check } from "../components/Icons.jsx";
import { Band, Breadcrumb } from "../components/ui.jsx";

const LISTS = [tradeRates.reseller, tradeRates.distributor];

/* A courier or total cell: either one amount, or named options like Pudo and Doorstep */
function Amount({ value }) {
  if (!Array.isArray(value)) return <>{money(value)}</>;
  return (
    <span className="rate-options">
      {value.map((o) => (
        <span className="rate-option" key={o.label}>
          <span className="rate-option-label">{o.label}</span>
          <span>{money(o.amount)}</span>
        </span>
      ))}
    </span>
  );
}

function RateTable({ list }) {
  return (
    <div className="rate-block" id={list.id}>
      <div className="rate-head">
        <h2 className="rate-title">{list.title}</h2>
        <p className="rate-blurb">{list.blurb}</p>
      </div>

      <div className="rate-scroll">
        <table className="rate-table">
          <caption className="visually-hidden">
            {list.title}. Courier is charged per order, not per unit.
          </caption>
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Product</th>
              <th scope="col" className="num">Unit</th>
              <th scope="col" className="num">Full case</th>
              <th scope="col" className="num">Courier</th>
              <th scope="col" className="num">Total with courier</th>
            </tr>
          </thead>
          <tbody>
            {list.rows.map((r) => (
              <tr key={r.code}>
                <td data-label="Code" className="rate-code">{r.code}</td>
                <th scope="row" className="rate-product">
                  {r.product}
                  <small>{r.pack}</small>
                </th>
                <td data-label="Unit" className="num">{money(r.unit)}</td>
                <td data-label="Full case" className="num">{money(r.bulk)}</td>
                <td data-label="Courier" className="num"><Amount value={r.courier} /></td>
                <td data-label="Total with courier" className="num rate-total"><Amount value={r.total} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="rate-note">{list.note}</p>
    </div>
  );
}

const FIELDS = [
  { name: "name", label: "Full name", autoComplete: "name", required: true },
  { name: "business", label: "Business or trading name", autoComplete: "organization" },
  { name: "email", label: "Email address", type: "email", autoComplete: "email", required: true },
  { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel", required: true },
  { name: "city", label: "City or town", autoComplete: "address-level2", required: true },
  { name: "province", label: "Province", select: provinces, required: true },
  {
    name: "about",
    label: "Where will you be selling Rise?",
    textarea: true,
    wide: true,
    hint: "A shop, a salon, online, door to door, an area you already cover. A line or two is enough.",
  },
];

function SignUp() {
  const [form, setForm] = useState({ type: tradeTypes[0].value });
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
      document.getElementById(`tr-${Object.keys(e)[0]}`)?.focus();
      return;
    }
    const body = [
      "Hello Rise,",
      "",
      `I would like to apply as a ${form.type}.`,
      "",
      `Name: ${form.name}`,
      form.business ? `Business: ${form.business}` : "",
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Area: ${[form.city, form.province].filter(Boolean).join(", ")}`,
      form.about ? `Where I will sell: ${form.about}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const mail = `mailto:${settings.tradeEmail}?subject=${encodeURIComponent(
      `${form.type} application from ${form.name}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mail;
    setSent(mail);
  };

  if (sent) {
    return (
      <section className="section" id="apply" aria-labelledby="apply-title">
        <div className="wrap">
          <div className="done">
            <span className="done-icon"><Check /></span>
            <h2 className="page-title page-title-sm" id="apply-title">Your application is ready to send.</h2>
            <p className="lead">
              Your email app should have opened with your details filled in. Press send and we will come back to you within one working
              day. If nothing opened, email us at <a href={`mailto:${settings.tradeEmail}`}>{settings.tradeEmail}</a>.
            </p>
            <div className="done-actions">
              <a href={sent} className="btn btn-primary">Open the email again</a>
              <Link to="/" section="shop" className="btn btn-outline">Back to the range</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="apply" aria-labelledby="apply-title">
      <div className="wrap">
        <div className="trade-form">
          <div className="trade-form-intro">
            <h2 className="section-title" id="apply-title">Sell Rise yourself.</h2>
            <p className="prose section-sub">
              Tell us a little about your business and we will come back to you within one working day with stock
              availability, payment details and your first order.
            </p>
          </div>

          <form onSubmit={submit} noValidate>
            <fieldset className="trade-choice">
              <legend>I want to apply as</legend>
              <div className="trade-choice-grid">
                {tradeTypes.map((t) => (
                  <label
                    key={t.value}
                    className={"trade-card" + (form.type === t.value ? " is-on" : "")}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={t.value}
                      checked={form.type === t.value}
                      onChange={(e) => set("type", e.target.value)}
                    />
                    <span className="trade-card-name">{t.label}</span>
                    <span className="trade-card-detail">{t.detail}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="form-grid">
              {FIELDS.map((f) => {
                const id = `tr-${f.name}`;
                const common = {
                  id,
                  name: f.name,
                  value: form[f.name] || "",
                  onChange: (e) => set(f.name, e.target.value),
                  "aria-invalid": errors[f.name] ? true : undefined,
                  "aria-describedby": errors[f.name] ? `${id}-err` : f.hint ? `${id}-hint` : undefined,
                };
                return (
                  <div
                    className={"field" + (f.wide ? " field-wide" : "") + (errors[f.name] ? " has-error" : "")}
                    key={f.name}
                  >
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
                      <input type={f.type || "text"} autoComplete={f.autoComplete} {...common} />
                    )}
                    {f.hint && !errors[f.name] && (
                      <p className="field-hint" id={`${id}-hint`}>{f.hint}</p>
                    )}
                    {errors[f.name] && (
                      <p className="field-error" id={`${id}-err`}>{errors[f.name]}</p>
                    )}
                  </div>
                );
              })}
            </div>

            <button type="submit" className="btn btn-primary btn-lg">Send application</button>
            <p className="form-foot">
              We use your details to answer your application and nothing else. Prefer email? Write to{" "}
              <a href={`mailto:${settings.tradeEmail}`}>{settings.tradeEmail}</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Trade() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    document.title = "Trade rates | Rise The Brand";
  }, []);

  return (
    <>
      <div className="wrap">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Trade rates" }]} />
        <section className="page-intro">
          <h1 className="page-title">Trade rates</h1>
          <p className="lead">
            Rise is sold through distributors and resellers across South Africa. Both price lists are below. Prices are per
            case, in rand, and courier is charged once per order rather than per unit.
          </p>
        </section>
      </div>

      <section className="section no-rule" aria-labelledby="rates-title">
        <div className="wrap">
          <h2 className="visually-hidden" id="rates-title">Price lists</h2>

          <div className="segmented rate-switch" role="tablist" aria-label="Choose a price list">
            {LISTS.map((l, i) => (
              <button
                key={l.id}
                type="button"
                role="tab"
                id={`rate-tab-${l.id}`}
                aria-controls={`rate-panel-${l.id}`}
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  const n = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
                  if (!n) return;
                  e.preventDefault();
                  const next = (i + n + LISTS.length) % LISTS.length;
                  setActive(next);
                  document.getElementById(`rate-tab-${LISTS[next].id}`)?.focus();
                }}
              >
                {l.id === "reseller" ? "Reseller" : "Distributor"}
              </button>
            ))}
            <span
              className="segmented-thumb"
              style={{ transform: `translateX(${active * 100}%)` }}
              aria-hidden="true"
            />
          </div>

          {LISTS.map((l, i) => (
            <div
              key={l.id}
              role="tabpanel"
              id={`rate-panel-${l.id}`}
              aria-labelledby={`rate-tab-${l.id}`}
              hidden={i !== active}
              className="rate-panel"
            >
              <RateTable list={l} />
            </div>
          ))}
        </div>
      </section>

      <SignUp />

      <Band
        title="Not buying for a business?"
        text="Every product in the range is on the shop, ready to order one at a time."
        cta={<Link to="/" section="shop" className="btn btn-ghost-light">Shop the range</Link>}
      />
    </>
  );
}
