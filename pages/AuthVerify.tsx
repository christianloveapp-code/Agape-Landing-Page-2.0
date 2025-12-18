import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Heart, CheckCircle, Sparkles, Apple, Play } from 'lucide-react';

export const AuthVerify: React.FC = () => {
  const location = useLocation();
  const [status, setStatus] = useState<'redirecting' | 'error'>('redirecting');
  const [deepLink, setDeepLink] = useState<string>('');

  useEffect(() => {
    // Simplified redirect logic to match the raw HTML snippet behavior
    // We prioritize the hash as that's where Supabase/OAuth tokens usually live
    const hash = location.hash;
    const search = location.search;
    
    let link = 'agape://auth/verify';
    
    if (hash) {
      // If hash exists, append it directly (includes #)
      link += hash;
    } else if (search) {
      // Fallback to search params if no hash (includes ?)
      link += search;
    }
    
    setDeepLink(link);

    // Redirect to the app
    window.location.href = link;

    // Set error state after a delay if redirect didn't work
    const timeout = setTimeout(() => {
      setStatus('error');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-secondary" style={{ backgroundImage: 'linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 50%, #1a1a1a 50%, #1a1a1a 75%, transparent 75%, transparent)', backgroundSize: '20px 20px' }}></div>
      <div className="absolute -top-20 -right-20 text-highlight opacity-20 transform rotate-12">
        <Sparkles size={200} />
      </div>
      <div className="absolute -bottom-20 -left-20 text-secondary opacity-10 transform -rotate-12">
        <Heart size={200} fill="currentColor" />
      </div>

      <div className="bg-white border-[3px] border-ink rounded-2xl shadow-[8px_8px_0px_#1a1a1a] p-8 md:p-12 max-w-lg w-full text-center relative z-10">
        {status === 'redirecting' ? (
          <>
            <div className="mb-8 relative inline-block">
              <div className="absolute inset-0 bg-highlight rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-white border-[3px] border-ink rounded-full p-4 shadow-neo">
                <Heart className="animate-pulse text-rose" size={48} fill="#FF6B6B" />
              </div>
              <div className="absolute -top-2 -right-2 animate-bounce">
                <Sparkles className="text-highlight" size={24} fill="#FFD32A" />
              </div>
            </div>
            
            <h1 className="font-heading text-3xl md:text-4xl mb-4">
              Email Verified!
            </h1>
            <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
              Thank you for verifying your email. We're redirecting you back to the app now.
            </p>
            
            {deepLink && (
              <a 
                href={deepLink} 
                className="inline-flex items-center justify-center font-heading text-lg px-8 py-3 rounded-xl border-[3px] border-ink bg-primary text-white shadow-[4px_4px_0px_#1a1a1a] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#1a1a1a] active:translate-y-0 active:shadow-[2px_2px_0px_#1a1a1a] transition-all"
              >
                Open Agape App
              </a>
            )}
          </>
        ) : (
          <>
            <div className="mb-8 relative inline-block">
              <div className="relative bg-white border-[3px] border-ink rounded-full p-4 shadow-neo">
                <CheckCircle className="text-secondary" size={48} />
              </div>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl mb-4">
              You're All Set!
            </h1>
            <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
              Your email has been verified. Please close this window and return to the Agape app to continue setting up your profile.
            </p>
            
            {deepLink && (
               <div className="mb-10">
                 <a 
                   href={deepLink} 
                   className="inline-flex items-center justify-center font-heading text-lg px-8 py-3 rounded-xl border-[3px] border-ink bg-primary text-white shadow-[4px_4px_0px_#1a1a1a] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#1a1a1a] active:translate-y-0 active:shadow-[2px_2px_0px_#1a1a1a] transition-all"
                 >
                   Open Agape App
                 </a>
               </div>
            )}
            
            <div className="border-t-[3px] border-ink/10 pt-8">
              <p className="font-heading text-sm text-gray-500 mb-4 uppercase tracking-wider">
                Don't have the app?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://apps.apple.com/app/agape"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-ink text-cream rounded-xl border-[3px] border-ink hover:-translate-y-1 hover:shadow-[4px_4px_0px_#4ecdc4] transition-all"
                >
                  <Apple size={20} fill="currentColor" />
                  <span className="font-bold">App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.agape"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-ink text-cream rounded-xl border-[3px] border-ink hover:-translate-y-1 hover:shadow-[4px_4px_0px_#FFD32A] transition-all"
                >
                  <Play size={20} fill="currentColor" />
                  <span className="font-bold">Google Play</span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};
