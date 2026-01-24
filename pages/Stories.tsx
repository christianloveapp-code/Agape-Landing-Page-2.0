import React from 'react';
import { Heart } from 'lucide-react';

export const Stories: React.FC = () => {
  const stories = [
    {
      names: "Sarah & Michael",
      date: "Married June 2025",
      story: "We met through our shared love for worship music. What started as conversations about our favorite hymns turned into late-night talks about faith, family, and our dreams. God's timing was perfect!",
      image: "👰‍♀️🤵‍♂️"
    },
    {
      names: "Jessica & David",
      date: "Engaged December 2025",
      story: "We both swiped right on each other's profiles because we were both passionate about youth ministry. Our first date was at a coffee shop after church, and we've been inseparable ever since. He proposed during a Christmas Eve service!",
      image: "💑"
    },
    {
      names: "Rachel & Joshua",
      date: "Dating Since March 2025",
      story: "I never thought I'd find someone who shared my passion for missions work. Joshua and I matched and discovered we had both been to the same mission trip in Haiti (just different years!). Now we're planning our next trip together.",
      image: "❤️"
    }
  ];

  return (
    <main className="container mx-auto px-4 max-w-6xl py-12 pb-24">
      <div className="text-center mb-16">
        <h1 className="font-heading text-5xl md:text-6xl mb-6 text-primary">Success Stories</h1>
        <p className="font-body text-2xl text-gray-600 max-w-2xl mx-auto">
          Real couples who found love through faith and connection
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {stories.map((story, index) => (
          <div key={index} className="bg-white border-[3px] border-ink p-6 shadow-neo hover:shadow-neo-hover transition-all">
            <div className="text-6xl mb-4 text-center">{story.image}</div>
            <h3 className="font-heading text-2xl mb-2 text-center">{story.names}</h3>
            <p className="font-body text-sm text-gray-500 text-center mb-4">{story.date}</p>
            <p className="font-body text-lg text-gray-700">{story.story}</p>
            <div className="flex justify-center mt-4">
              <Heart className="text-primary" fill="#FF4757" />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-secondary/20 border-[3px] border-ink p-8 md:p-12 text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-4">Your Story Could Be Next!</h2>
        <p className="font-body text-xl text-gray-700 mb-6">
          Join thousands of Christian singles who are finding meaningful relationships built on faith.
        </p>

      </div>

      <div className="mt-16 text-center">
        <p className="font-body text-gray-500 italic">
          * All stories are from beta testers who tried early versions of Agape.
          Names and details have been changed to protect privacy.
        </p>
      </div>
    </main>
  );
};
