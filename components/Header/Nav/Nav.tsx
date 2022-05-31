import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#features">Features</Link>
        </li>
        <li>
          <Link href="#pricing">Pricing</Link>
        </li>
        <li>
          <Link href="#testimonials">Testimonials</Link>
        </li>
        <li>Help</li>
      </ul>
    </nav>
  );
};

export default Nav;
