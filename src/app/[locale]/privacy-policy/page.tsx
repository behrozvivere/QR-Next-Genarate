import { Container } from "@/components/Containers";

export default function PrivacyPolicy() {
  return (
    <Container className="my-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: December 14, 2024</p>

        <h2>1. Information We Collect</h2>
        <p>When you use QRNG, we collect:</p>
        <ul>
          <li>Information you provide when generating QR codes</li>
          <li>Usage data and analytics</li>
          <li>Device and browser information</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Provide and improve our QR code generation service</li>
          <li>Analyze service usage and optimize performance</li>
          <li>Communicate with users about service updates</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          We do not sell or share your personal information with third parties
          except:
        </p>
        <ul>
          <li>With your consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights and safety</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your information
          from unauthorized access, alteration, or destruction.
        </p>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing communications</li>
        </ul>

        <h2>6. Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies to enhance your experience and
          collect usage data. You can control cookie settings through your
          browser.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          Our service is not intended for children under 13. We do not knowingly
          collect information from children under 13.
        </p>

        <h2>8. Changes to Privacy Policy</h2>
        <p>
          We may update this policy periodically. Users will be notified of
          significant changes.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          For privacy-related questions or concerns, please contact us at
          privacy@qrng.app
        </p>
      </div>
    </Container>
  );
}
