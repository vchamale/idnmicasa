import Image from "next/image";
import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img
              src="/img/logo mi casa-02.png"
              alt="..."
              width="100"
              height="500"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
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
          <a className="btn btn-primary btn-xl text-uppercase" href="#services">
            Tell Me More
          </a>
        </div>
      </header>
    </div>
  );
}
