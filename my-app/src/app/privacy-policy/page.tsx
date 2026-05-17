import AppearOnScroll from "@/components/AppearOnScroll";

export default function PrivacyPolicy() {
  return (
    <main className="prose mx-auto px-4 py-12">
      <AppearOnScroll amount={0.2}>
        <h1>Privacy Policy</h1>
        <p><em>Last updated: July 6, 2025</em></p>
        <p>
          Your privacy is important to us. This Privacy Policy describes how we collect, use, and safeguard your personal information when you use our website and services.
        </p>
      </AppearOnScroll>
      <AppearOnScroll delay={0.04}>
        <h2>Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Information:</strong> When you contact us or register an account, we may collect personal details such as your name, email address, and contact information.
          </li>
          <li>
            <strong>Usage Data:</strong> We may collect information on how you access and use our website, including your IP address, browser type, device information, and pages visited.
          </li>
          <li>
            <strong>Cookies &amp; Tracking:</strong> We use cookies and similar technologies to enhance your experience, analyze usage, and deliver relevant content.
          </li>
        </ul>
      </AppearOnScroll>
      <AppearOnScroll delay={0.06}>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide, operate, and maintain our services</li>
          <li>To communicate with you, including responding to inquiries and sending updates</li>
          <li>To improve our website and services</li>
          <li>To comply with legal obligations</li>
        </ul>
      </AppearOnScroll>
      <AppearOnScroll delay={0.08}>
        <h2>Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information. We may share information with trusted third-party service providers who assist us in operating our website and providing our services, subject to confidentiality agreements.
        </p>
      </AppearOnScroll>
      <AppearOnScroll delay={0.1}>
        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
      </AppearOnScroll>
      <AppearOnScroll delay={0.12}>
        <h2>Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information by contacting us.
        </p>
      </AppearOnScroll>
      <AppearOnScroll delay={0.14}>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this policy from time to time. Any changes will be posted on this page.
        </p>
      </AppearOnScroll>
      <AppearOnScroll delay={0.16}>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@codewithsage.com">support@codewithsage.com</a>.
        </p>
      </AppearOnScroll>
    </main>
  );
}