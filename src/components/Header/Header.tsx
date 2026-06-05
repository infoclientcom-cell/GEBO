import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import s from './Header.module.scss';

const navLinks = [
  { label: 'About', hash: '#about' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Technologies', hash: '#technologies' },
  { label: 'Partnership', hash: '#partnership' },
  { label: 'Contact', hash: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNav = (hash: string) => {
    setMenuOpen(false);
    if (pathname !== '/') {
      navigate('/' + hash);
    } else {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <button
              key={link.hash}
              className={s.navLink}
              onClick={() => handleNav(link.hash)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button className={s.cta} onClick={() => handleNav('#contact')}>
          Contact Us
          <span className={s.arrow}>&rarr;</span>
        </button>

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
            <button
              key={link.hash}
              className={s.mobileLink}
              onClick={() => handleNav(link.hash)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
