import React from 'react';

export const AccountDeletion: React.FC = () => {
  return (
    <main className="container mx-auto px-4 max-w-4xl py-12 pb-24">
      <div className="bg-white border-[3px] border-ink p-8 md:p-12 shadow-neo">
        <h1 className="font-heading text-4xl md:text-5xl mb-8 text-primary">Account Deletion - Agape</h1>

        <div className="font-body text-lg space-y-6">
          <section>
            <p className="mb-4">To delete your Agape account:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Open the Agape app</li>
              <li>Go to Menu → Settings</li>
              <li>Tap "Delete Account"</li>
              <li>Confirm deletion</li>
            </ol>
          </section>

          <section>
            <p className="border-l-4 border-primary pl-4 py-2 bg-cream">
              Your account and all associated data will be permanently deleted.{' '}
              <span className="text-gray-600">(Information retained for 30 days before being permanently deleted.)</span>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-3 mt-8">Need help?</h2>
            <p>
              Contact us at{' '}
              <a href="mailto:team@agapechristianlove.com" className="text-primary underline">
                team@agapechristianlove.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
