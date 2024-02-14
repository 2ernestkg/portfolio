import About from "pages/About";
import Header from "pages/Header";
import { useLocation } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useEffect } from "react";
import Home from "pages/Home";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
}

export default App;
