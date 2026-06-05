import s from '../PrivacyPolicy/PrivacyPolicy.module.scss';

export default function CookiePolicy() {
  return (
    <section className={s.page}>
      <div className={s.container}>
        <h1 className={s.title}>Cookie Policy</h1>
        <p className={s.updated}>Last updated: June 2026</p>

        <div className={s.content}>
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit a website.
            They are widely used to make websites work more efficiently and to provide information
            to website owners. This Cookie Policy explains how DOO GEBO ("Company", "we", "us")
            uses cookies on our website.
          </p>

          <h2>2. Types of Cookies We Use</h2>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable basic
            features such as page navigation, secure access and session management. The website
            cannot function without these cookies.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting
            and reporting information anonymously. This helps us improve the structure and content
            of our website.
          </p>

          <h3>Functional Cookies</h3>
          <p>
            These cookies allow our website to remember choices you make (such as language preference
            or theme settings) and provide enhanced, personalized features.
          </p>

          <h2>3. Third-Party Cookies</h2>
          <p>
            Some cookies may be set by third-party services that appear on our pages. We do not
            control these cookies. Third-party services may include analytics providers and
            blockchain wallet connection services. Please refer to the respective third-party
            privacy policies for more information.
          </p>

          <h2>4. Cookie Duration</h2>
          <ul>
            <li><strong>Session cookies:</strong> deleted when you close your browser.</li>
            <li><strong>Persistent cookies:</strong> remain on your device for a set period or until you delete them manually.</li>
          </ul>

          <h2>5. Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings. Most browsers allow
            you to refuse cookies or delete existing cookies. Please note that disabling certain
            cookies may affect the functionality of our website.
          </p>
          <p>Instructions for managing cookies in popular browsers:</p>
          <ul>
            <li>Chrome: Settings → Privacy and security → Cookies</li>
            <li>Firefox: Settings → Privacy & Security → Cookies</li>
            <li>Safari: Preferences → Privacy → Cookies</li>
            <li>Edge: Settings → Privacy → Cookies</li>
          </ul>

          <h2>6. Consent</h2>
          <p>
            By continuing to use our website, you consent to the use of cookies as described
            in this policy. You may withdraw your consent at any time by adjusting your browser
            settings or contacting us.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on
            this page with an updated revision date.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions about our use of cookies, please contact us:<br />
            DOO GEBO<br />
            XXI 74, Stan 41, 85310 Petrovac, Budva, Montenegro<br />
            Email: info@gebo.click<br />
            Phone: +382 69 592119
          </p>
        </div>
      </div>
    </section>
  );
}
