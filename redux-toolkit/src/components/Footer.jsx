import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center bg-slate-900 text-base-content p-4">
      <aside>
        <p className="text-white ">
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
