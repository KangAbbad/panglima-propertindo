import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ArrowUpRight, MapPin } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@workspace/ui/components/card";

import projectPerumahanHalalElfidaMulia from "@/assets/images/project-perumahan-halal-elfida-mulia.png";
import projectSalimaMemorialPark from "@/assets/images/project-salima-memorial-park.png";
import projectPesonaElfida from "@/assets/images/project-pesona-elfida.png";
import projectRoyalGardenPanglima from "@/assets/images/project-royal-garden-panglima.png";
import projectMuliaParkRegency from "@/assets/images/project-mulia-park-regency.png";

type ProjectItem = {
  name: string;
  address: string;
  unitTypes: string[];
  mapLink: string;
  imageUrl: StaticImport;
};

const projects: ProjectItem[] = [
  {
    name: "Perumahan Halal Elfida Mulia",
    address: "Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur",
    unitTypes: [
      "Ahsan",
      "Mumtaz",
      "Sultan",
      "Ahsan",
      "Mumtaz",
      "Sultan",
      "Ahsan",
      "Mumtaz",
      "Sultan",
    ],
    mapLink: "#",
    imageUrl: projectPerumahanHalalElfidaMulia,
  },
  {
    name: "Salima Memorial Park - Sambutan",
    address: "Jl. Sultan Sulaiman Sambutan, Samarinda, Kalimantan Timur",
    unitTypes: ["Single", "Couple", "Family", "Single"],
    mapLink: "#",
    imageUrl: projectSalimaMemorialPark,
  },
  {
    name: "Pesona Elfida",
    address: "Jl. Gn. Lingai Sungai Pinang, Samarinda, Kalimantan Timur",
    unitTypes: ["Al Kalam", "Al Karim"],
    mapLink: "#",
    imageUrl: projectPesonaElfida,
  },
  {
    name: "Royal Garden Panglima",
    address: "Jl. Magelang, Lempake, Samarinda, Kalimantan Timur",
    unitTypes: ["Kavling Produktif", "Kavling Villa"],
    mapLink: "#",
    imageUrl: projectRoyalGardenPanglima,
  },
  {
    name: "Mulia Park Regency",
    address: "Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur",
    unitTypes: ["Kavling", "Kavling Hook"],
    mapLink: "#",
    imageUrl: projectMuliaParkRegency,
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-secondary py-10 px-4 md:py-20 md:px-0">
      <div className="container mx-auto">
        <h1 className="text-foreground text-2xl md:text-3xl font-semibold">
          Project
        </h1>
        <p className="text-muted-foreground text-sm md:text-base leading-7 mt-4">
          Berikut adalah daftar project dari Panglima Propertindo
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mt-5 md:mt-10">
          {projects.map((projectItem, projectIdx) => {
            const countUnitRest = projectItem.unitTypes.length - 3;
            return (
              <Card
                key={`${projectItem.name}-${projectIdx}`}
                className="border border-white hover:border-primary transition-colors rounded-xl hover:cursor-pointer gap-4 py-4 overflow-hidden shadow-none"
              >
                <CardHeader className="gap-4 px-4">
                  <div className="relative overflow-hidden rounded-lg h-[208px] w-full">
                    <Image
                      src={projectItem.imageUrl as StaticImport}
                      alt={projectItem.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {projectItem.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-0">
                      <MapPin size={24} className="text-[#FA9500]" />
                    </div>
                    <div className="flex-1 space-y-1 w-full overflow-hidden">
                      <p className="text-sm text-secondary-foreground truncate">
                        {projectItem.address}
                      </p>
                      <div className="inline-block">
                        <Link
                          href={projectItem.mapLink}
                          className="flex items-center gap-2 text-sm text-[#FA9500]"
                        >
                          Lihat di Map
                          <ArrowUpRight size={16} />
                        </Link>
                        <div className="block border-b border-[#FA9500]" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="block text-sm text-muted-foreground">
                      Tipe Unit
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {projectItem.unitTypes
                        .slice(0, 3)
                        .map((unitType, unitTypeIdx) => (
                          <div
                            key={`${unitType}-${unitTypeIdx}`}
                            className="rounded-full border border-[#FA9500] bg-[rgba(250,149,0,0.08)] pb-0.5 px-3"
                          >
                            <span className="text-foreground text-sm">
                              {unitType}
                            </span>
                          </div>
                        ))}
                      {countUnitRest > 0 && (
                        <div className="rounded-full border border-[#FA9500] bg-[rgba(250,149,0,0.08)] pb-0.5 px-3">
                          <span className="text-foreground text-sm">
                            +{countUnitRest}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
