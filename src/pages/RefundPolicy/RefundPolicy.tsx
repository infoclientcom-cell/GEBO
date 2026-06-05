import s from '../PrivacyPolicy/PrivacyPolicy.module.scss';

export default function RefundPolicy() {
  return (
    <section className={s.page}>
      <div className={s.container}>
        <h1 className={s.title}>Refund Policy</h1>
        <p className={s.updated}>Last updated: June 2026</p>

        <div className={s.content}>
          <h2>1. General</h2>
          <p>
            This Refund Policy applies to all products and services provided by DOO GEBO,
            PIB 03449424, registered at XXI 74, Stan 41, 85310 Petrovac, Budva, Montenegro
            ("Company", "we", "us").
          </p>

          <h2>2. Digital Products and Services</h2>
          <p>
            Due to the nature of digital products and services, all purchases are generally
            considered final once the service has been delivered or access has been granted.
            We do not offer refunds for digital products that have been accessed, downloaded
            or activated.
          </p>

          <h2>3. Blockchain Transactions</h2>
          <p>
            Transactions conducted on blockchain networks are irreversible by their nature.
            Once a blockchain transaction has been confirmed, it cannot be reversed, cancelled
            or refunded by the Company. You acknowledge and accept this limitation when using
            any blockchain-based services.
          </p>

          <h2>4. Eligibility for Refunds</h2>
          <p>Refunds may be considered in the following circumstances:</p>
          <ul>
            <li>A technical error on our part that prevented you from accessing a paid service.</li>
            <li>Duplicate charges resulting from a system malfunction.</li>
            <li>Services not delivered as described, where the issue cannot be resolved.</li>
          </ul>

          <h2>5. Refund Request Process</h2>
          <p>
            To request a refund, please contact us at info@gebo.click within 14 days of
            the transaction date. Your request must include:
          </p>
          <ul>
            <li>Your name and contact information.</li>
            <li>Transaction ID or proof of payment.</li>
            <li>A detailed description of the reason for the refund request.</li>
          </ul>

          <h2>6. Processing</h2>
          <p>
            We will review your refund request within 14 business days. If approved, the
            refund will be processed on a case-by-case basis using an appropriate method.
          </p>

          <h2>7. Non-Refundable Items</h2>
          <p>The following are not eligible for refunds:</p>
          <ul>
            <li>Blockchain transaction fees (gas fees).</li>
            <li>Services that have been fully rendered.</li>
            <li>Digital assets or tokens that have been transferred to your wallet.</li>
            <li>Losses resulting from market volatility or price fluctuations.</li>
          </ul>

          <h2>8. Contact Us</h2>
          <p>
            For refund requests or questions about this policy, please contact us:<br />
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
