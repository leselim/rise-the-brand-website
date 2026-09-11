import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { findProduct } from "../data/store.js";

const CartContext = createContext(null);

const read = (key, fallback) => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};
const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage can be blocked; the cart still works for this visit */
  }
};

function clean(items) {
  const out = {};
  Object.entries(items || {}).forEach(([id, q]) => {
    const p = findProduct(id);
    if (p && q > 0) out[id] = Math.min(q, p.stock);
  });
  return out;
}

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      const p = findProduct(action.id);
      const q = Math.min((state[action.id] || 0) + action.qty, p.stock);
      return { ...state, [action.id]: q };
    }
    case "set": {
      const next = { ...state };
      if (action.qty <= 0) delete next[action.id];
      else next[action.id] = Math.min(action.qty, findProduct(action.id).stock);
      return next;
    }
    case "clear":
      return {};
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, () => clean(read("rise-cart", {})));
  const [favourites, setFavourites] = useState(() => read("rise-favourites", []));
  const [open, setOpen] = useState(false);
  const [bump, setBump] = useState(0);

  useEffect(() => write("rise-cart", items), [items]);
  useEffect(() => write("rise-favourites", favourites), [favourites]);

  const add = useCallback((id, qty = 1, { reveal = true } = {}) => {
    dispatch({ type: "add", id, qty });
    setBump((b) => b + 1);
    if (reveal) setOpen(true);
  }, []);
  const setQty = useCallback((id, qty) => dispatch({ type: "set", id, qty }), []);
  const clear = useCallback(() => dispatch({ type: "clear" }), []);
  const toggleFavourite = useCallback(
    (id) => setFavourites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id])),
    []
  );

  const value = useMemo(() => {
    const lines = Object.entries(items).map(([id, qty]) => ({ product: findProduct(id), qty }));
    return {
      items,
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: lines.reduce((n, l) => n + l.qty * l.product.price, 0),
      add,
      setQty,
      clear,
      open,
      setOpen,
      bump,
      favourites,
      toggleFavourite,
    };
  }, [items, add, setQty, clear, open, bump, favourites, toggleFavourite]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
