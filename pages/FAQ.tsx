import React from 'react';

export const FAQ: React.FC = () => {
    return (
        <main className="container mx-auto px-4 max-w-4xl py-12 pb-24">
            <div className="bg-white border-[3px] border-ink p-8 md:p-12 shadow-neo">
                <h1 className="font-heading text-4xl md:text-5xl mb-8 text-primary">Frequently Asked Questions</h1>

                <div className="space-y-12 font-body text-lg">

                    {/* General & Launch */}
                    <section>
                        <h2 className="font-heading text-2xl mb-6 text-secondary border-b-[3px] border-ink pb-2 inline-block">General & Launch</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-xl mb-2">When will Agape launch?</h3>
                                <p className="text-gray-600">
                                    We're launching in Spring 2026! Stay tuned for updates.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">What platforms will Agape be available on?</h3>
                                <p className="text-gray-600">
                                    We are launching first on Android in Spring 2026, and we'll be launching on iOS later on in the year.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Account & Profile */}
                    <section>
                        <h2 className="font-heading text-2xl mb-6 text-secondary border-b-[3px] border-ink pb-2 inline-block">Account & Profile</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-xl mb-2">How do I verify my profile?</h3>
                                <p className="text-gray-600">
                                    To get the "Verified" badge, go to your profile settings and select "Verify Profile." You'll be asked to take a selfie copying a specific hand gesture (like a peace sign) to prove you're real. It protects our community from fakes!
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">How do you verify Christian faith?</h3>
                                <p className="text-gray-600">
                                    We use a combination of profile verification and community guidelines to maintain a genuine Christian community.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">Can I change my name or age after signing up?</h3>
                                <p className="text-gray-600">
                                    You can edit your name in the Account Settings, but for security reasons, there is a cooldown period between changes. If you need to correct your age, please contact our support team directly.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">How do I delete my account?</h3>
                                <p className="text-gray-600">
                                    We'd hate to see you go! But if you need to, navigate to Settings &gt; Account &gt; Delete Account. Please note this action is permanent and will erase all your matches and messages.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Membership & Premium */}
                    <section>
                        <h2 className="font-heading text-2xl mb-6 text-secondary border-b-[3px] border-ink pb-2 inline-block">Membership & Premium</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-xl mb-2">Is Agape free to use?</h3>
                                <p className="text-gray-600">
                                    Yes! You can match, chat, and meet people for free. We also offer Agape Premium for members who want extra features like unlimited likes, rewinds, and seeing who viewed them.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">What is included in Agape Premium?</h3>
                                <div className="text-gray-600">
                                    <p className="mb-2">Premium members get the full experience:</p>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li><strong>Unlimited Super Likes:</strong> Superlike to directly message any user, skip the waiting period hoping they like you back to match.</li>
                                        <li><strong>Unlimited Rewinds:</strong> Accidentally passed on someone? Bring them back!</li>
                                        <li><strong>See Visitors:</strong> Unlock the list of people who have viewed your profile.</li>
                                        <li><strong>Unlimited Translations:</strong> Chat seamlessly with believers around the world.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">What are Super Likes?</h3>
                                <p className="text-gray-600">
                                    A Super Like tells someone you're really interested. They'll be notified immediately, and you can even send a direct message before they match with you!
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Safety & Privacy */}
                    <section>
                        <h2 className="font-heading text-2xl mb-6 text-secondary border-b-[3px] border-ink pb-2 inline-block">Safety & Privacy</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-xl mb-2">How do I report someone?</h3>
                                <p className="text-gray-600">
                                    Your safety is our #1 priority. If a user is behaving inappropriately, tap the "Report" button on their profile or in the chat menu. You can report for reasons like harassment, fake profiles, or offensive content.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">Can I block a user?</h3>
                                <p className="text-gray-600">
                                    Absolutely. Blocking a user prevents them from seeing your profile or contacting you ever again. You can manage your blocked list in Settings &gt; Interactions.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">What is "Hidden Mode"? (Premium Feature)</h3>
                                <p className="text-gray-600">
                                    Hidden Mode allows you to browse profiles without being seen by others. You will only be visible to the people you choose to like.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Technical Support */}
                    <section>
                        <h2 className="font-heading text-2xl mb-6 text-secondary border-b-[3px] border-ink pb-2 inline-block">Technical Support</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-xl mb-2">Why isn't my location updating?</h3>
                                <p className="text-gray-600">
                                    Agape uses your device's location to find matches near you. Make sure you've granted the app permission to access your location in your phone settings.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">I bought a subscription/credits but don't see them. What should I do?</h3>
                                <p className="text-gray-600">
                                    Try tapping "Restore Purchases" in the Shop or Settings menu. If that doesn't work, contact our support team with your receipt, and we'll get it sorted out immediately.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
};
