import React from "react";

function TnCCard(props){
    const tncContent = (
        <div>
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl.</p>
            <p className="mb-4">Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            {/* Add more paragraphs as needed to test scrolling */}
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl.</p>
            <p className="mb-4">Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl.</p>
            <p className="mb-4">Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                {/* Footer with download button */}
                <div className="border-t border-gray-200 p-4 flex justify-end">
                    <button 
                    className="bg-[#77815C] hover:bg-[#5c644a] text-white px-4 py-2 rounded-md flex items-center"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Document
                    </button>
                </div>
            </div>
        </div>
    ) : "";
}

export default TnCCard