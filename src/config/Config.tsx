import React, { lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreLoader from "components/preLoader/PreLoader";
const Home = lazy(() => import("../pages/Home"));

const Config = () => {
  React.useEffect(() => {
    AOS.init({
      // duration: 1000,
      // easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <Router>
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Config;
