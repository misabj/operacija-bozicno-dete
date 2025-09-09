import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return _jsxs("footer", {
    className: " border-t",
    children: [
      _jsxs("div", {
        className:
          "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8",
        children: [
          _jsxs("div", {
            children: [
              _jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  _jsx("img", {
                    src: "/occ/logo.png",
                    alt: "Logo",
                    className: "w-9 h-9 rounded-2xl shadow object-cover",
                  }),
                  _jsx("div", {
                    className: "font-black",
                    children: "Operacija Bo\u017Ei\u0107no Dete",
                  }),
                ],
              }),
              _jsx("p", {
                className: "mt-3 text-sm text-gray-600 max-w-sm",
                children:
                  "Humanitarna inicijativa za pakovanje poklon-kutija za decu tokom bo\u017Ei\u0107nih praznika.",
              }),
            ],
          }),
          _jsxs("div", {
            children: [
              _jsx("h4", {
                className: "font-semibold",
                children: "Brzi linkovi",
              }),
              _jsxs("ul", {
                className: "mt-3 space-y-2 text-sm text-gray-700",
                children: [
                  _jsx("li", {
                    children: _jsx(NavLink, {
                      to: "/trening",
                      className: "hover:underline",
                      children: "OCC Treninzi",
                    }),
                  }),
                  _jsx("li", {
                    children: _jsx(NavLink, {
                      to: "/kontakt",
                      className: "hover:underline",
                      children: "Kontakt",
                    }),
                  }),
                ],
              }),
            ],
          }),
          _jsxs("div", {
            children: [
              _jsx("h4", { className: "font-semibold", children: "Kontakt" }),
              _jsxs("div", {
                className: "mt-3 text-sm text-gray-700 flex items-center gap-2",
                children: [
                  _jsx(Mail, { className: "w-4 h-4" }),
                  _jsx("a", {
                    className: "underline",
                    href: "mailto:info@operacijabozicnodete.com",
                    children: "info@operacijabozicnodete.com",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      _jsxs("div", {
        className: "text-center text-xs text-gray-500 pb-6",
        children: [
          "\u00A9 ",
          new Date().getFullYear(),
          " Operacija Bo\u017Ei\u0107no Dete",
        ],
      }),
    ],
  });
}
