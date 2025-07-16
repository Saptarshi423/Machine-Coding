import { useState, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet, NavLink } from "react-router-dom";
//import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";

const Home = lazy(()=>import("./pages/Home"))

function App() {
  console.log(import('./pages/About'));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Info />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Wrapper = () => {
  return (
    <>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/info">Info</NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default App;
