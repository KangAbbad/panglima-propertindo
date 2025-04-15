import Image, { StaticImageData } from "next/image";

import { cn } from "@workspace/ui/lib/utils";
import HouseIcon from "@/assets/icons/house-icon.svg";
import GraveIcon from "@/assets/icons/grave-icon.svg";
import MapLocationIcon from "@/assets/icons/map-location-icon.svg";
import ParkIcon from "@/assets/icons/park-icon.svg";
import heroCover from "@/assets/images/hero-cover.png";
import heroBgIcon1 from "@/assets/images/bg-hero-icon-1.jpg";
import heroBgIcon2 from "@/assets/images/bg-hero-icon-2.jpg";
import heroBgIcon3 from "@/assets/images/bg-hero-icon-3.jpg";
import heroBgIcon4 from "@/assets/images/bg-hero-icon-4.jpg";

type HeroIconProps = {
  src: StaticImageData;
  icon: React.ReactNode;
  className?: string;
};

function HeroIcon(props: HeroIconProps) {
  const { src, icon, className } = props;

  return (
    <div className={cn("relative rounded-full overflow-hidden", className)}>
      <Image src={src} alt="hero-icon" fill priority className="object-cover" />
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        {icon}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative">
      <div className="hidden md:block relative overflow-hidden h-[542px]">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary to-transparent w-[37vw] z-10" />
        <div className="absolute -top-96 right-0 -bottom-28 left-32 bg-gradient-to-r from-secondary via-secondary to-transparent w-[50vw] z-10 transform rotate-45" />
        <div className="absolute top-0 right-0 bottom-0 bg-gradient-to-r from-secondary/40 via-secondary/10 to-transparent w-[75vw] z-10" />
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
                  <HeroIcon
                    src={heroBgIcon1}
                    icon={<HouseIcon height={16} width={16} />}
                    className="h-[48px] w-[48px] z-40"
                  />
                  <HeroIcon
                    src={heroBgIcon2}
                    icon={<GraveIcon height={16} width={16} />}
                    className="h-[48px] w-[48px] z-30"
                  />
                  <HeroIcon
                    src={heroBgIcon3}
                    icon={<MapLocationIcon height={16} width={16} />}
                    className="h-[48px] w-[48px] z-20"
                  />
                  <HeroIcon
                    src={heroBgIcon4}
                    icon={<ParkIcon height={16} width={16} />}
                    className="h-[48px] w-[48px] z-10"
                  />
                </span>
              </h1>
            </div>
            <p className="text-xl text-secondary-foreground leading-[30px] mt-10">
              Developer Properti Syariah terdepan menghadirkan solusi properti
              tanpa riba <br /> dan sesuai prinsip syariah. Daftar dan booking
              sekarang juga!
            </p>
            <button className="rounded-md bg-primary hover:bg-green-700 text-white text-sm font-medium px-8 py-3 mt-10">
              Daftar & Beli NUB
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden relative overflow-hidden">
        <div className="absolute inset-0 h-[87vh] w-screen">
          <Image
            src={heroCover}
            alt="Panglima Propertindo"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-secondary/70 h-[87vh] w-screen" />
        <div className="relative flex items-center h-[87vh] z-30">
          <div className="container px-4">
            <h1 className="text-3xl font-semibold leading-[45px]">
              <span className="text-primary">Hidup Nyaman & Berkah</span>
              <span className="text-foreground">
                {" "}
                dengan Properti{" "}
                <span className="mr-4">Syariah Kelas Dunia</span>
              </span>
              <span className="inline-flex -space-x-3 align-middle">
                <HeroIcon
                  src={heroBgIcon1}
                  icon={<HouseIcon height={16} width={16} />}
                  className="h-[48px] w-[48px] z-40"
                />
                <HeroIcon
                  src={heroBgIcon2}
                  icon={<GraveIcon height={16} width={16} />}
                  className="h-[48px] w-[48px] z-30"
                />
                <HeroIcon
                  src={heroBgIcon3}
                  icon={<MapLocationIcon height={16} width={16} />}
                  className="h-[48px] w-[48px] z-20"
                />
                <HeroIcon
                  src={heroBgIcon4}
                  icon={<ParkIcon height={16} width={16} />}
                  className="h-[48px] w-[48px] z-10"
                />
              </span>
            </h1>
            <p className="text-sm text-secondary-foreground leading-6 mt-8">
              Developer Properti Syariah terdepan menghadirkan solusi properti
              tanpa riba dan sesuai prinsip syariah. Daftar dan booking sekarang
              juga!
            </p>
            <button className="rounded-md bg-primary hover:bg-green-700 text-white text-sm font-medium px-8 py-3 mt-9">
              Daftar & Beli NUB
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
