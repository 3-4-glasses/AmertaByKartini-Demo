import React, { useState, useEffect } from "react";
import qrcode from './assets/qr_code_dummy.png';

function ContactUs() {
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    attachments: []
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load saved form data
  useEffect(() => {
    const savedFormData = localStorage.getItem('contactFormData');
    if (savedFormData) setFormData(JSON.parse(savedFormData));
  }, []);

  // Validate form and persist to localStorage
  useEffect(() => {
    const isValidEmail = (email) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isValid =
      formData.name.trim() !== '' &&
      isValidEmail(formData.email.trim()) &&
      formData.message.trim() !== '';

    setIsFormValid(isValid);
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const onFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      attachments: Array.from(e.target.files)
    }));
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      attachments: []
    });
    localStorage.removeItem('contactFormData');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    const httpFormData = new FormData();
    httpFormData.append("name", formData.name);
    httpFormData.append("email", formData.email);
    httpFormData.append("message", formData.message);

    formData.attachments.forEach((file) =>
      httpFormData.append("attachments", file)
    );

    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        body: httpFormData,
      });

      const result = await response.json();
      alert(result.message);
      handleClear();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const phone = "6281357734540";
    const message = "I want a personalized website!";
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}&app_absent=0`, "_blank");
  };

  const shareViaWhatsApp = () => {
    const message = 'I want a personalized website!';
    if (navigator.share) {
      navigator.share({
        title: 'Contact Us',
        text: 'Contact us on WhatsApp',
        url: 'https://qr.me-qr.com/AOHK4M9e',
      }).catch(console.error);
    } else {
      window.open(`https://api.whatsapp.com/send?phone=+6281357734540&text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  return (
    <div id="contact-us">
      <div className="w-full bg-[#F6F5F0] flex justify-center">
        <div className="w-full max-w-screen-xl">
          <div className="flex z-10">
            <button
              onClick={() => setActiveTab('contact')}
              className={`montserrat px-6 py-2 font-semibold rounded-t-lg border-t border-l border-r relative ${
                activeTab === 'contact' 
                  ? 'bg-[#BCD0DB] text-[#302F2B] z-20' 
                  : 'bg-[#a8c0d0] text-gray-600 z-10 border-transparent'
              }`}
            >
              Consultation
            </button>
            <button 
              onClick={() => setActiveTab('collaborate')}
              className={`montserrat px-6 py-2 font-semibold rounded-t-lg border-t border-l border-r relative ${
                activeTab === 'collaborate' 
                  ? 'bg-[#BCD0DB] text-[#302F2B] z-20' 
                  : 'bg-[#a8c0d0] text-gray-600 z-10 border-transparent'
              }`}
            >
              Collaborators
            </button>
          </div>
        </div>
      </div>
  
      <section className="w-full flex flex-col items-center justify-center bg-[#BCD0DB] py-6 pb-10 overflow-hidden px-4 relative min-h-[350px] lg:min-h-[450px]">
        {activeTab === 'contact' ? (
          <div className="w-full h-full flex items-center justify-center">
            <section className="h-auto w-full flex flex-col items-center justify-center bg-[#BCD0DB] pb-6 overflow-hidden px-4 lg:py-12">
                <h2 className="mt-6 mb-5 text-3xl md:text-4xl text-[#302F2B] text-center aileron-heavy">Contact us!</h2>

                {/* Main row container - aligns the main elements */}
                <div className="flex flex-row items-center justify-center gap-4 md:gap-8 w-full transform scale-90 md:scale-100">
                    {/* QR Code Section - container only for the QR image itself */}
                    <div className="flex flex-col items-center">
                        {/* QR code section with white rounded border */}
                        <div className="w-32 h-32 md:w-40 md:h-40 p-2 bg-white flex items-center justify-center rounded-lg shadow-md">
                            <img
                                src={qrcode}
                                alt="QR Code"
                                className="max-w-full max-h-full rounded-lg"
                                loading="lazy"
                            />
                        </div>
                        {/* Text positioned outside the aligned row */}
                        <p className="mt-4 text-lg md:text-xl font-medium text-center montserrat">Scan me!</p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center justify-center">
                        <div className="text-2xl md:text-3xl -mt-12 font-bold text-black montserrat">OR</div>
                    </div>

                    {/* WhatsApp section - contains only the button */}
                    <div className="flex flex-col items-center">
                        <button
                            onClick={openWhatsApp}
                            className="bg-[#E9DCC9] text-black font-medium py-2 px-4 md:py-3 md:px-6 rounded-3xl transition-colors w-38 md:w-49 cursor-pointer text-xs md:text-sm montserrat"
                        >
                            Add on WhatsApp!
                        </button>

                        {/* Share link positioned outside the aligned row */}
                        <div
                            onClick={shareViaWhatsApp}
                            className="mt-4 text-lg md:text-xl text-gray-800 font-medium cursor-pointer flex items-center justify-center gap-2"
                        >
                            <span className="montserrat">Share</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center px-2 md:px-8">
            {/* Main row container */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 w-full px-2">
  
              {/* Left side - Get in touch */}
              <div className="flex flex-col order-first justify-center items-center lg:items-start w-full lg:w-1/3 mb-6 lg:mb-0"> 
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#302F2B] text-center lg:text-left font-extrabold aileron-heavy">Get in touch!</h2>
  
                <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 md:gap-6 mt-4 w-full">
                  <div>
                    <h1 className="text-center lg:text-left font-semibold text-sm montserrat">CONTACT US</h1>
                    <h1 className="text-center lg:text-left text-sm montserrat-light">(+62) 813 1234 5678</h1>
                    <h1 className="text-center lg:text-left text-sm montserrat-light">loremipsum@gmail.com</h1>
                  </div>
  
                  <div>
                    <h1 className="text-center lg:text-left font-semibold text-sm montserrat">ADDRESS</h1>
                    <h1 className="text-center lg:text-left text-sm montserrat-light">Jl. Displayed Road Here, No. 10</h1>
                  </div>
                </div>
              </div>
            
              {/* Middle section - Form inputs */}
              <div className="flex flex-col order-last lg:order-first w-full lg:w-1/3 space-y-4">  
                <div>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent p-2 border-b-2 border-gray-200 focus:outline-none focus:border-[#302F2B] placeholder-gray-500 montserrat" 
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <input 
                    type="email"
                    id="email" 
                    className="w-full bg-transparent p-2 border-b-2 border-gray-200 focus:outline-none focus:border-[#302F2B] placeholder-gray-500 montserrat" 
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex flex-row justify-evenly gap-4 pt-2">
                  <button 
                    onClick={handleClear}
                    className="grow border-2 text-gray-600 font-semibold py-2 rounded montserrat"
                  >
                    Clear
                  </button>
                  <button 
                    onClick={handleSubmit}
                    disabled={!isFormValid || isSubmitting}
                    className={`grow border-2 border-none text-gray-600 font-semibold py-2 rounded montserrat ${
                      isFormValid ? 'bg-[#E9DCC9] cursor-pointer' : 'bg-gray-300 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </div>
  
              {/* Right section - Message */}
              <div className="w-full lg:w-1/3 relative">  
                <div className="relative w-full">
                  <textarea 
                    id="message" 
                    className="w-full bg-gray-100 p-2 border-b-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#302F2B] placeholder-gray-500 min-h-[120px] montserrat" 
                    placeholder="Say hello!"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {/* Upload button positioned at bottom right */}
                  <div className="absolute bottom-3 right-2">
                        <label className="bg-gray-100 hover:bg-gray-300 text-gray-700 rounded cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bi bi-upload" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                            </svg>
                            <input type="file" className="hidden" onChange={onFileChange} multiple/>
                        </label>
                    </div>
                </div>
                <p className="w-full text-wrap break-words montserrat">
                    {formData.attachments.length > 0 
                      ? "Attached files: " + formData.attachments.map((file) => file.name).join(", ")
                      : ""}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default ContactUs;