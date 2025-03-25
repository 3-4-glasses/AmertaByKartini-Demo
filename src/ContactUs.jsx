import React from "react";
import qrcode from './assets/wa_qrcode.png';

function ContactUs() {
    const openWhatsApp = () => {
        window.open("https://qr.me-qr.com/yAycvgUg", "_blank");
    };

    const shareViaWhatsApp = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Contact Us',
                text: 'Contact us on WhatsApp',
                url: 'https://qr.me-qr.com/yAycvgUg',
            })
                .catch((error) => console.error('Error sharing:', error));
        } else {
            window.open('https://api.whatsapp.com/send?text=Contact%20us%20on%20WhatsApp!%20https://wa.me/+6287786576543', '_blank');
        }
    }

    return (
        <div id="contact-us">
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
                @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
                `}
            </style>
            <section className="w-full flex flex-col items-center justify-center bg-[#BCD0DB] pb-6 overflow-hidden px-4">
                <h2 className="mt-6 mb-5 text-3xl md:text-4xl text-[#302F2B] text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Contact us!</h2>

                {/* Main row container - aligns the main elements */}
                <div className="flex flex-row items-center justify-center gap-4 md:gap-8 w-full transform scale-90 md:scale-100">
                    {/* QR Code Section - container only for the QR image itself */}
                    <div className="flex flex-col items-center">
                        {/* QR code section with white rounded border */}
                        <div className="w-32 h-32 md:w-40 md:h-40 p-1 bg-white flex items-center justify-center rounded-lg shadow-md">
                            <img
                                src={qrcode}
                                alt="QR Code"
                                className="max-w-full max-h-full"
                            />
                        </div>
                        {/* Text positioned outside the aligned row */}
                        <p className="mt-4 text-lg md:text-xl font-medium text-center" style={{ fontFamily: "Lato, sans-serif" }}>Scan me!</p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center justify-center">
                        <div className="text-2xl md:text-3xl -mt-12 font-bold text-black" style={{ fontFamily: 'Playfair Display, serif' }}>OR</div>
                    </div>

                    {/* WhatsApp section - contains only the button */}
                    <div className="flex flex-col items-center">
                        <button
                            onClick={openWhatsApp}
                            className="bg-[#E9DCC9] text-black font-medium py-2 px-4 md:py-3 md:px-6 rounded-4xl transition-colors w-38 md:w-49 cursor-pointer text-sm md:text-base"
                            style={{ fontFamily: "Lato, sans-serif" }}
                        >
                            Add on WhatsApp!
                        </button>

                        {/* Share link positioned outside the aligned row */}
                        <div
                            onClick={shareViaWhatsApp}
                            className="mt-4 text-lg md:text-xl text-gray-800 font-medium cursor-pointer flex items-center justify-center gap-2"
                        >
                            <span style={{ fontFamily: "Lato, sans-serif" }}>Share</span>
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
    );
}

export default ContactUs;