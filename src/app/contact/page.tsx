export default function Contact() {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-6">We're here to help you</p>
            <h1 className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Contact Information</h1>
            <p className="text-center text-gray-600 mb-4">
                Cross Stitch LuckyOne Mall<br />
                Lucky One Mall, 2nd Floor, LA-2/B, Block 21, Main Rashid Minhas Rd,<br />
                Block 21 Gulberg Town, Karachi
            </p>
            <h3 className="text-xl font-medium text-gray-700 mt-4">Email:</h3> 
            <p className="text-gray-600 mb-6">sales@mail.us.crossstitch.pk</p>
            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-2">Opening Hours</h2>
            <p className="text-center text-gray-600">
                Our customer care representative will be available for support from <br />
                (10AM to 5.30PM) Mon to Sat
            </p>
        </div>
    );
}
