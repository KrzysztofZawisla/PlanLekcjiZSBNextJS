import React from "react";

interface FooterProps {};

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <footer id="Footer">
      <style jsx>{`
        #Footer {
          position: relative;
          bottom: 0px;
          background: #e05416;
          width: 100%;
          height: auto;
          padding: 2.5px;
          color: #fff;
          font-size: 24px;
          text-align: center;
        }
        #Footer a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
      <a href="https://github.com/KrzysztofZawisla">Krzysztof Zawisła &copy;</a>
    </footer>
  );
}

export default Footer;