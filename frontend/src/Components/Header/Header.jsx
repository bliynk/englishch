import React from "react";
import "./Header.css";
import MainLogo from "../assets/images/logo/main_logo.png";
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <header className="main_header z-50">
        <nav className="flex items-center pl-10">
          <div className="logo">
            <img src={MainLogo} width="80" height="30" alt="" />
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#cbcbcb"
            >
              <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
            </svg>
            <span className="text-gray-200 ml-2">Brochure Managment</span>
          </div>
        </nav>
      </header>

      {/* Side Bar Code Start Here */}
      <aside className="aside fixed top-12 left-0 min-h-screen w-48 bottom-0"></aside>
      {/* Mid Image */}
      <div className="ml-48">
        <div className="main_image_bg">
          <div>
            <a href="!#" className="text-blue-800 underline ml-3 mt-3">
              Home
            </a>
            <h4 className="text-xl text-white font-medium ml-3 mt-6">
              HomePage
            </h4>
            <h2 className="text-xl text-white font-medium relative top-20 pl-3">
              Willkommen out der Seite des Prospektemanagement! <br />
              Klicken Sie unten ouf den Button "Suchen", um den passenden
              Prospekt zu finden
            </h2>
          </div>
        </div>
        <div>
          <div className="flex flex-row relative top-32 justify-center">
            <div className="box_1">
              <h1 className="text-2xl font-medium text-white text-center">
                Search Broshure
              </h1>

              <div className="flex justify-center">
                <Link to="/customers">
                <button>Search</button>
                </Link>
              </div>
            </div>
            <div className="box_2 ml-12">
              <h1 className="text-xl font-medium text-white text-center">
                Login <br />
                (Empolyee Only)
              </h1>
              <div className="flex justify-center">
                <Link to="/loginpage">
                <button>Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
