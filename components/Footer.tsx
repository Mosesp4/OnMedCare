'use client';

import Image from 'next/image';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  logoSrc?: string;
  logoAlt?: string;
  brandName?: string;
  brandHref?: string;
  footerLinks?: FooterLink[];
  copyrightYear?: number;
  copyrightText?: string;
  copyrightBrandName?: string;
  copyrightBrandHref?: string;
}

const Footer: React.FC<FooterProps> = ({
  logoAlt = "ONMED Care Logo",
  brandName = "ONMED Care",
  brandHref = "/",
  footerLinks = [
    { label: "About", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Licensing", href: "#" },
    { label: "Contact", href: "#" }
  ],
  copyrightYear = new Date().getFullYear(),
  copyrightText = "All Rights Reserved.",
  copyrightBrandName = "ONMED Care™",
  copyrightBrandHref = "/"
}) => {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link 
            href={brandHref} 
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image 
              src="/assets/icons/logo.jpg" 
              alt={logoAlt}
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.href} 
                  className={`hover:underline ${
                    index === footerLinks.length - 1 ? '' : 'me-4 md:me-6'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {copyrightYear} {' '}
          <Link href={copyrightBrandHref} className="hover:underline">
            {copyrightBrandName}
          </Link>
          . {copyrightText}
        </span>
      </div>
    </footer>
  );
};

export default Footer;