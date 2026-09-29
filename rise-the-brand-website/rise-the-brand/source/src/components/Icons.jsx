const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };

export const ARROWS_PATH = "M95.19 243.31 L94.19 244.31 L93.31 245.81 L92.81 247.94 L92.81 250.06 L93.06 251.69 L93.56 252.81 L94.19 253.69 L95.31 254.69 L96.69 255.31 L98.06 255.69 L119.44 256.06 L120.31 256.56 L120.56 257.19 L120.19 260.69 L119.94 266.81 L119.31 272.31 L119.06 278.31 L118.94 278.44 L119.19 280.31 L119.94 281.56 L120.81 282.44 L121.81 283.06 L123.31 283.56 L125.31 283.94 L126.81 283.94 L128.06 283.69 L130.06 282.69 L131.31 281.19 L131.81 280.06 L131.94 279.06 L132.06 273.31 L132.19 273.19 L132.19 271.31 L132.31 271.19 L132.69 263.81 L132.81 263.69 L132.81 261.31 L132.94 261.19 L133.06 255.19 L133.19 255.06 L133.19 253.19 L133.31 253.06 L133.31 251.31 L133.44 251.19 L133.69 245.81 L133.81 245.69 L133.69 244.44 L133.06 244.06 L131.44 244.06 L131.31 243.94 L128.44 243.94 L128.31 243.81 L126.19 243.81 L126.06 243.69 L124.06 243.69 L123.94 243.56 L117.81 243.31 L117.69 243.19 L108.19 242.94 L108.06 242.81 L103.81 242.69 L103.69 242.56 L99.94 242.44 L99.81 242.31 L97.19 242.44Z M116.06 224.06 L114.94 225.44 L114.19 227.06 L113.94 228.44 L113.94 230.69 L114.19 232.19 L114.81 233.44 L116.19 234.94 L117.06 235.56 L118.19 235.94 L123.19 235.94 L123.31 236.06 L127.31 236.06 L127.44 236.19 L130.69 236.19 L130.81 236.31 L133.56 236.31 L133.69 236.44 L136.31 236.44 L136.44 236.56 L139.56 236.56 L141.06 236.81 L141.69 237.44 L141.69 238.81 L141.06 244.94 L140.94 249.06 L140.06 257.94 L140.19 260.56 L140.81 261.69 L141.94 262.94 L143.06 263.69 L143.94 263.94 L146.94 264.31 L149.94 263.69 L151.31 262.81 L152.56 261.31 L152.94 260.19 L153.19 254.06 L153.31 253.94 L153.69 246.69 L153.81 246.56 L154.06 238.06 L154.19 237.94 L154.19 236.06 L154.31 235.94 L154.69 228.69 L154.81 228.56 L154.81 226.19 L154.94 226.06 L154.69 224.94 L154.31 224.56 L153.81 224.44 L139.44 223.94 L139.31 223.81 L135.06 223.69 L134.94 223.56 L131.19 223.44 L131.06 223.31 L122.06 223.06 L121.94 222.94 L117.81 223.06 L117.06 223.31Z";

