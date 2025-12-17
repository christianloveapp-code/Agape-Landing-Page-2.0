import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const AuthVerify: React.FC = () => {
  const location = useLocation();
  const [status, setStatus] = useState<'redirecting' | 'error'>('redirecting');
  const [deepLink, setDeepLink] = useState<string>('');

  useEffect(() => {
    // Get tokens from URL - check both query params and hash fragment
    const searchParams = new URLSearchParams(location.search);
    const hashParams = new URLSearchParams(location.hash.replace('#', ''));

    // Build the deep link URL with all parameters
    const params = new URLSearchParams();

    // Collect params from query string
    searchParams.forEach((value, key) => {
      params.append(key, value);
    });

    // Collect params from hash fragment (some OAuth providers use hash)
    hashParams.forEach((value, key) => {
      if (!params.has(key)) {
        params.append(key, value);
      }
    });

    const queryString = params.toString();
    // If we have an access_token, it usually belongs in the hash for Supabase/OAuth
    const hasAccessToken = params.has('access_token');
    
    const link = queryString
      ? (hasAccessToken 
          ? `agape://auth/verify#${queryString}` 
          : `agape://auth/verify?${queryString}`)
      : 'agape://auth/verify';
    
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
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {status === 'redirecting' ? (
          <>
            <div className="mb-6">
              <svg
                className="animate-spin h-12 w-12 mx-auto text-rose"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Email Successfully Verified!
            </h1>
            <p className="text-ink/70 mb-4">
              Thank you for verifying your email. You're being redirected to the Agape app.
            </p>
            {deepLink && (
              <a href={deepLink} className="text-primary font-bold underline hover:text-primary/80 transition-colors">
                Click here if not redirected
              </a>
            )}
          </>
        ) : (
          <>
            <h1 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Email Successfully Verified!
            </h1>
            <p className="text-ink/70 mb-6">
              Please close this window and return to the Agape app to continue.
            </p>
            {deepLink && (
               <div className="mb-8">
                 <a href={deepLink} className="text-primary font-bold underline hover:text-primary/80 transition-colors">
                   Open Agape App
                 </a>
               </div>
            )}
            
            <p className="text-sm text-ink/50 mb-4 uppercase tracking-wider font-bold">
              Don't have the app?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/app/agape"
                className="inline-flex items-center justify-center px-6 py-3 bg-ink text-cream font-bold border-3 border-ink shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all"
              >
                Download for iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.agape"
                className="inline-flex items-center justify-center px-6 py-3 bg-ink text-cream font-bold border-3 border-ink shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all"
              >
                Download for Android
              </a>
            </div>
          </>
        )}
      </div>
    </main>
  );
};
