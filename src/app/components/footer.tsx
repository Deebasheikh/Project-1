import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 text-center">
            <p className="mb-4">&copy; 2024 Cross Stitch. All rights reserved.</p>
            <ul className="flex justify-center space-x-8">
                <li>
                    <Link href="mailto:info@CrossStitch.com" className="hover:underline">
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link href="https://instagram.com" className="hover:underline">
                        Instagram
                    </Link>
                </li>
            </ul>
        </footer>
    );
}


