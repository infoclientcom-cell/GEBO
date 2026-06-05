import s from '../PrivacyPolicy/PrivacyPolicy.module.scss';

export default function TermsOfService() {
  return (
    <section className={s.page}>
      <div className={s.container}>
        <h1 className={s.title}>Terms of Service</h1>
        <p className={s.updated}>Last updated: June 2026</p>

        <div className={s.content}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using any website, application or digital product operated by DOO GEBO,
            PIB 03449424, registered at XXI 74, Stan 41, 85310 Petrovac, Budva, Montenegro
            ("Company", "we", "us"), you agree to be bound by these Terms of Service. If you do
            not agree, you must not use our services.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            GEBO develops and operates software products, artificial intelligence solutions,
            blockchain infrastructure, gaming platforms and digital ecosystems. Our services
            are provided "as is" and may be modified, updated or discontinued at any time
            without prior notice.
          </p>

          <h2>3. Eligibility</h2>
          <p>
            You must be at least 18 years old to use our services. By using our services, you
            represent and warrant that you meet this age requirement and have the legal capacity
            to enter into these terms.
          </p>

          <h2>4. User Accounts</h2>
          <p>
            Some services may require you to create an account or connect a digital wallet.
            You are responsible for maintaining the confidentiality of your account credentials
            and for all activities that occur under your account. You agree to notify us immediately
            of any unauthorized use.
          </p>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our services for any unlawful or fraudulent purpose.</li>
            <li>Attempt to gain unauthorized access to our systems or other users' accounts.</li>
            <li>Interfere with or disrupt the operation of our services.</li>
            <li>Upload or transmit malicious code, viruses or harmful content.</li>
            <li>Reverse engineer, decompile or disassemble any part of our software.</li>
            <li>Use automated tools (bots, scrapers) without our written permission.</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            All content, software, designs, logos, trademarks and other intellectual property
            associated with GEBO services are owned by or licensed to the Company. You may not
            copy, modify, distribute or create derivative works without our prior written consent.
          </p>

          <h2>7. Blockchain and Digital Assets</h2>
          <p>
            Certain services involve blockchain technology and digital assets. You acknowledge that:
          </p>
          <ul>
            <li>Blockchain transactions are irreversible once confirmed.</li>
            <li>We are not responsible for losses due to user error, network failures or smart contract vulnerabilities.</li>
            <li>Digital assets may be volatile and carry financial risk.</li>
            <li>You are solely responsible for compliance with applicable laws in your jurisdiction regarding digital assets.</li>
          </ul>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, GEBO shall not be liable for any indirect,
            incidental, special, consequential or punitive damages arising from your use of our
            services, including but not limited to loss of profits, data, goodwill or digital assets.
          </p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>
            Our services are provided on an "as is" and "as available" basis without warranties
            of any kind, either express or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose and non-infringement.
          </p>

          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless DOO GEBO, its officers, directors, employees
            and agents from any claims, damages, losses or expenses arising from your use of our
            services or violation of these terms.
          </p>

          <h2>11. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our services at any time,
            with or without cause, and with or without notice. Upon termination, all provisions
            of these terms that by their nature should survive will remain in effect.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws
            of Montenegro. Any disputes arising from these terms shall be subject to the exclusive
            jurisdiction of the courts of Montenegro.
          </p>

          <h2>13. Changes to These Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of our services
            after changes are posted constitutes acceptance of the revised terms.
          </p>

          <h2>14. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us:<br />
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
