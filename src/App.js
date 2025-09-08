import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SnowOverlay from "./components/SnowOverlay";
import Home from "./pages/Home";
import ONama from "./pages/ONama";
import Pitanja from "./pages/Pitanja";
import Galerija from "./pages/Galerija";
import Kontakt from "./pages/Kontakt";
import Trening from "./pages/Trening";
export default function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(SnowOverlay, {}), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/o-nama", element: _jsx(ONama, {}) }), _jsx(Route, { path: "/trening", element: _jsx(Trening, {}) }), _jsx(Route, { path: "/pitanja", element: _jsx(Pitanja, {}) }), _jsx(Route, { path: "/galerija", element: _jsx(Galerija, {}) }), _jsx(Route, { path: "/kontakt", element: _jsx(Kontakt, {}) })] }) }), _jsx(Footer, {}), _jsx(ScrollToTop, {})] }));
}
