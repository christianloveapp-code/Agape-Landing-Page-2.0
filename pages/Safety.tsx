import React from 'react';
import { Shield, CheckCircle, AlertTriangle, Lock, Eye, UserCheck } from 'lucide-react';

export const Safety: React.FC = () => {
  return (
    <main className="container mx-auto px-4 max-w-6xl py-12 pb-24">
      <div className="text-center mb-16">
        <Shield className="inline-block mb-4 text-primary" size={64} />
        <h1 className="font-heading text-5xl md:text-6xl mb-6">Safety First</h1>
        <p className="font-body text-2xl text-gray-600 max-w-2xl mx-auto">
          Your safety and security are our top priorities. We've built Agape with multiple layers of protection.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white border-[3px] border-ink p-8 shadow-neo">
          <Lock className="mb-4 text-secondary" size={40} />
          <h3 className="font-heading text-2xl mb-3">Data Encryption</h3>
          <p className="font-body text-lg text-gray-700">
            All your personal information is encrypted using industry-standard security protocols.
            Your data is protected both in transit and at rest.
          </p>
        </div>

        <div className="bg-white border-[3px] border-ink p-8 shadow-neo">
          <UserCheck className="mb-4 text-secondary" size={40} />
          <h3 className="font-heading text-2xl mb-3">Profile Verification</h3>
          <p className="font-body text-lg text-gray-700">
            We verify all profiles to ensure authenticity and reduce fake accounts.
            Look for the verified badge to know you're talking to real people.
          </p>
        </div>

        <div className="bg-white border-[3px] border-ink p-8 shadow-neo">
          <Eye className="mb-4 text-secondary" size={40} />
          <h3 className="font-heading text-2xl mb-3">Content Moderation</h3>
          <p className="font-body text-lg text-gray-700">
            Our team monitors content to ensure it aligns with Christian values and community standards.
            Inappropriate content is quickly removed.
          </p>
        </div>

        <div className="bg-white border-[3px] border-ink p-8 shadow-neo">
          <AlertTriangle className="mb-4 text-secondary" size={40} />
          <h3 className="font-heading text-2xl mb-3">Report & Block</h3>
          <p className="font-body text-lg text-gray-700">
            Easily report suspicious behavior or block users who make you uncomfortable.
            Our team investigates all reports within 24 hours.
          </p>
        </div>
      </div>

      <div className="bg-highlight/30 border-[3px] border-ink p-8 md:p-12 mb-12">
        <h2 className="font-heading text-3xl md:text-4xl mb-6">Safety Tips</h2>
        <div className="grid md:grid-cols-2 gap-6 font-body text-lg">
          <div className="flex gap-3">
            <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
            <p>Take your time getting to know someone before meeting in person</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
            <p>Always meet in public places for first dates</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
            <p>Tell a friend or family member about your plans</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
            <p>Never share financial information or send money</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
            <p>Trust your instincts - if something feels wrong, it probably is</p>
          </div>
          <div className="flex gap-3">
            <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
            <p>Keep personal information private until you build trust</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-[3px] border-ink p-8 md:p-12 text-center">
        <h2 className="font-heading text-3xl mb-4">Need Help?</h2>
        <p className="font-body text-xl text-gray-700 mb-6">
          If you experience any safety concerns or need to report inappropriate behavior,
          our support team is here for you 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:team@agapechristianlove.com"
            className="font-heading text-lg px-8 py-3 bg-primary text-white border-[3px] border-ink shadow-neo hover:shadow-neo-hover transition-all"
          >
            Report a Safety Concern
          </a>
          <a
            href="/support"
            className="font-heading text-lg px-8 py-3 bg-white border-[3px] border-ink shadow-neo hover:shadow-neo-hover transition-all"
          >
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
};
