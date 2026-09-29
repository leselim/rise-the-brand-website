import { createContext, useContext, useEffect, useState } from "react";

const RouteContext = createContext({ path: "/", section: null });

function parse() {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const [path, section] = raw.split("?section=");
  return { path: path || "/", section: section || null, key: Date.now() + Math.random() };
}

export function RouterProvider({ children }) {
  const [route, setRoute] = useState(parse);

  useEffect(() => {
    const onChange = () => setRoute(parse());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  // Scroll to the top on a new page, or to a section when one is named
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (route.section) {
      requestAnimationFrame(() => {
        const el = document.getElementById(route.section);
        if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [route.key]);

  return <RouteContext.Provider value={route}>{children}</RouteContext.Provider>;
}

export const useRoute = () => useContext(RouteContext);

export const href = (path, section) => "#" + path + (section ? "?section=" + section : "");

export function navigate(path, section) {
  const next = href(path, section);
  if (window.location.hash === next) {
    // Same link clicked again: still honour the scroll
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  } else {
    window.location.hash = next;
  }
}

export function Link({ to, section, children, onClick, ...rest }) {
  return (
    <a
      href={href(to, section)}
      onClick={(e) => {
        onClick && onClick(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        navigate(to, section);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

export function matchProduct(path) {
  const m = path.match(/^\/product\/([^/]+)$/);
  return m ? decodeURIComponent(m[1]) : null;
}
