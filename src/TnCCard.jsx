import React from "react";

function TnCCard(props){
    const tncContent = (
        <div className="montserrat">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <p className="mb-4">
                "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
            </p>
        </div>
    )

    return(props.trigger) ? (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[9999]">
            {/* Main container */}
            <div className="bg-[#f8f7f3] rounded-lg shadow-xl w-full max-w-2xl relative p-2 flex flex-col">
                 {/* Close button */}
                <button 
                    onClick={() => props.setTrigger(false)}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="p-6 overflow-y-auto max-h-[70vh]">
                    {tncContent}
                </div>
            </div>
        </div>
    ) : "";
}

export default TnCCard