import Link from "next/link";
import React from "react";
import "./Navbar.css";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/utils/authOptions";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="navbar">
      <h1>IDN MiCaSa</h1>
      <ul>
        {!session?.user ? (
          <>
            <li>
              <Link href="/auth/login">Iniciar Sesión</Link>
            </li>
            <li>
              <Link href="/auth/register">Registrarse</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/pages/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/api/auth/signout">Cerrar Sessión</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
