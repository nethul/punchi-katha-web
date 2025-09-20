import React from 'react';
import { User, Camera, BookOpen, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      title: "Tell Us About Your Child",
      description: "Share your child's name and age to personalize their story",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Camera,
      title: "Upload Their Photo",
      description: "Add a photo to make them the star of the story",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: BookOpen,
      title: "Choose Adventure",
      description: "Select from magical themes or create a custom plot",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Heart,
      title: "Receive Your Book",
      description: "Get your beautifully printed personalized storybook",
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            How The Magic Happens
          </h2>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">
            Creating your child's personalized storybook is as easy as 1, 2, 3, 4!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-800 mb-2">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-blue-600">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-1 bg-gradient-to-r from-pink-300 to-purple-300 rounded"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;