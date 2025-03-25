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
            
            <section className="w-full flex flex-col items-center justify-center bg-[#BCD0DB] py-6 pb-10 overflow-hidden px-4">
               

                {/* Main row container - aligns the main elements */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 w-full transform scale-90 lg:scale-100">

                    <div className="lg:grow-2 order-first"></div>

                     {/* Wrapper of the LEFT side. - Get in touch, address, etc.*/}
                    <div className="flex flex-col order-first justify-center items-center "> 

                        <h2 className="mt-6 mb-5 text-5xl md:text-6xl text-[#302F2B] text-center lg:text-left font-extrabold" style={{ fontFamily: 'Playfair Display, serif' }}>Get in touch!</h2>

                        <div className = "flex flex-row justify-center lg:justify-stretch gap-3 md:gap-1">
                            <div className ="pt-5 grow-2 lg:py-0">
                            <h1 className ="text-center md:text-left font-semibold">CONTACT US</h1>
                            <h1 className ="text-center md:text-left">(+62) 813 1234 5678</h1>
                            <h1 className ="text-center md:text-left">loremipsum@gmail.com</h1>
                            </div>

                            <div className="pt-5 grow-3 lg:py-0">
                            <h1 className="text-center md:text-left font-semibold">ADDRESS</h1>
                            <h1 className ="text-center md:text-left">Jl. Displayed Road Here, No. 10</h1>
                            </div>
                        </div>
                        
                    </div>
                
                     {/* Wrapper of the MIDDLE side. - essentially the two input forms and buttons*/}

                      {/* Just a minor tip for any people working with textareas, 
                      to get it responsive with a long width you have to w-full the div above the textarea and add the margin from there! 
                      I spent way too long trying to figure this out, hopefully this saves you some fucking headache.*/}

                     <div className="flex flex-col order-last lg:order-first grow-1 shrink-0 ">  
                        <div className="pb-3 py-5 w-full mr-50">
                       <textarea rows="1" id="name" className="bg-gray-200 p-1 border-gray-300 border-2 placeholder:text-gray-400 placeholder:font-medium lg:block w-full" placeholder="Name"></textarea>
                       </div>

                       <div className="grow pb-3">
                       <textarea rows="1" id="email" className="bg-gray-200 p-1 border-gray-300 border-2 placeholder:text-gray-400 placeholder:font-medium lg:block w-full" placeholder="Email Address"></textarea>
                       </div>

                       <div className="grow pt-5 flex flex-row justify-evenly gap-5">
                            <button className="grow border-2 text-gray-600 font-semibold">Clear</button>
                            <button className="grow border-3 text-[#baa481] border-[#D7CBB8] bg-[#E9DCC9] font-semibold"> Send</button>
                       </div>

                     </div>

                     {/* Wrapper of the RIGHT side. - big text form*/}
                     <div className="grow-1 shrink-0">  
                        <div className="grow order-first w-full mr-50">
                       <textarea id="message" rows="1" className="bg-gray-200 p-1 border-gray-300 border-2 placeholder:text-gray-400 placeholder:font-medium  mt-5 pb-15  lg:pb-30 block w-full"  placeholder="Message"></textarea>
                       </div>
                     </div>

                      <div className="lg:grow-2 order-last"></div>

                 
                </div>
            </section>
        </div>
    );
}

export default ContactUs;