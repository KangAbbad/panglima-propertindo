import Image from "next/image";
import Link from "next/link";

import logoImage from "@/assets/images/panglima-propertindo-main-logo.png";

interface NavItem {
  label: string;
  href: string;
  isDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Project", href: "/project", isDropdown: true },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Pertanyaan Umum", href: "/faq" },
  { label: "Cara Booking", href: "/cara-booking" },
];

export function Header() {
  return (
    <header className="w-full bg-white py-2 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src={logoImage}
            alt="Panglima Propertindo"
            width={140}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              <div className="flex items-center">
                {item.label}
                {item.isDropdown && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </div>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="rounded-md border border-orange-400 px-4 py-2 text-sm font-medium text-orange-400 hover:bg-orange-50"
          >
            Daftar
          </Link>
          <Link
            href="/"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-green-800"
          >
            Masuk
          </Link>
        </div>
      </div>
    </header>
  );
}
