import About from "pages/About";
import Header from "pages/Header";
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
    </>
  );
}

export default App;
