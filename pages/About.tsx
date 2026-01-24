import React from 'react';
import { Users, Heart, Anchor, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const About: React.FC = () => {
    return (
        <main className="container mx-auto px-4 max-w-6xl py-12 pb-24 space-y-20">

            {/* Hero Section */}
            <section className="text-center max-w-4xl mx-auto space-y-6">
                <h1 className="font-heading text-5xl md:text-7xl text-primary leading-tight">
                    Faith. Love. <br />
                    <span className="text-ink">Covenant.</span>
                </h1>
                <p className="font-body text-2xl text-gray-700 leading-relaxed">
                    We are more than a dating app. We are a movement to restore the sanctity of Christian relationships.
                </p>
            </section>

            {/* Meaning of Agape */}
            <section className="bg-white border-[3px] border-ink rounded-[36px] p-8 md:p-16 shadow-neo overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="font-heading text-4xl text-primary">The Meaning of Agape</h2>
                        <p className="font-body text-xl text-gray-700 leading-relaxed">
                            In Greek, <strong>Agape</strong> represents the highest form of love—unconditional, sacrificial, and divine. It is the love God has for us, and the love we are called to embody.
                        </p>
                        <p className="font-body text-xl text-gray-700 leading-relaxed">
                            We built this platform not just for swiping, but for connecting hearts that yearn for a God-given union. As it is written, <span className="italic text-primary">"the greatest of these is love."</span>
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-sm bg-highlight border-[3px] border-ink rounded-full aspect-square flex items-center justify-center p-8 shadow-[8px_8px_0px_#1a1a1a]">
                            <Heart size={120} strokeWidth={1.5} className="text-white drop-shadow-md" fill="#FF4757" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="grid md:grid-cols-3 gap-8">
                <Card className="flex flex-col items-center text-center p-8 bg-cream hover:-translate-y-2 transition-transform">
                    <div className="w-16 h-16 bg-primary rounded-full border-[3px] border-ink flex items-center justify-center mb-6 shadow-sm text-white">
                        <Anchor size={32} />
                    </div>
                    <h3 className="font-heading text-2xl mb-4">Faith-First</h3>
                    <p className="font-body text-lg text-gray-700">
                        We don't hide our beliefs in the fine print. Faith is the foundation, not a filter. We are building on the rock.
                    </p>
                </Card>

                <Card className="flex flex-col items-center text-center p-8 bg-white hover:-translate-y-2 transition-transform">
                    <div className="w-16 h-16 bg-secondary rounded-full border-[3px] border-ink flex items-center justify-center mb-6 shadow-sm text-white">
                        <Heart size={32} />
                    </div>
                    <h3 className="font-heading text-2xl mb-4">Intentionality</h3>
                    <p className="font-body text-lg text-gray-700">
                        No casual dating. No ghosting. We curate matches for those serious about finding their <span className="italic">Genesis 2:24</span> partner.
                    </p>
                </Card>

                <Card className="flex flex-col items-center text-center p-8 bg-cream hover:-translate-y-2 transition-transform">
                    <div className="w-16 h-16 bg-highlight rounded-full border-[3px] border-ink flex items-center justify-center mb-6 shadow-sm text-white">
                        <Users size={32} />
                    </div>
                    <h3 className="font-heading text-2xl mb-4">Community</h3>
                    <p className="font-body text-lg text-gray-700">
                        Join a "Tribe" of believers who share your values. You aren't just finding a partner; you're joining a family.
                    </p>
                </Card>
            </section>

            {/* Call to Action */}
            <section className="text-center py-12">
                <h2 className="font-heading text-3xl md:text-4xl mb-6">Ready to find your person?</h2>
                <a
                    href="/"
                    className="inline-flex items-center gap-3 bg-ink text-white font-heading text-xl px-8 py-4 rounded-xl border-[3px] border-ink shadow-neo hover:shadow-neo-hover hover:-translate-y-1 transition-all"
                >
                    Join the Tribe <ArrowRight size={24} />
                </a>
            </section>

        </main>
    );
};
