import Link from 'next/link';

export default function Footer() {
  return (
      <div className="p-8 text-center max-w-7xl mx-auto">
         <p className="text-xs md:text-sm">Website designed by me, developed with Next.js, and deployed using Azure Cloud Platform. Usage of my website or services is governed by my <Link href="/tos" className="text-blue-500">Terms of Service and Privacy Policy</Link>.</p>
      </div>
  );
}