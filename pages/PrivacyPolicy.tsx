import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <main className="container mx-auto px-4 max-w-4xl py-12 pb-24">
      <div className="bg-white border-[3px] border-ink p-8 md:p-12 shadow-neo">
        <h1 className="font-heading text-4xl md:text-5xl mb-8 text-primary">Privacy Policy</h1>

        <div className="font-body text-lg space-y-6">
          <p className="text-gray-600 italic">Last updated: January 2026</p>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">Introduction</h2>
            <p>
              Welcome to Agape Christian Dating. We are committed to protecting your privacy and personal information.
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">Information We Collect</h2>
            <p className="mb-3">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name, email address, and contact information</li>
              <li>Profile information including photos and personal descriptions</li>
              <li>Religious preferences and beliefs</li>
              <li>Communication preferences</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">How We Use Your Information</h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and improve our dating services</li>
              <li>Match you with compatible Christian singles</li>
              <li>Communicate with you about your account</li>
              <li>Ensure the safety and security of our platform</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. Your data is encrypted and
              stored securely.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@agape.com" className="text-primary underline">privacy@agape.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
