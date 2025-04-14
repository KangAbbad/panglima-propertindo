import { Mail, Phone } from "lucide-react";
import Link from "next/link";

import { PrimaryLogo } from "./Header/PrimaryLogo";

import FacebookIcon from "@/assets/icons/facebook-icon.svg";
import InstagramIcon from "@/assets/icons/instagram-icon.svg";
import XFormerTwitterIcon from "@/assets/icons/x-former-twitter-icon.svg";
import WhatsappIcon from "@/assets/icons/whatsapp-icon.svg";

export function Footer() {
  return (
    <footer>
      <div className="bg-[#282835] py-10 px-4 md:py-14 md:px-0">
        <div className="container flex flex-col md:flex-row gap-8 mx-auto">
          <div className="flex flex-col flex-2 items-start">
            <PrimaryLogo />
            <p className="text-primary-foreground text-sm mt-5">
              Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur
            </p>
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <h2 className="text-primary-foreground text-sm font-medium">
              Panglima Propertindo
            </h2>
            <Link href="#" className="text-primary-foreground text-sm">
              Tentang Kami
            </Link>
            <Link href="#" className="text-primary-foreground text-sm">
              Project
            </Link>
            <Link href="#" className="text-primary-foreground text-sm">
              Pertanyaan Umum
            </Link>
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <h2 className="text-primary-foreground text-sm font-medium">
              Kontak
            </h2>
            <Link
              href="#"
              className="flex gap-1 items-center text-primary-foreground text-sm"
            >
              <WhatsappIcon height={16} width={16} fill="#FFFFFF" />
              081224090989 (chat)
            </Link>
            <Link
              href="#"
              className="flex gap-1 items-center text-primary-foreground text-sm"
            >
              <Phone size={16} color="#FFFFFF" />
              (021) 2829-0901
            </Link>
            <Link
              href="#"
              className="flex gap-1 items-center text-primary-foreground text-sm"
            >
              <Mail size={16} color="#FFFFFF" />
              Layanan@panglimapropertindo.com
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary py-6 px-4 md:px-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-5 mx-auto">
          <p className="text-primary-foreground text-sm text-center">
            ©Copyright Panglima Propertindo 2025. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#">
              <FacebookIcon height={28} width={28} fill="#FFFFFF" />
            </Link>
            <Link href="#">
              <InstagramIcon height={28} width={28} fill="#FFFFFF" />
            </Link>
            <Link href="#">
              <XFormerTwitterIcon height={28} width={28} fill="#FFFFFF" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
