import Image from "next/image";

import featuresBgPattern from "@/assets/images/features-bg-pattern.png";
import RedXIcon from "@/assets/icons/red-x-icon.svg";
import TanpaRibaIcon from "@/assets/icons/tanpa-riba-icon.svg";
import TanpaKprBankIcon from "@/assets/icons/tanpa-kpr-bank.svg";
import TanpaSitaIcon from "@/assets/icons/tanpa-sita-icon.svg";
import TanpaDendaIcon from "@/assets/icons/tanpa-denda-icon.svg";
import TanpaPenaltiIcon from "@/assets/icons/tanpa-penalti-icon.svg";
import TanpaAkadBermasalahIcon from "@/assets/icons/tanpa-akad-bermasalah.svg";

export function Features() {
  const featureList = [
    {
      icon: TanpaRibaIcon,
      title: "Tanpa Riba",
      description:
        "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
    },
    {
      icon: TanpaKprBankIcon,
      title: "Tanpa KPR Bank",
      description:
        "Tanpa melibatkan pembiayaan bank konvensional, menghindari riba, gharar (ketidakpastian), dan maysir (spekulasi)",
    },
    {
      icon: TanpaSitaIcon,
      title: "Tanpa Sita",
      description:
        "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
    },
    {
      icon: TanpaDendaIcon,
      title: "Tanpa Denda",
      description:
        "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
    },
    {
      icon: TanpaPenaltiIcon,
      title: "Tanpa Penalti",
      description:
        "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
    },
    {
      icon: TanpaAkadBermasalahIcon,
      title: "Tanpa Akad Bermasalah",
      description:
        "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
    },
  ];

  return (
    <section className="relative bg-[#282835] py-10 px-4 md:py-20 md:px-[120px]">
      <Image
        src={featuresBgPattern}
        alt="features-bg-pattern"
        fill
        priority
        className="object-cover"
      />
      <div className="relative z-10">
        <div className="md:hidden">
          <h1 className="text-white text-2xl font-semibold leading-8">
            Kenapa Harus
            <br />
            <span className="text-[#FA9500]">Panglima Propertindo?</span>
          </h1>
          <p className="text-white text-sm leading-7 mt-5">
            Dengan komitmen penuh pada prinsip-prinsip syariah, kami
            menghadirkan properti berkualitas tinggi yang memberikan keamanan
            dan keberkahan bagi Anda dan keluarga.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <div className="md:flex-[1_0_auto]">
            <h1 className="text-white text-3xl font-semibold leading-10">
              Kenapa Harus
              <br />
              <span className="text-[#FA9500]">Panglima Propertindo?</span>
            </h1>
          </div>
          <p className="text-white text-base leading-7">
            Dengan komitmen penuh pada prinsip-prinsip syariah, kami
            menghadirkan properti berkualitas tinggi yang memberikan keamanan
            dan keberkahan bagi Anda dan keluarga.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featureList.map((featureItem, featureIdx) => (
              <div
                key={`${featureItem.title}-${featureIdx}`}
                className="relative group rounded-lg border border-primary hover:border-[#FA9500] bg-primary min-h-[148px] transition-colors p-5"
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <featureItem.icon height={48} width={48} />
                    <div className="absolute -right-1.5 -bottom-1.5 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/4 group-hover:-translate-y-[25%] transition-all duration-300">
                      <div className="rounded-full border group-hover:border-transparent border-[#EF4444] bg-white group-hover:bg-transparent transition-all duration-200 h-6 group-hover:h-[30px] w-6 group-hover:w-[30px] p-1 group-hover:p-0">
                        <RedXIcon className="group-hover:scale-200" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-semibold leading-7">
                    {featureItem.title}
                  </h3>
                </div>
                <p className="text-white text-sm leading-6 mt-5">
                  {featureItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
