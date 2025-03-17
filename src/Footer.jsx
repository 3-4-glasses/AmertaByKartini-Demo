import React, { useState } from 'react';

function Footer() {
  // FAQ items with questions and answers
  const faqItems = [
    {
      id: 1,
      question: "Where are we located?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 2,
      question: "How to contact us personally?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      question: "What designs are permitted?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 4,
      question: "Where do I pay?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  // Social media links with placeholder text instead of icons
  const socialMedia = [
    { id: 1, name: "Facebook", url: "https://facebook.com" },
    { id: 2, name: "Twitter", url: "https://twitter.com" },
    { id: 3, name: "Instagram", url: "https://instagram.com" },
    { id: 4, name: "YouTube", url: "https://youtube.com" }
  ];

  // State to track which FAQ is active, null means no FAQ is selected
  const [activeFaq, setActiveFaq] = useState(null);

  // Toggle FAQ visibility
  function toggleFaq(id) {
    if (activeFaq === id) {
      setActiveFaq(null);
    } else {
      setActiveFaq(id);
    }
  }

  return (
    <>
    <footer className="bg-[#F6F5F0] text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          
          {/* FAQ Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-lg text-[#494444] font-bold mb-2">Commonly Asked Questions</h3>
            <div className="bg-[#F6F5F0] p-2 h-48 overflow-y-auto">
              {activeFaq === null ? (
                // Show all questions when no FAQ is selected
                <div className="space-y-1">
                  {faqItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="p-2 bg-[#F6F5F0] text-[#A49797] rounded cursor-pointer transition-colors"
                      onClick={() => toggleFaq(item.id)}
                    >
                      <h4 className="font-medium text-sm">{item.question}</h4>
                    </div>
                  ))}
                </div>
              ) : (
                // Show selected FAQ with back button
                <div>
                  <button 
                    className="flex items-center mb-2 text-[#A49797] transition-colors text-sm"
                    onClick={() => setActiveFaq(null)}
                  >
                    <span className="mr-1 text-[#A49797]">←</span>
                    Back
                  </button>
                  
                  <div className="bg-[#BCD0DB] p-3 rounded">
                    <h4 className="font-medium mb-1 text-[#494444]">
                      {faqItems.find(item => item.id === activeFaq)?.question}
                    </h4>
                    <p className="text-white text-sm">
                      {faqItems.find(item => item.id === activeFaq)?.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Social Media Section */}
          <div className="w-full md:w-1/2 text-[#494444]">
            <h3 className="text-lg font-bold mb-2 text-left md:text-center">Social Media</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-3 max-w-xs">
                {socialMedia.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-[#D9D9D9] hover:bg-gray-600 p-3 rounded-full transition-colors h-12 w-12"
                    aria-label={`Visit our ${item.name} page`}
                  >
                    {/* Placeholder for icon */}
                    <span className="text-sm">{item.name.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Amerta By Kartini. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;