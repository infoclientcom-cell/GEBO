import { Link } from 'react-router-dom';
import s from './Footer.module.scss';

export default function Footer() {
  return (
    <footer id="contact" className={s.footer}>
      <div className={s.container}>
        <div className={s.grid}>
          <div className={s.col}>
            <h4 className={s.colTitle}>Company</h4>
            <p className={s.colText}>DOO GEBO</p>
            <p className={s.colText}>PIB: 03449424</p>
            <p className={s.colText}>XXI 74, Stan 41</p>
            <p className={s.colText}>85310 Petrovac</p>
            <p className={s.colText}>Budva, Montenegro</p>
          </div>

          <div className={s.col}>
            <h4 className={s.colTitle}>Contact</h4>
            <a href="tel:+38269592119" className={s.colLink}>+382 69 592119</a>
            <a href="mailto:info@gebo.click" className={s.colLink}>info@gebo.click</a>
          </div>

          <div className={s.col}>
            <h4 className={s.colTitle}>Legal</h4>
            <Link to="/privacy" className={s.colLink}>Privacy Policy</Link>
            <Link to="/terms" className={s.colLink}>Terms of Service</Link>
            <Link to="/refund" className={s.colLink}>Refund Policy</Link>
            <Link to="/cookies" className={s.colLink}>Cookie Policy</Link>
            <Link to="/aml" className={s.colLink}>AML Policy</Link>
          </div>

        </div>

        <div className={s.bottom}>
          <p className={s.copyright}>&copy; {new Date().getFullYear()} GEBO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
