import About from "pages/About";
import Header from "pages/Header";
import Service from "pages/Service";
import Portfolio from "pages/Portfolio";
import Contact from "pages/Contact";
import { useLocation } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useEffect } from "react";

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
      <About />
      <Service />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
