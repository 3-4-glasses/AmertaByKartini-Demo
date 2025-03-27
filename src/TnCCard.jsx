import React from "react";

function TnCCard(props){
    const tncContent = (
        <div className="montserrat">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <p className="mb-4">Payment dengan DP sebesar 50% diawal dari total payment & pelunasan <b>wajib</b> dilakukan max. H-3 sebelum tanggal acara.</p>
            <p className="mb-4">Apabila telat melunasi di H-3, dikenakan <b>penalty charge</b> seharga Rp. 50.000,-/jam.</p>
            <p className="mb-4">Bila ingin request <b>posisi set up decor</b>, wajib menginfokan admin max. H-3 dari tanggal acara, 
            jika tidak ada info/request maka posisi decor akan disesuaikan oleh team kami di lokasi. </p>
            <p className="mb-4">Setelah melakukan payment, kami <b>tidak menerima refund</b> dan komplain dengan alasan apapun terhadap hal yang 
            sudah tercantum pada sudah notes yang sudah kami sediakan.</p>
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