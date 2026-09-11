import { useEffect } from "react";
import { RouterProvider, useRoute, matchProduct } from "./lib/router.jsx";
import { CartProvider } from "./lib/cart.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import { About, Help, Login, Checkout, NotFoundPage } from "./pages/Pages.jsx";

function Screen() {
  const { path } = useRoute();
  const productId = matchProduct(path);

  useEffect(() => {
    if (path === "/") document.title = "Rise The Brand | Elevate your clean";
  }, [path]);

  let page;
  if (path === "/") page = <Home />;
  else if (productId) page = <Product id={productId} />;
  else if (path === "/about") page = <About />;
  else if (path === "/help") page = <Help />;
  else if (path === "/login") page = <Login />;
  else if (path === "/checkout") page = <Checkout />;
  else page = <NotFoundPage />;

  return (
    <main id="main" className="page" key={path} tabIndex={-1}>
      {page}
    </main>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <CartProvider>
        <a className="skip-link" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById("main")?.focus(); }}>
          Skip to content
        </a>
        <Header />
        <Screen />
        <Footer />
        <CartDrawer />
      </CartProvider>
    </RouterProvider>
  );
}
