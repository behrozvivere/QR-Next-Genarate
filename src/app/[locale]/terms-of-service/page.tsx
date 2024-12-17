import { Container } from "@/components/Containers";

export default function TermsOfService() {
  return (
    <Container className="my-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: December 14, 2024</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using QRNG's QR code generation service, you agree to
          be bound by these Terms of Service.
        </p>

        <h2>2. Service Description</h2>
        <p>QRNG provides a QR code generation service that allows users to:</p>
        <ul>
          <li>Create QR codes with various artistic styles</li>
          <li>Download generated QR codes</li>
          <li>Access both free and premium features</li>
        </ul>

        <h2>3. User Responsibilities</h2>
        <p>Users agree to:</p>
        <ul>
          <li>Provide accurate information when using the service</li>
          <li>Not use the service for any illegal or unauthorized purpose</li>
          <li>Not attempt to interfere with the service's functionality</li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>
          All content, features, and functionality of the QRNG service are owned
          by QRNG and are protected by international copyright, trademark, and
          other intellectual property laws.
        </p>

        <h2>5. Generated Content</h2>
        <p>
          Users retain ownership of the content they use to generate QR codes.
          QRNG does not claim ownership of user-generated QR codes.
        </p>

        <h2>6. Service Availability</h2>
        <p>
          QRNG strives to provide uninterrupted service but does not guarantee
          continuous, uninterrupted access to the service.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          QRNG shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages resulting from your use of the
          service.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          QRNG reserves the right to modify these terms at any time. Users will
          be notified of significant changes.
        </p>

        <h2>9. Contact Information</h2>
        <p>
          For questions about these Terms of Service, please contact us at
          support@qrng.app
        </p>
      </div>
    </Container>
  );
}
