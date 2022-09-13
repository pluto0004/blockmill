import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { LoadingSpinner } from "components/Spinner";

import "./index.css";

const Home = lazy(() => import("pages/Home"));
const ABOUT = lazy(() => import("pages/About"));
const VIEW = lazy(() => import("pages/View"));
const DONATE = lazy(() => import("pages/Donate"));
const NotFound = lazy(() => import("pages/NotFound"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<ABOUT />} />
        <Route path={ROUTES.VIEW} element={<VIEW />} />
        <Route path={ROUTES.DONATE} element={<DONATE />} />
        <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

export default App;