// The two rising arrows from the Rise logo
export function Mark({ className, title }) {
  return (
    <svg className={className} viewBox="92 222 64 63" aria-hidden={title ? undefined : true} role={title ? "img" : undefined}>
      {title && <title>{title}</title>}
      <path d={ARROWS_PATH} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

export const Minus = (p) => (<svg viewBox="0 0 16 16" className="icon" aria-hidden="true" {...p}><path d="M3.5 8h9" {...S} /></svg>);
export const Plus = (p) => (<svg viewBox="0 0 16 16" className="icon" aria-hidden="true" {...p}><path d="M3.5 8h9M8 3.5v9" {...S} /></svg>);
export const Close = (p) => (<svg viewBox="0 0 18 18" className="icon" aria-hidden="true" {...p}><path d="M4 4l10 10M14 4 4 14" {...S} /></svg>);
export const Check = (p) => (<svg viewBox="0 0 16 16" className="icon" aria-hidden="true" {...p}><path d="m3 8.5 3 3 7-7" {...S} /></svg>);
export const ChevronRight = (p) => (<svg viewBox="0 0 12 12" className="icon" aria-hidden="true" {...p}><path d="m4.5 2.5 3.5 3.5-3.5 3.5" {...S} /></svg>);
export const ChevronDown = (p) => (<svg viewBox="0 0 12 12" className="icon" aria-hidden="true" {...p}><path d="m2.5 4.5 3.5 3.5 3.5-3.5" {...S} /></svg>);
export const Arrow = (p) => (<svg viewBox="0 0 26 12" className="icon icon-arrow" aria-hidden="true" {...p}><path d="M1 6h23M19 1.5 24 6l-5 4.5" {...S} /></svg>);
export const ArrowUpRight = (p) => (<svg viewBox="0 0 16 16" className="icon" aria-hidden="true" {...p}><path d="M4.5 11.5l7-7M5.5 4.5h6v6" {...S} /></svg>);
export const Tag = (p) => (<svg viewBox="0 0 16 16" className="icon" aria-hidden="true" {...p}><path d="M8.6 1.8H14v5.4l-6.9 6.9a1 1 0 0 1-1.4 0L1.9 10.3a1 1 0 0 1 0-1.4z" {...S} /><circle cx="11.2" cy="4.8" r="1" {...S} /></svg>);
export const Bookmark = ({ filled, ...p }) => (<svg viewBox="0 0 16 16" className="icon" aria-hidden="true" {...p}><path d="M3.5 1.8h9v12.4L8 11l-4.5 3.2z" {...S} fill={filled ? "currentColor" : "none"} /></svg>);
export const Bag = (p) => (<svg viewBox="0 0 18 18" className="icon" aria-hidden="true" {...p}><path d="M3.2 6h11.6l-.9 9.2a1 1 0 0 1-1 .8H5.1a1 1 0 0 1-1-.8z" {...S} /><path d="M6.2 6V4.8a2.8 2.8 0 0 1 5.6 0V6" {...S} /></svg>);
export const Instagram = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><rect x="2.5" y="2.5" width="15" height="15" rx="4.2" {...S} /><circle cx="10" cy="10" r="3.4" {...S} /><circle cx="14.5" cy="5.6" r=".7" fill="currentColor" /></svg>);
export const Facebook = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><rect x="2.5" y="2.5" width="15" height="15" rx="3" {...S} /><path d="M12.9 6.6h-1.3c-1 0-1.6.6-1.6 1.6v9.3M8.2 10.6h4.5" {...S} /></svg>);
export const TikTok = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><path d="M11.6 2.5v10.1a3 3 0 1 1-3-3" {...S} /><path d="M11.6 2.5c.3 2.2 1.9 3.9 4.2 4.1" {...S} /></svg>);

const STAR = "12 2.6 14.8 8.5 21.3 9.2 16.4 13.6 17.8 20 12 16.8 6.2 20 7.6 13.6 2.7 9.2 9.2 8.5";
const HALF = "12 2.6 12 16.8 6.2 20 7.6 13.6 2.7 9.2 9.2 8.5";

export function Stars({ rating, className = "" }) {
  if (rating == null) return null;
  return (
    <span className={"rating " + className}>
      <span className="stars" role="img" aria-label={`Rated ${rating} out of 5`}>
        {[0, 1, 2, 3, 4].map((i) => {
          const d = rating - i;
          const kind = d >= 0.75 ? "full" : d >= 0.25 ? "half" : "empty";
          return (
            <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
              <polygon points={STAR} fill={kind === "full" ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              {kind === "half" && <polygon points={HALF} fill="currentColor" />}
            </svg>
          );
        })}
      </span>
      <span className="rating-value" aria-hidden="true">{rating}</span>
    </span>
  );
}
