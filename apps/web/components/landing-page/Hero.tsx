import Image from "next/image";

import heroCover from "@/assets/images/hero-cover.png";
import heroIcon1 from "@/assets/icons/hero-icon-1.svg";
import heroIcon2 from "@/assets/icons/hero-icon-2.svg";
import heroIcon3 from "@/assets/icons/hero-icon-3.svg";
import heroIcon4 from "@/assets/icons/hero-icon-4.svg";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative overflow-hidden h-[542px]">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent w-[37vw] z-10" />
        <div className="absolute -top-96 right-0 -bottom-28 left-32 bg-gradient-to-r from-white via-white to-transparent w-[50vw] z-10 transform rotate-45" />
        <div className="absolute top-0 right-0 bottom-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent w-[75vw] z-10" />
        <div className="absolute right-0">
          <div className="relative h-[80vh] w-[82vw]">
            <Image
              src={heroCover}
              alt="Panglima Propertindo"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative flex items-center h-full z-30">
          <div className="container mx-auto">
            <div className="flex items-end">
              <h1 className="text-foreground text-4xl font-semibold leading-[54px]">
                <span className="text-primary">Hidup Nyaman & Berkah</span>{" "}
                dengan Properti
                <br />
                Syariah Kelas Dunia
                <span className="inline-flex -space-x-3 ml-4 align-middle">
                  <Image
                    src={heroIcon1}
                    alt="icon-1"
                    height={48}
                    width={48}
                    className="relative z-40"
                  />
                  <Image
                    src={heroIcon2}
                    alt="icon-2"
                    height={48}
                    width={48}
                    className="relative z-30"
                  />
                  <Image
                    src={heroIcon3}
                    alt="icon-3"
                    height={48}
                    width={48}
                    className="relative z-20"
                  />
                  <Image
                    src={heroIcon4}
                    alt="icon-4"
                    height={48}
                    width={48}
                    className="relative z-10"
                  />
                </span>
              </h1>
            </div>
            <p className="text-xl text-secondary-foreground leading-[30px] mt-10">
              Developer Properti Syariah terdepan menghadirkan solusi properti
              tanpa riba <br /> dan sesuai prinsip syariah. Daftar dan booking
              sekarang juga!
            </p>
            <button className="rounded-md bg-primary hover:bg-green-700 cursor-pointer text-white text-sm font-medium px-8 py-3 mt-10">
              Daftar & Beli NUB
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
