import { useState } from 'react';
import s from './Header.module.scss';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Partnership', href: '#partnership' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <a href="/" className={s.logo}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 4.5L16.5 13H20l-3.5 7H13z" fill="currentColor"/>
          </svg>
          GEBO
        </a>

        <nav className={s.navDesktop}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={s.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={s.cta}>
          Contact Us
          <span className={s.arrow}>&rarr;</span>
        </a>

        <button
          className={`${s.burger} ${menuOpen ? s.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className={s.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={s.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
