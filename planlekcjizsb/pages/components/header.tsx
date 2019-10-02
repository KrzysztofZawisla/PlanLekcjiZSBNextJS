import Link from "next/link";
import React from "react";

interface HeaderProps {};

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header id="Header">
      <style jsx>{`
        #Header {
          text-align: center;
          width: 100%;
          height: auto;
          background: #e05416;
          padding: 7.5px;
        }

        #Header img {
          width: 80px;
          height: auto;
          border-radius: 15px;
        }
      `}</style>
      <Link href="/"><a><img src="/static/logo.png" alt="Logo"/></a></Link>
    </header>
  );
}

export default Header;