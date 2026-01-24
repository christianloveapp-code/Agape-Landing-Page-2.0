import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield, Trash2 } from 'lucide-react';


export const Help: React.FC = () => {
  return (
    <main className="container mx-auto px-4 max-w-4xl py-12 pb-24">
      <div className="bg-white border-[3px] border-ink p-8 md:p-12 shadow-neo">
        <h1 className="font-heading text-4xl md:text-5xl mb-4 text-primary">Help</h1>
        <p className="font-body text-xl text-gray-600 mb-12">
          We're here to help! Reach out to us with any questions or concerns.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="border-[3px] border-ink p-6 bg-cream hover:shadow-neo transition-all">
            <Mail className="mb-4" size={32} />
            <h3 className="font-heading text-2xl mb-2">Email Support</h3>
            <p className="font-body mb-4">Get help via email. We typically respond within 24 hours.</p>
            <a href="mailto:team@agapechristianlove.com" className="text-primary underline font-bold">
              team@agapechristianlove.com
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
            <Shield className="mb-4" size={32} />
            <h3 className="font-heading text-2xl mb-2">Report an Issue</h3>
            <p className="font-body mb-4">Report safety concerns or inappropriate behavior.</p>
            <a href="mailto:team@agapechristianlove.com" className="text-primary underline font-bold">
              team@agapechristianlove.com
            </a>
          </div>
        </div>


      </div>
    </main>
  );
};
