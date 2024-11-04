'use client'
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container ctn">
          <a
            className="navbar-brand flex-item" href="#page-top">
            <Image
              src="/img/navbar-logo.svg"
              alt="..."
              width={100}
              height={100}
            />
          </a>
          <button
            onClick={toggleNavbar}
            className="navbar-toggler"
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            Menu
            {/* TODO: Update the way icons are being showed */}
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className={`navbar-collapse1 ${isCollapsed ? "" : "show"} flex-item`} id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  JNI
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <Link href="/auth/login" className="nav-link">
                  Iniciar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Ministerios</div>
          <div className="masthead-heading text-uppercase">
            Camino De Santidad
          </div>
        </div>
      </header>
    </div>
  );
}
