import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <main className="container mx-auto px-4 max-w-4xl py-12 pb-24">
      <div className="bg-white border-[3px] border-ink p-8 md:p-12 shadow-neo">
        <h1 className="font-heading text-4xl md:text-5xl mb-8 text-primary">Terms of Service</h1>

        <div className="font-body text-lg space-y-6">
          <p className="text-gray-600 italic">Last updated: January 2026</p>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">Agreement to Terms</h2>
            <p>
              By accessing or using Agape Christian Dating, you agree to be bound by these Terms of Service.
              If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">Eligibility</h2>
            <p className="mb-3">To use Agape, you must:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Be at least 18 years of age</li>
              <li>Be legally able to enter into a binding contract</li>
              <li>Not be prohibited from using the service under applicable laws</li>
              <li>Be a Christian seeking meaningful relationships</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">User Conduct</h2>
            <p className="mb-3">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and truthful information</li>
              <li>Respect other users and communicate with kindness</li>
              <li>Not harass, abuse, or harm other users</li>
              <li>Not use the service for commercial purposes</li>
              <li>Uphold Christian values and principles</li>
              <li>Not impersonate others or create fake profiles</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">Content Guidelines</h2>
            <p>
              All content you post must be appropriate and consistent with Christian values.
              We reserve the right to remove any content that violates these guidelines or is deemed
              inappropriate for our community.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">Account Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time for violations
              of these Terms of Service or for any other reason we deem necessary to protect our
              community.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">Limitation of Liability</h2>
            <p>
              Agape Christian Dating is provided "as is" without warranties of any kind. We are not
              responsible for the conduct of users or the outcomes of relationships formed through
              our platform.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. We will notify you of any
              significant changes via email or through the app.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@agape.com" className="text-primary underline">legal@agape.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
