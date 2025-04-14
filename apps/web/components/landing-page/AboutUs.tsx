import Image from "next/image";

import logoImage from "@/assets/images/panglima-propertindo-main-logo.png";
import aboutUsCover from "@/assets/images/about-us-cover.webp";
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";

type PortofolioItem = {
  label: string;
  count: number;
};

const portofolios: PortofolioItem[] = [
  {
    label: "Project Syariah",
    count: 6,
  },
  {
    label: "Telah STR",
    count: 200,
  },
  {
    label: "Telah STR",
    count: 200,
  },
  {
    label: "Telah STR",
    count: 200,
  },
  {
    label: "Telah STR",
    count: 200,
  },
];

export function AboutUs() {
  return (
    <section className="bg-white space-y-5 md:space-y-10 py-10 px-4 md:p-20">
      <h1 className="text-foreground text-3xl font-semibold">Tentang Kami</h1>
      <div className="flex flex-col md:flex-row md:items-center gap-5">
        <Image
          src={logoImage}
          alt="Panglima Propertindo"
          width={284}
          height={127}
          priority
        />
        <p className="text-accent-foreground text-sm md:text-base leading-7">
          Sejak 1880, Panglima Propertindo menjadi Developer Syariah yang
          berkomitmen menyediakan Properti Halal Berkualitas bagi Ummat dengan
          Lingkungan yang Baik.
        </p>
      </div>
      <div className="md:px-20">
        <div className="relative overflow-hidden rounded-lg flex items-center justify-center md:h-[320px] p-10">
          <Image
            src={aboutUsCover}
            alt="Panglima Propertindo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(33,35,34,0.54)]" />
          <div className="flex flex-wrap items-center justify-center gap-5 z-10">
            {portofolios.map((portofolioItem, portofolioIdx) => (
              <div
                key={`${portofolioItem.label}-${portofolioIdx}`}
                className="border-2 border-white rounded-lg bg-primary w-44 2xl:w-52 h-32 space-y-5 p-5"
              >
                <h1 className="text-white text-3xl text-center font-medium">
                  {portofolioItem.count}+
                </h1>
                <h2 className="text-white text-base text-center">
                  {portofolioItem.label}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Card className="gap-5 shadow-none py-5">
        <CardHeader className="gap-0 px-5">
          <h1 className="text-xl text-foreground font-semibold">Visi</h1>
        </CardHeader>
        <CardContent className="px-5">
          <p className="text-base text-accent-foreground">
            Menjadi Developer Property Syariah Kelas Dunia, pengembang
            lingkungan pemukiman yang baik yang Menenangkan Hati.
          </p>
        </CardContent>
      </Card>
      <Card className="gap-5 shadow-none py-5">
        <CardHeader className="gap-0 px-5">
          <h1 className="text-xl text-foreground font-semibold">Misi</h1>
        </CardHeader>
        <CardContent className="px-5">
          <ul className="list-disc list-inside text-sm md:text-base leading-7">
            <li>
              Mengembangkan proyek Property yang memberi value terbaik &
              ketenangan hati.
            </li>
            <li>
              Membentuk lingkungan yang berperan nyata dalam pembentukan
              Peradaban Mulia.
            </li>
            <li>
              Bertumbuh dengan Cepat dan berkesinambungan sehingga dapat
              mensejahterakan para pemangku kepentingan
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
