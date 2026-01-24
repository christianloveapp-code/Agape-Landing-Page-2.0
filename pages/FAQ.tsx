import React from 'react';

export const FAQ: React.FC = () => {
    return (
        <main className="container mx-auto px-4 max-w-4xl py-12 pb-24">
            <div className="bg-white border-[3px] border-ink p-8 md:p-12 shadow-neo">
                <h1 className="font-heading text-4xl md:text-5xl mb-8 text-primary">Frequently Asked Questions</h1>

                <div className="space-y-6 font-body text-lg">
                    <div>
                        <h3 className="font-bold text-xl mb-2">When will Agape launch?</h3>
                        <p className="text-gray-600">
                            We're launching in Spring 2026! Stay tuned for updates.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-2">Is Agape free to use?</h3>
                        <p className="text-gray-600">
                            Yes, the app is completely free to use, but we also offer a subscription for more features and a better experience.
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
            </div>
        </main>
    );
};
