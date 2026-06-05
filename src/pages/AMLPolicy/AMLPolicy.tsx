import s from '../PrivacyPolicy/PrivacyPolicy.module.scss';

export default function AMLPolicy() {
  return (
    <section className={s.page}>
      <div className={s.container}>
        <h1 className={s.title}>AML Policy</h1>
        <p className={s.updated}>Last updated: June 2026</p>

        <div className={s.content}>
          <h2>1. Introduction</h2>
          <p>
            DOO GEBO, PIB 03449424, registered at XXI 74, Stan 41, 85310 Petrovac, Budva, Montenegro
            ("Company", "we", "us") is committed to preventing money laundering, terrorist financing
            and other financial crimes. This Anti-Money Laundering (AML) Policy outlines our procedures
            and controls designed to detect and prevent illicit activities.
          </p>

          <h2>2. Scope</h2>
          <p>
            This policy applies to all products, services and platforms operated by GEBO, including
            those involving blockchain technology, digital assets and smart contracts. All employees,
            contractors and partners are required to comply with this policy.
          </p>

          <h2>3. Regulatory Framework</h2>
          <p>
            Our AML procedures are designed in accordance with applicable Montenegrin laws and
            regulations regarding the prevention of money laundering and terrorist financing,
            as well as relevant international standards and best practices.
          </p>

          <h2>4. User Identification</h2>
          <p>
            Our services primarily operate through blockchain wallet connections. Where required
            by law, we may implement additional identity verification procedures. We reserve the
            right to request identification from users if suspicious activity is detected.
          </p>

          <h2>5. Transaction Monitoring</h2>
          <p>
            We monitor transactions and user activity for suspicious patterns, including but
            not limited to:
          </p>
          <ul>
            <li>Unusually large or frequent transactions.</li>
            <li>Transactions involving high-risk jurisdictions.</li>
            <li>Attempts to structure transactions to avoid reporting thresholds.</li>
            <li>Use of multiple accounts or wallets to obscure the source of funds.</li>
            <li>Activity inconsistent with the user's profile or stated purpose.</li>
          </ul>

          <h2>6. Suspicious Activity Reporting</h2>
          <p>
            Where we identify suspicious activity, we will file reports with the relevant
            authorities in accordance with applicable law. We may also suspend or terminate
            accounts associated with suspected illicit activity without prior notice.
          </p>

          <h2>7. Record Keeping</h2>
          <p>
            We maintain records of all KYC documentation, transaction data and suspicious
            activity reports for the minimum period required by applicable law (not less than
            5 years from the date of the transaction or the end of the business relationship).
          </p>

          <h2>8. Risk Assessment</h2>
          <p>
            We conduct periodic risk assessments to identify and evaluate money laundering
            and terrorist financing risks associated with our products, services, customer
            base and geographic exposure. Risk mitigation measures are updated accordingly.
          </p>

          <h2>9. Blockchain-Specific Measures</h2>
          <p>
            Given the nature of blockchain technology, we may implement additional measures including
            screening of wallet addresses against known blacklists and sanctioned entities, and
            enhanced monitoring for high-value or high-risk transactions.
          </p>

          <h2>11. Cooperation with Authorities</h2>
          <p>
            We cooperate fully with law enforcement and regulatory authorities in the investigation
            of suspected money laundering, terrorist financing or other financial crimes, in
            accordance with applicable law.
          </p>

          <h2>12. Non-Compliance</h2>
          <p>
            Failure to comply with this AML Policy may result in disciplinary action for employees,
            termination of accounts for users, and reporting to relevant authorities.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            For questions about this AML Policy, please contact us:<br />
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
