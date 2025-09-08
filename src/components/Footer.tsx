import {  Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/occ/logo.png" alt="Logo" className="w-9 h-9 rounded-2xl shadow object-cover" />
            <div className="font-black">Operacija Božićno Dete</div>
          </div>
          <p className="mt-3 text-sm text-gray-600 max-w-sm">
            Humanitarna inicijativa za pakovanje poklon-kutija za decu tokom božićnih praznika.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Brzi linkovi</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><NavLink to="/trening" className="hover:underline">OCC Treninzi</NavLink></li>
            <li><NavLink to="/volonteri" className="hover:underline">Volontiranje</NavLink></li>
            <li><NavLink to="/kontakt" className="hover:underline">Kontakt</NavLink></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Kontakt</h4>
          <div className="mt-3 text-sm text-gray-700 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a className="underline" href="mailto:info@operacijabozicnodete.com">info@operacijabozicnodete.com</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} Operacija Božićno Dete
      </div>
    </footer>
  );
}
