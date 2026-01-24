import React from 'react';
import { Card } from './ui/Card';
import { Heart, MessageCircle, Clock, Gift, Hand } from 'lucide-react';

export const LoveLanguages: React.FC = () => {
    const languages = [
        { name: 'Words of Affirmation', icon: <MessageCircle size={24} />, color: 'bg-primary' },
        { name: 'Quality Time', icon: <Clock size={24} />, color: 'bg-secondary' },
        { name: 'Receiving Gifts', icon: <Gift size={24} />, color: 'bg-highlight' },
        { name: 'Acts of Service', icon: <Hand size={24} />, color: 'bg-indigo-400' },
        { name: 'Physical Touch', icon: <Heart size={24} />, color: 'bg-rose-400' },
    ];

    return (
        <section className="py-12">
            <div className="bg-cream border-[3px] border-ink rounded-[36px] p-8 md:p-16 relative overflow-hidden shadow-neo">

                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">

                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-block bg-white px-4 py-1 rounded-full border-[2px] border-ink text-sm font-bold mb-4 shadow-[2px_2px_0px_#1a1a1a]">
                            Coming Feature
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl mb-6">
                            Speak the Same <br />
                            <span className="text-primary">Heart Language</span>
                        </h2>
                        <p className="font-body text-xl text-gray-700 leading-relaxed mb-8">
                            Don't just match based on looks. Find someone who understands how you give and receive love. Filter by Love Language™ to find your deepest connection.
                        </p>
                    </div>

                    <div className="flex-1 w-full max-w-md">
                        <div className="grid grid-cols-2 gap-4">
                            {languages.map((lang, index) => (
                                <Card
                                    key={index}
                                    bgColor="bg-white"
                                    className={`flex flex-col items-center p-4 ${index === 4 ? 'col-span-2' : ''} hover:-translate-y-1 transition-transform`}
                                >
                                    <div className={`w-12 h-12 rounded-full ${lang.color} border-[2px] border-ink flex items-center justify-center mb-2 shadow-[2px_2px_0px_#1a1a1a] text-white`}>
                                        {lang.icon}
                                    </div>
                                    <span className="font-heading text-lg text-center">{lang.name}</span>
                                </Card>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
