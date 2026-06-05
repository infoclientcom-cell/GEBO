import s from './PrivacyPolicy.module.scss';

export default function PrivacyPolicy() {
  return (
    <section className={s.page}>
      <div className={s.container}>
        <h1 className={s.title}>Privacy Policy</h1>
        <p className={s.updated}>Last updated: June 2026</p>

        <div className={s.content}>
          <h2>1. Introduction</h2>
          <p>
            DOO GEBO, PIB 03449424, registered at XXI 74, Stan 41, 85310 Petrovac, Budva, Montenegro
            ("Company", "we", "us", "our") is committed to protecting and respecting your privacy.
            This Privacy Policy explains how we collect, use, store and protect your personal data
            when you use our website and digital products.
          </p>

          <h2>2. Data We Collect</h2>
          <p>We may collect and process the following categories of personal data:</p>
          <ul>
            <li><strong>Identity Data:</strong> name, username, email address.</li>
            <li><strong>Contact Data:</strong> email address.</li>
            <li><strong>Technical Data:</strong> IP address, browser type and version, operating system, device information, time zone setting, referring URL.</li>
            <li><strong>Usage Data:</strong> information about how you use our website and services, including pages visited, time spent, click patterns.</li>
            <li><strong>Blockchain Data:</strong> public wallet addresses used to interact with our platforms. We do not collect or store private keys.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data for the following purposes:</p>
          <ul>
            <li>To provide and maintain our services and digital products.</li>
            <li>To communicate with you regarding updates, support and inquiries.</li>
            <li>To improve our website, products and user experience.</li>
            <li>To comply with legal obligations and enforce our terms.</li>
            <li>To detect and prevent fraud, abuse and security incidents.</li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>We process your personal data based on the following legal grounds:</p>
          <ul>
            <li><strong>Consent:</strong> where you have given us explicit consent to process your data.</li>
            <li><strong>Contractual necessity:</strong> where processing is necessary for the performance of a contract with you.</li>
            <li><strong>Legitimate interest:</strong> where processing is necessary for our legitimate business interests, provided these do not override your rights.</li>
            <li><strong>Legal obligation:</strong> where processing is required to comply with applicable laws.</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share your data with trusted third-party service
            providers who assist us in operating our services (hosting, analytics),
            subject to appropriate data protection agreements. We may also disclose your data if required
            by law or to protect our legal rights.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes for
            which it was collected, or as required by applicable law. When data is no longer needed,
            it is securely deleted or anonymized.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            data against unauthorized access, alteration, disclosure or destruction. However, no method
            of transmission over the internet is 100% secure.
          </p>

          <h2>8. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the following rights:</p>
          <ul>
            <li>Right to access your personal data.</li>
            <li>Right to rectification of inaccurate data.</li>
            <li>Right to erasure ("right to be forgotten").</li>
            <li>Right to restrict processing.</li>
            <li>Right to data portability.</li>
            <li>Right to object to processing.</li>
            <li>Right to withdraw consent at any time.</li>
          </ul>
          <p>To exercise any of these rights, please contact us at info@gebo.click.</p>

          <h2>9. International Transfers</h2>
          <p>
            Your data may be transferred to and processed in countries other than Montenegro.
            Where such transfers occur, we ensure appropriate safeguards are in place to protect
            your personal data in accordance with applicable data protection laws.
          </p>

          <h2>10. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly
            collect personal data from children. If we become aware that we have collected data
            from a child, we will take steps to delete it promptly.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated revision date. We encourage you to review this policy periodically.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:<br />
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
