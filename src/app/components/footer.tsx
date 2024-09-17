import Link from 'next/link';

export default function Footer(props: { logos: boolean }) {
  return (
      <div>
        {props.logos ?
          <p className="text-xs md:text-sm">Logos displayed on this page are owned by their respective companies, and I make no claim of ownership except for the ACLD pinwheel and the Wellness flower.</p>:
          <div className="p-8 text-center max-w-7xl mx-auto">
            <p className="text-xs md:text-sm">Website designed by me, developed with Next.js, and deployed using Azure Cloud Platform. Usage of my website or services is governed by my <Link href="/tos" className="text-blue-500">Terms of Service and Privacy Policy</Link>. Thanks for visiting!</p>
          </div>
        }
      </div>
  );
}