import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const CreateBookForm = () => {
  const [childName, setChildName] = useState('');
  const [storyPlot, setStoryPlot] = useState('');
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  const handleContinue = () => {
    // Handle form submission
    console.log('Form data:', { childName, storyPlot, uploadedImage });
  };

  return (
    <div className="min-h-screen bg-[url('/create-book-background.png')] bg-cover bg-center relative">
      {/* Header */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
        <div className="bg-[#F5F1E8]/95 backdrop-blur-md rounded-full border border-[#E5D5C8]/50 shadow-lg px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#E17B47]">
              Punchi Katha
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-base font-medium text-[#2B4C6F] hover:text-[#1e3a5f] transition-colors px-3 py-2 rounded-full">
                Home
              </a>
              <a href="#" className="text-base font-medium text-[#2B4C6F] hover:text-[#1e3a5f] transition-colors px-3 py-2 rounded-full">
                Books
              </a>
              <a href="#" className="text-base font-medium text-[#2B4C6F] hover:text-[#1e3a5f] transition-colors px-3 py-2 rounded-full">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#D85B9C] mb-12 leading-tight">
            Create Your<br />
            Magical Storybook!
          </h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#F4A261] rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div className="w-16 h-1 bg-[#7FB3D3]"></div>
              <div className="w-12 h-12 bg-[#7FB3D3] rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div className="w-16 h-1 bg-[#81C784]"></div>
              <div className="w-12 h-12 bg-[#81C784] rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-8">
            {/* Child's Name */}
            <div>
              <label className="block text-2xl font-semibold text-[#2B4C6F] mb-4">
                Child's Name
              </label>
              <input
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                className="w-full max-w-lg mx-auto px-6 py-4 bg-[#F5F1E8] border-2 border-[#E5D5C8] rounded-2xl text-lg text-[#2B4C6F] placeholder-gray-400 focus:outline-none focus:border-[#E17B47] transition-colors"
                placeholder="Enter your child's name"
              />
            </div>

            {/* Child's Photo */}
            <div>
              <label className="block text-2xl font-semibold text-[#2B4C6F] mb-4">
                Child's Photo
              </label>
              <div className="max-w-lg mx-auto">
                <label className="block w-full h-32 bg-white border-2 border-dashed border-[#7FB3D3] rounded-2xl cursor-pointer hover:border-[#5A9BD4] transition-colors">
                  <div className="flex flex-col items-center justify-center h-full">
                    <Upload className="w-8 h-8 text-[#7FB3D3] mb-2" />
                    <span className="text-lg font-medium text-[#2B4C6F]">
                      {uploadedImage ? uploadedImage.name : 'Upload image'}
                    </span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Story Plot */}
            <div>
              <label className="block text-2xl font-semibold text-[#2B4C6F] mb-4">
                Story Plot
              </label>
              <textarea
                value={storyPlot}
                onChange={(e) => setStoryPlot(e.target.value)}
                rows={6}
                className="w-full max-w-lg mx-auto px-6 py-4 bg-[#F5F1E8] border-2 border-[#E5D5C8] rounded-2xl text-lg text-[#2B4C6F] placeholder-gray-400 focus:outline-none focus:border-[#E17B47] transition-colors resize-none"
                placeholder="Story prompts for inspiration.
Aim for 250-500 words. Highlight preferences, character traits, and relationships.."
              />
            </div>

            {/* Continue Button */}
            <div className="pt-8">
              <button
                onClick={handleContinue}
                className="bg-[#E17B47] hover:bg-[#D16A36] text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBookForm;