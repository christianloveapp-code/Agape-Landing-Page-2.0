import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Book, Shield, Trash2 } from 'lucide-react';


export const Support: React.FC = () => {
  return (
    <main className="container mx-auto px-4 max-w-4xl py-12 pb-24">
      <div className="bg-white border-[3px] border-ink p-8 md:p-12 shadow-neo">
        <h1 className="font-heading text-4xl md:text-5xl mb-4 text-primary">Support</h1>
        <p className="font-body text-xl text-gray-600 mb-12">
          We're here to help! Reach out to us with any questions or concerns.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="border-[3px] border-ink p-6 bg-cream hover:shadow-neo transition-all">
            <Mail className="mb-4" size={32} />
            <h3 className="font-heading text-2xl mb-2">Email Support</h3>
            <p className="font-body mb-4">Get help via email. We typically respond within 24 hours.</p>
            <a href="mailto:support@agape.com" className="text-primary underline font-bold">
              support@agape.com
            </a>
          </div>

          <div className="border-[3px] border-ink p-6 bg-cream hover:shadow-neo transition-all">
            <Trash2 className="mb-4" size={32} />
            <h3 className="font-heading text-2xl mb-2">Delete Account</h3>
            <p className="font-body mb-4">Permanently delete your account and associated data.</p>
            <Link to="/account-deletion" className="text-primary underline font-bold">
              View Instructions
            </Link>
          </div>

          <div className="border-[3px] border-ink p-6 bg-cream hover:shadow-neo transition-all">
            <Book className="mb-4" size={32} />
            <h3 className="font-heading text-2xl mb-2">Help Center</h3>
            <p className="font-body mb-4">Browse our comprehensive knowledge base.</p>
            <a href="#" className="text-primary underline font-bold">Visit Help Center</a>
          </div>

          <div className="border-[3px] border-ink p-6 bg-cream hover:shadow-neo transition-all">
            <Shield className="mb-4" size={32} />
            <h3 className="font-heading text-2xl mb-2">Report an Issue</h3>
            <p className="font-body mb-4">Report safety concerns or inappropriate behavior.</p>
            <a href="mailto:safety@agape.com" className="text-primary underline font-bold">
              safety@agape.com
            </a>
          </div>
        </div>

        <section className="border-t-[3px] border-ink pt-8">
          <h2 className="font-heading text-3xl mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6 font-body text-lg">
            <div>
              <h3 className="font-bold text-xl mb-2">When will Agape launch?</h3>
              <p className="text-gray-600">
                We're launching in 2026! Join our waitlist to be notified when we go live.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">Is Agape free to use?</h3>
              <p className="text-gray-600">
                We'll offer both free and premium membership options. More details coming soon!
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">How do you verify Christian faith?</h3>
              <p className="text-gray-600">
                We use a combination of profile verification and community guidelines to maintain
                a genuine Christian community.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">What platforms will Agape be available on?</h3>
              <p className="text-gray-600">
                Agape will be available on both iOS (App Store) and Android (Google Play) at launch.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
