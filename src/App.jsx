// App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

// compute a safe basename from Vite's BASE_URL
// import.meta.env.BASE_URL is provided by Vite at build time.
// e.g. '/showcase/' -> '/showcase'
const rawBase = import.meta.env.BASE_URL || "/";
const basename = rawBase.replace(/\/$/, "") || "/";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
