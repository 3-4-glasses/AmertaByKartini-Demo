import React, { useState } from 'react';

function Footer() {
  // FAQ items with questions and answers
  const faqItems = [
    {
      id: 1,
      question: "Where are we located?",
      answer: "We are based in Jakarta, Indonesia."
    },
    {
      id: 2,
      question: "How to contact us personally?",
      answer: "You may reach us through WhatsApp, or via Email if you are a collaborator. Check our 'Collaborators' section in the Contact Us section!"
    },
    {
      id: 3,
      question: "What designs are permitted?",
      answer: "Feel free to talk to us for design consultation! Each occasion will be designed and carry out according to our customer needs and characteristic. You may look at our catalogue for references."
    },
    {
      id: 4,
      question: "Where do I pay?",
      answer: "Payment can be done through Bank Transfer after the contract is signed."
    }
  ];

  // Social media links with placeholder text instead of icons
  const socialMedia = [
    { id: 1, name: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>), 
    url: "https://www.instagram.com/nich_bry/" },
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
            <h3 className="text-lg text-[#494444] font-bold mb-2 montserrat">Commonly Asked Questions</h3>
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
                      <h4 className="font-medium text-sm montserrat">{item.question}</h4>
                    </div>
                  ))}
                </div>
              ) : (
                // Show selected FAQ with back button
                <div>
                  <button 
                    className="flex items-center mb-2 text-[#A49797] transition-colors text-sm montserrat"
                    onClick={() => setActiveFaq(null)}
                  >
                    <span className="mr-1 text-[#A49797]">←</span>
                    Back
                  </button>
                  
                  <div className="bg-[#BCD0DB] p-3 rounded montserrat-light">
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
            <h3 className="text-lg font-bold mb-2 text-left md:text-center montserrat">Social Media</h3>
            <div className="flex justify-center">
              <div className="flex gap-3 max-w-xs">
                {socialMedia.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-[#D9D9D9] hover:bg-gray-400 p-3 rounded-full transition-colors h-12 w-12"
                    aria-label={`Visit our ${item.name} page`}
                  >
                    {/* Placeholder for icon */}
                    <span className="text-sm">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm montserrat">
          <p>&copy; {new Date().getFullYear()} Amerta By Kartini. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;