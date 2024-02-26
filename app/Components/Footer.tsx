// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 w-full bg-gray-800 text-white">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/sponsor">
            Sponsor
            </Link>
          </li>
          <li>
            <Link href="/donate">
            Donate
            </Link>
          </li>
        </ul>
        <div>
          <p>© 2024 Dog NGO. All rights reserved.</p>
        </div>
      </nav>
    </footer>
  );
}
