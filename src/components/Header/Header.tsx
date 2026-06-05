import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import s from './Header.module.scss';
import logo from '../../assets/icon-company.webp';

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
          <img src={logo} alt="GEBO" className={s.logoImg} />
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
