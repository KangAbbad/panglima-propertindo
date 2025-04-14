import Image from "next/image";

import callToActionBgPattern from "@/assets/images/call-to-action-bg-pattern.png";
import { Button } from "@workspace/ui/components/button";
import { ShoppingCart } from "lucide-react";

export function CallToAction() {
  return (
    <section className="bg-secondary p-4 md:p-10">
      <div className="relative bg-[#FA9500] rounded-xl py-8 px-4 md:p-20">
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-primary-foreground text-2xl md:text-3xl font-semibold text-center">
            Booking Sekarang!
          </h1>
          <h2 className="text-primary-foreground text-sm md:text-base text-center mt-5">
            Tunggu apalagi, booking sekarang property syariah impian Anda
          </h2>
          <Button className="bg-primary cursor-pointer py-3 px-4 mt-5 md:mt-10">
            <ShoppingCart size={16} /> Daftar & Beli NUB
          </Button>
        </div>
        <div className="absolute right-0 bottom-0 left-0 h-[80px] md:h-[127px]">
          <Image
            src={callToActionBgPattern}
            alt="call-to-action-bg-pattern"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
