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
            <h2 className="font-heading text-2xl mb-3 mt-8">Child Safety & CSAE Prevention</h2>
            <p className="mb-3">
              Agape Christian Dating is committed to maintaining a safe environment and takes the prevention of
              child sexual abuse and exploitation (CSAE) extremely seriously.
            </p>

            <h3 className="font-heading text-xl mb-2 mt-5">Age Requirement</h3>
            <p className="mb-3">
              Agape Christian Dating is strictly intended for users who are <strong>18 years of age or older</strong>.
              We do not knowingly collect personal information from anyone under the age of 18. Users are required
              to confirm their age during registration, and any account found to belong to a minor will be
              immediately suspended and removed.
            </p>

            <h3 className="font-heading text-xl mb-2 mt-5">Our Commitment to Preventing Child Exploitation</h3>
            <p className="mb-3">
              We maintain a zero-tolerance policy toward child sexual abuse material (CSAM), grooming,
              and any form of child exploitation on our platform. We actively work to detect and prevent
              such content and behavior through a combination of automated systems and human moderation.
              Any content or activity that exploits or endangers minors will result in immediate account
              termination and reporting to the appropriate law enforcement authorities, including the
              National Center for Missing & Exploited Children (NCMEC).
            </p>

            <h3 className="font-heading text-xl mb-2 mt-5">Handling Reports of Inappropriate Content & Behavior</h3>
            <p className="mb-3">
              We take all reports of inappropriate content and behavior seriously. When a report is received, our
              moderation team reviews it promptly. Actions taken may include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li>Immediate removal of offending content</li>
              <li>Temporary or permanent suspension of the reported account</li>
              <li>Escalation to law enforcement when there is any indication of illegal activity, including child exploitation</li>
              <li>Cooperation with legal authorities and regulatory bodies as required</li>
            </ul>

            <h3 className="font-heading text-xl mb-2 mt-5">How to Report Safety Concerns</h3>
            <p className="mb-3">
              If you encounter any content or behavior that you believe may involve child exploitation,
              abuse, or any other safety concern, please report it immediately using one of the following methods:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li>
                <strong>In-App Reporting:</strong> Use the report button available on any user profile or
                within any conversation to flag concerning content or behavior.
              </li>
              <li>
                <strong>Email:</strong> Contact our safety team directly at{' '}
                <a href="mailto:team@agapechristianlove.com" className="text-primary underline">team@agapechristianlove.com</a>{' '}
                with the subject line "Safety Report."
              </li>
              <li>
                <strong>External Reporting:</strong> You may also report suspected child exploitation to the{' '}
                <a href="https://www.missingkids.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  National Center for Missing & Exploited Children (NCMEC)
                </a>{' '}
                or your local law enforcement.
              </li>
            </ul>
            <p>
              All reports are treated with the highest level of urgency and confidentiality. We are committed
              to responding to safety reports within 24 hours.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:team@agapechristianlove.com" className="text-primary underline">team@agapechristianlove.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
